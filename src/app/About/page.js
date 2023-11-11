import React from 'react';
import Image from 'next/image'; // Import the Image component

const page = () => {
    return (
        <div>
            {/* Replace the <img> tag with the <Image> component */}
            <Image src="/next.svg" alt="image" width={300} height={200} />
            About us
        </div>
    );
};

export default page;
