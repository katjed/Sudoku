import React from 'react';
import style from './Tile.css';

const Tile = props => (
   	<input
        className={style.Tile}
     	type='number'
     	min='1'
     	max='9'
    	value={props.value !== '.' ? props.value : ''}
        onChange={(e) => props.onChangeHandler(props.index, e.target.value)}
   	/>
);
 
export default Tile;