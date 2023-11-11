// "use client";
// import React from 'react';
// import { useRouter } from 'next/router'; // Change the import statement
// import Image from 'next/image';

// const page = () => {
//   const router = useRouter();

//   const findQuery = (email, password) => {
//     router.push(`/Product?email=${email}&password=${password}`);
//   };

//   return (
//     <div>
//       <Image src='/banner.png' alt="Description of the image" width={500} height={300} />
//       <Image src='/doctor.png' alt="Description of the image" width={500} height={300} />
//       <Image src='/people.png' alt="Description of the image" width={500} height={300} />

//       This is Home Page

//       <button onClick={() => { findQuery('tasnia@qwikit.com', 'password') }}>Find Query</button>
//     </div>
//   );
// };

// export default page;
import React from 'react';

const page = () => {
    return (
        <div>
            Product
        </div>
    );
};

export default page;