import React from 'react';
import { useEffect, useState } from 'react';
import {Titulos} from '../data';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper';

const Vegetarianos = () => {
    const {tituloVegetarianos} = Titulos;
    const [vegetarianos, setVegetarianos] = useState([]);

    useEffect(() => {
        receitasVegetarianas();
    }, []);

    const receitasVegetarianas = async () => {

        // CHECANDO NO LOCALSTORAGE SE JÁ FOI REALIZADO O FETCH E SE HÁ DADOS ARMAZENADOS PARA NÃO ESTOURAR O LIMITE DIÁRIO DE CONSULTAS À API
        const checarLocalStorage = localStorage.getItem('veggie'); //esse "popular" é o nome da key onde ficam armazenadas as informações no local storage

        if (checarLocalStorage) {
            setVegetarianos(JSON.parse(checarLocalStorage)); //o parse transforma uma string em um objeto, contrário do stringify
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
            const data = await api.json();
            setVegetarianos(data.recipes);
            localStorage.setItem('veggie', JSON.stringify(data.recipes)); //o stringify é o contrário do parse e transforma um objeto ou array em string
        };
    };
  return (
    <div>
        <h3 className='ml-4 py-4 font-bold'>{tituloVegetarianos}</h3>
             <div className='mx-4'>
                <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'disabled_swiper_button'
                }}
                loop={true}
                speed={800}
                className='meuSwiper'
                slidesPerView={3}
                >
                    {
                        vegetarianos.map((receitas, index) => {
                                return (
                                        <SwiperSlide className='swiperSlide mx-1'>
                                            <div key={index} className='min-h-[120px] w-[100%] relative flex justify-center items-center'>
                                                <p className='p-2 absolute z-10 text-white text-center font-medium text-sm'>{receitas.title}</p>
                                                <img src={receitas.image} alt={receitas.title} className='rounded-2xl h-[120px] w-[450px] object-cover absolute contrast-50'/>
                                            </div>
                                        </SwiperSlide>
                                )
                            })

                        }
                </Swiper>
            </div>
    </div>
  )
}

export default Vegetarianos;