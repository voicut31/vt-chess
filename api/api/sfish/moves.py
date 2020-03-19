from stockfish import Stockfish
import chess

stockfish = Stockfish('/Users/voicutibea/projects/react-chess/stockfish-10/Mac/stockfish-10-64')

def valid_move(data, position):
    stockfish.set_position(position)
    valid = stockfish.is_move_correct(data)
    bestMove = stockfish.get_best_move()
    info = stockfish.info
    if (valid):
        endGame = end_game(data, position)
        haveCheck = have_check(data, position)
    else:
        endGame = 'no'
    return { 'valid' : valid, 'best_move' : bestMove, 'endGame' : endGame, 'haveCheck': haveCheck, 'info': info }

def end_game(data, position):
    position.append(data)
    board = chess.Board(position)
    if board.is_checkmate():
        endGame = 'checkmate'
    else if board.is_stalemate():
        endGame = 'stalemate'
    else if board.is_insufficient_material():
        endGame = 'insufficient_material'
    else if board.can_claim_threefold_repetition():
        endGame = 'can_claim_threefold_repetition'
    else if board.can_claim_fifty_moves():
        endGame = 'can_claim_fifty_moves'
    else if board.is_fivefold_repetition():
        endGame = 'fivefold_repetition'
    else if board.is_seventyfive_moves():
        endGame = 'seventyfive_moves'
    else if board.is_game_over():
        endGame = 'game_over'
    else:
        endGame = 0
    return endGame

def have_check(data, position):
    position.append(data)
    board = chess.Board(position)
    if board.is_check():
        haveCheck = 1
    else:
        haveCheck = 0
    return haveCheck
