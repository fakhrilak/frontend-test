import React, { useState } from 'react';
import { datalogin } from "./logindata";
import FormItem from '../../components/Form/FormItem';
import math from "../../img/math.png";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [newItem, setNewItem] = useState(datalogin);
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory()
  const handleSubmitForm = () => {
    const dummydata = {
      "status": true,
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMzQuMTAxLjE0NS40OTo4MDA0L2FwaS9sb2dpbiIsImlhdCI6MTY4OTIxOTY5OCwiZXhwIjoxNjg5MjIzMjk4LCJuYmYiOjE2ODkyMTk2OTgsImp0aSI6IjBuWmVvZVBQelpjeTZKZFkiLCJzdWIiOiI0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.6IHtmZwuZCu2b1jyx1psy9rtwQfwbhIgpIB3RBWFmqk",
      "token_type": "bearer",
      "expires_in": 604800
    }
    setCookie('token', dummydata.access_token, { path: '/' });
    history.push("/")
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmitForm();
  //   }
  // };

  return (
    <div className='w-12/12 m-auto grid grid-cols-2 h-screen'>
      <div className='w-6/12 m-auto h-11/12'>
        <div className='w-12/12 text-center'>
          <img
            className='w-9/12'
            src='https://blogger.zilog.online/static/media/logo.436f1557.png'
            alt='Logo'
          />
        </div>
        <form>
          {datalogin.map((data, index) => (
            <div key={index} className='mt-5 w-9/12'>
              <FormItem
                data={data}
                index={index}
                newItem={newItem}
                setnewItem={setNewItem}
              />
            </div>
          ))}
          <div className='w-9/12 text-right mt-5 rounded'>
            <button
              onClick={()=>handleSubmitForm()}
              className='w-4/12 text-white font-bold rounded h-8 bg-gray-400 hover:bg-gray-500'
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='w-full m-auto' style={{ backgroundImage: `url(${math})`, backgroundSize: 'cover' }}>
        <div className='mt-52 text-center'>
           <p className='text-2xl font-bold text-yellow-300'>Genggam Dunia Dengan <strong className='text-gray-500'>MATEMATIKA</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
