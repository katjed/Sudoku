import React from 'react';
import sudoku from 'sudoku-umd';
import Tile from './Tile.js';
import style from './Board.css';

const Board = props => {
	const tiles = props.board.split('').map((tile, id) => {
        const edit = props.initialBoard[id] === '.';
        
        return (
            <Tile 
                key={id} 
                edit={edit}
                index={id} 
                value={tile} 
                onChangeHandler={props.onChangeHandler} />
        );
    });

	return <div className={style.Board}>{tiles}</div>;
};

export default Board;