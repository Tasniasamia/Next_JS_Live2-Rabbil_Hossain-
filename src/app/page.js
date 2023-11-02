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
      This is Home Page


      <button onClick={()=>{findQuery('tasnia@qwikit.com','password')}}>Find Query</button>

    </div>
  );
};

export default page;