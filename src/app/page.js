"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router=useRouter();
  const findQuery=(email,password)=>{
    router.push(`/Product?email=${email}&password=${password}`);
    
}
  return (
    <div>
      <img src='/banner.png'/>
      <img src='/doctor.png'/>
      <img src='/people.png'/>

      This is Home Page


      <button onClick={()=>{findQuery('tasnia@qwikit.com','password')}}>Find Query</button>

    </div>
  );
};

export default page;