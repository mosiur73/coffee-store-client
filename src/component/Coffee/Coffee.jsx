import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Coffee = () => {
    const loadCoffees=useLoaderData()
    const [coffees,setCoffees]=useState([loadCoffees])
    return (
        <div>
            <h3>cold coffee {coffees.length}</h3>
           <div className='grid md:grid-cols-2 gap-5'>
           {
                coffees.map(coffee=> <CoffeeCard
                     key={coffee._id}
                      coffee={coffee}
                      coffees={coffees}
                      setCoffees={setCoffees}
                      ></CoffeeCard>)
            }
           </div>

        </div>
    );
};

export default Coffee;