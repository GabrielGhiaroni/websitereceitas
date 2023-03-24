import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {Filtros} from '../data';
import {NavLink} from 'react-router-dom';

const Categorias = () => {
    const {italiana, americana, tailandesa, japonesa} = Filtros;
  return (
    <div className='flex justify-center my-8 gap-x-4'>
        <div className='flex flex-col items-center'>
            <NavLink to={'/cuisine/Italian'} className='rounded-full w-[2.5rem] h-[2.5rem] justify-center flex flex-col items-center cursor-pointer'>
                <div><FaPizzaSlice/></div>
            </NavLink>
            <h4 className='font-medium text-sm pt-1'>{italiana}</h4>
        </div>
        <div className='flex flex-col items-center'>
            <NavLink to={'/cuisine/American'} className='rounded-full w-[2.5rem] h-[2.5rem] justify-center flex flex-col items-center cursor-pointer'>
                <div><FaHamburger /></div>
            </NavLink>
         <h4 className='font-medium text-sm pt-1'>{americana}</h4>
        </div>
        <div className='flex flex-col items-center'>
            <NavLink to={'/cuisine/Thai'} className='rounded-full w-[2.5rem] h-[2.5rem] justify-center flex flex-col items-center cursor-pointer'>
                <div><GiNoodles /></div>
            </NavLink>
            <h4 className='font-medium text-sm pt-1'>{tailandesa}</h4>
        </div>
        <div className='flex flex-col items-center'>
            <NavLink to={'/cuisine/Japanese'} className='rounded-full w-[2.5rem] h-[2.5rem] justify-center flex flex-col items-center cursor-pointer'>
            <div><GiChopsticks /></div>
            </NavLink>
            <h4 className='font-medium text-sm pt-1'>{japonesa}</h4>
        </div>
    </div>
  )
}

export default Categorias;