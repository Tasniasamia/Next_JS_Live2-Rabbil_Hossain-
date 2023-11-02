"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
    const searchParams=useSearchParams();
    console.log("email",searchParams.get("email"));
    console.log("password",searchParams.get("password"));
    const router = useRouter();
    
    const findId = (id) => {
        router.push(`/Product/${id}`);
    }
   

    return (
        <div>
            Product All
            <button onClick={() => { findId("1230sdfe232") }}>View Details</button>
        </div>
    );
};

export default page;
