import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let parametros = useParams();

  const getCuisine = async (tipo) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${tipo}`);
    const receitas = await data.json();
    setCuisine(receitas.results);
  };

  useEffect(() => {
    getCuisine(parametros.type)
  }, [parametros.type]);

  return (
    <div>Cuisine</div>
  )
}

export default Cuisine;