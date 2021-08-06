import axios from 'axios'
import Header from '../layout/header';
import Footer from "../layout/footer";
import RightContainer from "./right_container";

const React = require('react')
const Chess = require('../../src/react-chess')

require('./vtchess.css')

class Vtchess extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pieces: Chess.getDefaultLineup(),
      position: []
    }
    this.handleMovePiece = this.handleMovePiece.bind(this)
    this.onDragStop = this.onDragStop.bind(this)
  }

  async onDragStop(piece, fromSquare, toSquare) {
    const Pieces = this.state.pieces;
    const move = {
      "pieceName" : piece.name,
      "fromSquare": fromSquare,
      "toSquare": toSquare
    };
    const validMove = await axios.post('http://localhost:8000/moves/valid-move', {
      move: move,
      position: this.state.position
    })
      .then((response) => {
        return response.data.message.valid === true;

      })
      .catch((error) => {
        console.log(error);
      });

    if (validMove === false) {
      this.setState({ pieces: [] });
      this.setState({ pieces: Pieces });
    } else {
      const position = this.state.position;
      position.push(fromSquare + toSquare);
      this.setState({ position: position });
    }

    return false;
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
    const {pieces, position} = this.state
    return (
      <div>
        <Header />
        <div className="mainContainer">
            <RightContainer position={position} />
            <div className="left-container">
              <Chess
                pieces={pieces}
                onDragStop={this.onDragStop}
                onMovePiece={this.handleMovePiece}
              />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Vtchess;
