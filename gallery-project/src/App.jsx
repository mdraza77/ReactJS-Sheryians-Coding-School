import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [image, setImage] = useState([]);
  const [paginateion, setPaginateion] = useState(1);

  const getImages = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${paginateion}&limit=15`,
    );
    setImage(response.data);
  };

  let data = <h3 className="text-gray-500 text-xs">Loading...</h3>;

  useEffect(
    function () {
      getImages();
    },
    [paginateion],
  );

  if (image.length > 0) {
    data = image.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen">
      {/* <h1 className="text-4xl font-bold text-green-600">{paginateion}</h1> */}
      <div className="flex flex-wrap gap-4">{data}</div>
      <div className="flex justify-center">
        <div className="flex justify-center gap-4 py-8">
          <button
            className="px-4 py-2 rounded-lg bg-gray-500 active:scale-95 hover:bg-gray-600 active:bg-gray-700 text-lg text-white cursor-pointer"
            onClick={() => {
              if (paginateion > 1) {
                setPaginateion(paginateion - 1);
              }
            }}
          >
            Prev
          </button>
          <h3 className="py-2">Page {paginateion}</h3>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 active:scale-95 hover:bg-blue-600 active:bg-blue-700 text-lg text-white cursor-pointer"
            onClick={() => {
              setPaginateion(paginateion + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
