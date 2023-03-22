import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let parametros = useParams();

  const getCuisine = async (tipo) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${tipo}`);
    const receitas = await data.json();
    console.log(receitas)
    setCuisine(receitas.results);
  };

  useEffect(() => {
    getCuisine(parametros.type)
  }, [parametros.type]);

  return (
    <div className='grid grid-cols-2 px-4 gap-y-8 gap-x-4 md:grid-cols-4'>
      {cuisine.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt={item.title} className="w-full rounded-lg"/>
            <h4 className='text-sm font-medium text-center pt-2'>{item.title}</h4>
          </div>
        )
      })};
    </div>
  )
}

export default Cuisine;