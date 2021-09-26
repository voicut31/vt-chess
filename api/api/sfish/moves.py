from stockfish import Stockfish
import chess

stockfish = Stockfish('./../stockfish-10/Linux/stockfish_10_x64')


def valid_move(data, position, computer):
    board = chess.Board()
    for move in position:
        board.push_san(move)
    uci_data = str(data['fromSquare'] + data['toSquare'])
    if chess.Move.from_uci(uci_data) in board.legal_moves:
        valid = True
    else:
        valid = False
    info = stockfish.info

    best_move = ''
    if valid:
        position.append(uci_data)
        is_end_game = end_game(position)
        is_check = have_check(position)
        if computer['play_with_computer']:
            stockfish.set_position(position)
            stockfish.depth = computer['level']
            best_move = stockfish.get_best_move()

    else:
        is_end_game = 'no'
        is_check = 0

    return {
        'valid': valid,
        'best_move': best_move,
        'endGame': is_end_game,
        'haveCheck': is_check,
        'info': info,
        'position': position
    }


def end_game(position):
    board = chess.Board()
    for move in position:
        board.push_san(move)
    if board.is_checkmate():
        is_end_game = 'checkmate'
    elif board.is_stalemate():
        is_end_game = 'stalemate'
    elif board.is_insufficient_material():
        is_end_game = 'insufficient_material'
    elif board.can_claim_threefold_repetition():
        is_end_game = 'can_claim_threefold_repetition'
    elif board.can_claim_fifty_moves():
        is_end_game = 'can_claim_fifty_moves'
    elif board.is_fivefold_repetition():
        is_end_game = 'fivefold_repetition'
    elif board.is_seventyfive_moves():
        is_end_game = 'seventyfive_moves'
    elif board.is_game_over():
        is_end_game = 'game_over'
    else:
        is_end_game = 0
    return is_end_game


def have_check(position):
    board = chess.Board()
    for move in position:
        board.push_san(move)
    if board.is_check():
        is_check = 1
    else:
        is_check = 0
    return is_check
