import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/notes").then((res) => {
      // console.log(res.data);
      setNote(res.data.notes);
    });
  }, []);

  return (
    <div>
      <div className="px-5 py-5">
        <div className="flex gap-5">
          {note.map(function (elem, idx) {
            return (
              <div key={idx}>
                <div>
                  <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                      {elem.title}
                    </h5>
                    <p className="text-body">{elem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
