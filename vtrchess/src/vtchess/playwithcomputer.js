import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from "../layout/footer";
import RightContainer from "./right_container";

const React = require('react')
const Chess = require('../../src/react-chess')

require('./vtchess.css')

class PlayWithComputer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allowMoves: true,
      endGame: '',
      pieces: Chess.getDefaultLineup(),
      position: [],
      computer: {
        'play_with_computer': 0,
        'level': 10
      }
    }
    this.handleMovePiece = this.handleMovePiece.bind(this)
    this.onDragStop = this.onDragStop.bind(this)
  }

  componentDidMount() {
    const position = localStorage.getItem('position');
    const pieces = localStorage.getItem('pieces');
    if (position !== null) {
      this.setState({ 'position': position });
    }
    if (pieces !== null) {
      this.setState({ 'pieces': pieces });
    }
  }

  async onDragStop(piece, fromSquare, toSquare) {
    const Pieces = this.state.pieces;
    const move = {
      "pieceName" : piece.name,
      "fromSquare": fromSquare,
      "toSquare": toSquare
    };
    if (fromSquare === toSquare) {
      return false;
    }

    const message = await axios.post('http://localhost:8000/moves/valid-move', {
      move: move,
      position: this.state.position,
      computer: this.state.computer
    })
      .then((response) => {
        return response.data.message;

      })
      .catch((error) => {
        console.log(error);
      });
    const validMove = message.valid;
    if (validMove === false) {
      this.setState({ pieces: [] });
      this.setState({ pieces: Pieces });
    } else {
      const position = this.state.position;
      const pieces = this.state.pieces;
      position.push(fromSquare + toSquare);
      this.setState({ position: position });
      localStorage.setItem('position', position);
      localStorage.setItem('pieces', pieces);
      if (message.endGame !== 0 && message.endGame !== undefined) {
        this.setEndGame(message.endGame);
      }
//      if (message.bestMove !== 0 && message.endGame !== bestMove) {
//        this.handleMovePiece()
//      }
    }

    return false;
  }

  setEndGame(message) {
    this.setState({ allowMoves: false, endGame: message });
  }

  handleMovePiece(piece, fromSquare, toSquare) {
    const newPieces = this.state.pieces
      .map((curr, index) => {
        if (piece.index === index) {
          return `${piece.name}@${toSquare}`
        } else if (curr.indexOf(toSquare) === 2) {
          return false // To be removed from the board
        }
        return curr
      })
      .filter(Boolean)

    this.setState({pieces: newPieces})
  }

  render() {
    const { pieces, position, endGame } = this.state
    return (
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <div className="mainContainer">
            <Col>
              <RightContainer position={position} endGame={endGame} />
            </Col>
            <Col>
              <div className="left-container">
                <Chess
                  allowMoves={this.state.allowMoves}
                  pieces={pieces}
                  onDragStop={this.onDragStop}
                  onMovePiece={this.handleMovePiece}
                />
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
    )
  }
}

export default PlayWithComputer;
