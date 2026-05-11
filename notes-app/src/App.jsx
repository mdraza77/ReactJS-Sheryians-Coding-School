import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen bg-black">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        action=""
        className="flex flex-col items-start gap-4 justify-between p-10"
      >
        <input
          type="text"
          placeholder="Enter Task"
          className="px-5 py-2 border-2 outline-none rounded text-white"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter Details"
          className="px-5 py-2 border-2 outline-none rounded text-white"
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
        />

        <button className="bg-white text-black px-4 py-3 rounded cursor-pointer active:scale-95">
          Add Note
        </button>
      </form>

      <div>
        {task.map(function (elem, idx) {
          return (
            <div className="text-white px-5 py-5 border-2 rounded" key={idx}>
              <h2 className="text-white text-xl">{elem.title}</h2>
              <h3 className="text-white text-xl">{elem.detail}</h3>
              <button
                className="bg-red-500 text-white px-4 py-3 rounded cursor-pointer active:scale-95"
                onClick={() => {
                  deleteTask(idx);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
