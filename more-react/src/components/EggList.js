import React from 'react';

export const EggList = ({ eggs }) => {
    return (
        <ul className='egg-list'>
            {eggs.map((item, key) => {
                return <EasterEgg id={key} name={item} />;
            })}
        </ul>
    )
};

export const EasterEgg = ({ id, name }) => {
    return (
        <li className='egg-item'>
            <b>{name}</b> is number {id + 1}
        </li>
    )
}

