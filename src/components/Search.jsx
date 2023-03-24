import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <form className='my-8 flex justify-center relative'>
        <input className='border-none bg-slate-500 outline-none text-base text-white py-4 px-12 rounded-2xl' type="text" />
    </form>
  )
}

export default Search;