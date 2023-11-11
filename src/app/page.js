"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();


    // Check if `router` is available before using it
    if (router) {
      const findQuery = (email, password) => {
        router.push(`/Product?email=${email}&password=${password}`);
      };
      
      return (
        <div>
          <Image src='/banner.png' alt="Description of the image" width={500} height={300} />
          <Image src='/doctor.png' alt="Description of the image" width={500} height={300} />
          <Image src='/people.png' alt="Description of the image" width={500} height={300} />
    
          This is Home Page
    
          <button onClick={() => { findQuery('tasnia@qwikit.com', 'password') }}>Find Query</button>
        </div>
      );
    }
}

  // Handle the case where router is not available


export default page;
