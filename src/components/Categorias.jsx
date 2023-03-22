import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {Filtros} from '../data';
import {NavLink} from 'react-router-dom';

const Categorias = () => {
    const {italiana, americana, tailandesa, japonesa} = Filtros;
  return (
    <div className='flex justify-center my-8 gap-x-4'>
        <NavLink to={'/cuisine/Italian'} className='flex flex-col items-center cursor-pointer'>
            <div className='bg-sky-500 p-3 rounded-full'><FaPizzaSlice/></div>
            <h4 className='font-medium text-sm pt-1'>{italiana}</h4>
        </NavLink>
        <NavLink to={'/cuisine/American'} className='flex flex-col items-center cursor-pointer'>
            <div className='bg-sky-500 p-3 rounded-full'><FaHamburger /></div>
            <h4 className='font-medium text-sm pt-1'>{americana}</h4>
        </NavLink>
        <NavLink to={'/cuisine/Thai'} className='flex flex-col items-center cursor-pointer'>
            <div className='bg-sky-500 p-3 rounded-full'><GiNoodles /></div>
            <h4 className='font-medium text-sm pt-1'>{tailandesa}</h4>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'} className='flex flex-col items-center cursor-pointer'>
        <div className='bg-sky-500 p-3 rounded-full'><GiChopsticks /></div>
            <h4 className='font-medium text-sm pt-1'>{japonesa}</h4>
        </NavLink>
    </div>
  )
}

export default Categorias;