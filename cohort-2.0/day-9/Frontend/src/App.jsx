import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchNotes = async () => {
    await axios.get("http://localhost:3000/notes").then((res) => {
      setNote(res.data.notes);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/notes", {
        title: title,
        description: description,
      });
      setTitle("");
      setDescription("");
      fetchNotes();
    } catch (error) {
      window.alert("Error While Creating", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      window.alert("Error While Deleting!", error);
    }
  };

  return (
    <div>
      <div className="px-5 py-5">
        <div>
          <form onSubmit={submitHandler} className="max-w-sm mx-auto space-y-4">
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Title
              </label>
              <input
                type="text"
                id="visitors"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Description
              </label>
              <input
                type="text"
                id="visitors"
                name="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"
                placeholder=""
                required
              />
            </div>
            <button>Submit</button>
          </form>
        </div>

        <div className="flex flex-wrap gap-5">
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
                  <button
                    onClick={() => {
                      deleteNote(elem._id);
                    }}
                  >
                    Delete
                  </button>
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
