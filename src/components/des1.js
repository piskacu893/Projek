import React from "react";
import { destData } from "../Pages/destinationData";

const des1 = () => {
  return (
    <>
      <div className="relative">
        <div>
          <h1 className="text-center text-4xl font-bold text-gray-800">Destination</h1>
        </div>

          <div class="items-left mx-10">
            {destData.map((items, index) => (
            <div className='mx-auto my-6 text-center' key={index}>
              <h2 class="my-6 text-2xl text-center"><strong>{items.title}</strong></h2>
              <img class="mx-auto h-64 my-6" src={require(`../img/${items.pict}`)} />
              <p class="mx-auto">{items.text}</p>  
            </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default des1;
