import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';

const SignUp = () => {
 const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
          const password=e.target.password.value;
          console.log(name,email,password)
               
          createUser(email,password)
          .then(result=>{
            console.log(result)
            const createdAt=result?.user?.metadata?.creationTime;
            const newUser={name,email,createdAt}
            //save new user in the database
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
 
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
            })
          })
          .catch(error =>{
            console.log(error)
          })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default SignUp;