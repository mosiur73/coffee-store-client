import React from 'react';
import { data, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,setCoffees,coffees}) => {
    const { name, chef, supplier, taste, category, details, photo,_id }=coffee
    const handleDelete=_id =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                      });
                      const remaining=coffees.filter(cof =>cof._id !== _id)
                      setCoffees(remaining)
                }
            })
            }
          });
    }
    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                className='w-[300px]'
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button
                         onClick={() => handleDelete(_id)}
                        className="btn join-item bg-red-500">Del</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;