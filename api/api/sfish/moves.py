from stockfish import Stockfish
import chess

stockfish = Stockfish('./../stockfish-10/Linux/stockfish_10_x64')

def valid_move(data, position):
#     stockfish.set_position(position)
#     valid = stockfish.is_move_correct(data)
#     bestMove = stockfish.get_best_move()
#     return { data }
    board = chess.Board()
    for move in position:
        board.push_san(move)
    uci_data = str(data['fromSquare'] + data['toSquare'])
    if chess.Move.from_uci(uci_data) in board.legal_moves:
        valid = True
    else:
        valid = False
    best_move = ""
    info = stockfish.info
    if (valid):
        position.append(uci_data)
        endGame = end_game(position)
        haveCheck = have_check(position)
    else:
        endGame = 'no'
        haveCheck = 0
    return { 'valid' : valid, 'best_move' : best_move, 'endGame' : endGame, 'haveCheck': haveCheck, 'info': info, 'position': position }

def end_game(position):
#     return position
    board = chess.Board()
    for move in position:
        board.push_san(move)
    if board.is_checkmate():
        endGame = 'checkmate'
    elif board.is_stalemate():
        endGame = 'stalemate'
    elif board.is_insufficient_material():
        endGame = 'insufficient_material'
    elif board.can_claim_threefold_repetition():
        endGame = 'can_claim_threefold_repetition'
    elif board.can_claim_fifty_moves():
        endGame = 'can_claim_fifty_moves'
    elif board.is_fivefold_repetition():
        endGame = 'fivefold_repetition'
    elif board.is_seventyfive_moves():
        endGame = 'seventyfive_moves'
    elif board.is_game_over():
        endGame = 'game_over'
    else:
        endGame = 0
    return endGame

def have_check(position):
    board = chess.Board()
    for move in position:
        board.push_san(move)
    if board.is_check():
        haveCheck = 1
    else:
        haveCheck = 0
    return haveCheck
