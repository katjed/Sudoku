import React from 'react';
import style from './Tile.css';

const Tile = props => {
    const edit = props.edit

    return (
        <div className={style.Tile}>
            {edit ? (
                <input   
                    className={style.TileInput}
                    type='number'
                    min='1'
                    max='9'
                    value={props.value == '.' ? '' : props.value}   
                    onChange={(e) => props.onChangeHandler(props.index, e.target.value)}                 
                />
            ) : (
                <input
                    className={style.TileInput}
                    type='number'
                    min='1'
                    max='9'
                    value={props.value}
                    disabled="true"                    
                />
            )}  
        </div>	
    );
};

export default Tile;