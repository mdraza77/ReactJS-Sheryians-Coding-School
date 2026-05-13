import React from "react";

const Main = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center gap-4 py-8">
        <button
          style={{ opacity: paginateion == 1 ? 0.6 : 1 }}
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
  );
};

export default Main;
