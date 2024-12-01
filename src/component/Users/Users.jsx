import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUser=useLoaderData()
    const [users,setUsers]=useState(loadedUser)
    const handleDelete=id=>{
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
        

            //delete from the database
            fetch(`http://localhost:5000/users/${id}`,{
               method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

                          const remainingUser=users.filter(user =>user._id !== id)
                          setUsers(remainingUser)
                }
            })
            }
          });
    }
    return (
        <div>
            
            this is user page::{users.length}

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>createAt</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user._id}</td>
            <td>
                <button className='btn btn-info mr-2'>Edit</button>
                <button onClick={()=>handleDelete(user._id)} className='btn btn-warning'>Del</button>
            </td>
          </tr>
         )
      }
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Users;