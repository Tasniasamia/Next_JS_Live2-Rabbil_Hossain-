import React from 'react';

const page = ({searchParams}) => {
    console.log(searchParams.email);
    return (
        <div>
            Blog here
        </div>
    );
};

export default page;