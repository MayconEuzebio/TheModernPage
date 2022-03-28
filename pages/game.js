import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const winnerStyle = { 
  backgroundColor: '#ffa500', 
  borderColor: '#ffa500', 
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#262626',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column',
  'backgroundColor': '#090909',
  'color': '#f2f2f2',
  'height': '100vh',
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
  'padding': '8px 16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#f9f9f9',
  'color': '#000',
  'fontSize': '16px',
  'border': '0',
  'borderRadius': '3px',
}

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
      <div
      onClick={this.props.callbackParent}
        className="square"
        style={squareStyle}>
            {this.props.value}
      </div>
    );
  }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = this.getInitialState();

        this.reset = this.reset.bind(this);
        this.ticTacToeGame = this.ticTacToeGame.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
    }

    getInitialState () {
        return {
            winner: "",
            winnerStyle: {},
            boxs: {},
            turn: 0,
            linesToWin: [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6],
          ],
          };
    }

    reset() {
        this.setState(this.getInitialState());
    }

    ticTacToeGame(player){

        if(this.state.turn < 4) { return false; }

        const lines = this.state.linesToWin;
        const box = this.state.boxs;

        for (let i=0; i< lines.length; i++) {
            let [a, b, c] = lines[i];
            if ((box[a] === player) && box[a] === box[b] && box[a] === box[c]) {
                this.setState({winner : player});
                this.setState({winnerStyle : winnerStyle});
                return true;
            }
        }
        
        return false;
    }

    nextTurn(idx){
        
        if(this.state.boxs[idx] || this.state.winner) { return false }

        let boxs = this.state.boxs;
        boxs[idx] = this.state.turn % 2 == 0 ? 'X' : 'O';
        this.setState({boxs: boxs});

        this.ticTacToeGame(boxs[idx])

        this.setState({turn : this.state.turn +1});
    }

  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>
            Next player: <span>{this.state.turn % 2 == 0 ? 'X' : 'O'}</span>
        </div>
        <div id="winnerArea" className="winner" style={{...instructionsStyle, ...this.state.winnerStyle}}>
            Winner: <span>{this.state.winner || '?'}</span>
        </div>
        <button style={buttonStyle} onClick={this.reset}>Reset</button>
        <div style={{...boardStyle, ...this.state.winnerStyle}}>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.boxs[0]} callbackParent={() => this.nextTurn(0)}/>
            <Square value={this.state.boxs[1]} callbackParent={() => this.nextTurn(1)}/>
            <Square value={this.state.boxs[2]} callbackParent={() => this.nextTurn(2)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.boxs[3]} callbackParent={() => this.nextTurn(3)}/>
            <Square value={this.state.boxs[4]} callbackParent={() => this.nextTurn(4)}/>
            <Square value={this.state.boxs[5]} callbackParent={() => this.nextTurn(5)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square value={this.state.boxs[6]} callbackParent={() => this.nextTurn(6)}/>
            <Square value={this.state.boxs[7]} callbackParent={() => this.nextTurn(7)}/>
            <Square value={this.state.boxs[8]} callbackParent={() => this.nextTurn(8)}/>
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

//ReactDOM.render(
//  <Game />,
//  document.getElementById('root')
//);
export default Game