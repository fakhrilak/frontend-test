import React, { useState } from 'react';
import { datalogin } from "./logindata";
import FormItem from '../../components/Form/FormItem';
import math from "../../img/math.png";

const Login = () => {
  const [newItem, setNewItem] = useState(datalogin);

  const handleSubmitForm = () => {
    alert("Submitted");
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmitForm();
  //   }
  // };

  return (
    <div className='w-12/12 m-auto grid grid-cols-2 h-screen'>
      <div className='w-5/12 m-auto h-11/12'>
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
      <div className='w-full' style={{ backgroundImage: `url(${math})`, backgroundSize: 'cover' }} />
    </div>
  );
};

export default Login;
