import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {Filtros} from '../data';
import {NavLink} from 'react-router-dom';

const Categorias = () => {
    const {italiana, americana, tailandesa, japonesa} = Filtros;
  return (
    <div className='flex justify-center my-8'>
        <NavLink to={'/cuisine/Italian'} className='flex flex-col items-center'>
            <FaPizzaSlice />
            <h4>{italiana}</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className='flex flex-col items-center'>
            <FaHamburger />
            <h4>{americana}</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'} className='flex flex-col items-center'>
            <GiNoodles />
            <h4>{tailandesa}</h4>
        </NavLink>
        <NavLink className='flex flex-col items-center'>
            <GiChopsticks />
            <h4>{japonesa}</h4>
        </NavLink>
    </div>
  )
}

export default Categorias;