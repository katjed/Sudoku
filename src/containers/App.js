import React from 'react';
import sudoku from 'sudoku-umd';
import Board from '../components/Board.js';
import style from './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		const initialBoard = sudoku.generate('easy', false);
		this.state = {
	  		initialBoard,
	  		board: initialBoard,
		}
  	}

  	checkBoard() {
		const solution = sudoku.solve(this.state.board);

        if (!solution) {
            alert('Zła droga...');
        } else {
            alert('Jesteś na drodze sukcesu... ;)');
        }
  	}

  	solveBoard() {
        const board = sudoku.solve(this.state.board);

        if (board) {
    		this.setState({
    	  		board
    		});
        }
  	}
  
  	resetBoard() {
		this.setState({
	  		board: this.state.initialBoard
		});
  	}

  	newBoard() {
		const initialBoard = sudoku.generate('easy', false);

		this.setState({
	  		initialBoard: initialBoard,
	  		board: initialBoard,
		});
  	}

    onChangeHandler(index, value) {
        const newBoard = `${this.state.board.slice(0, index)}${value}${this.state.board.slice(index + 1)}`;

        this.setState({
            board: newBoard
        });
    }

  	render() {
		return (
	  		<div className={style.App}>
				<h1 className={style.Header}>Sudoku</h1>
				<Board board={this.state.board} onChangeHandler={this.onChangeHandler.bind(this)} />
				<div className={style.Buttons}>
		  			<button onClick={this.checkBoard.bind(this)}>Check</button>
		  			<button onClick={this.newBoard.bind(this)}>New game</button>
		  			<button onClick={this.solveBoard.bind(this)}>Solve</button>
		  			<button onClick={this.resetBoard.bind(this)}>Restart</button>
				</div>
	  		</div>
		)
  	}
}

export default App;