import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [noteItems, setNoteItems] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    name === "title" ? setInputTitle(value) : setInputText(value);
  }

  function handleClick(event) {
    setNoteItems((prevItems) => {
      return [
        ...prevItems,
        {
          title: inputTitle,
          content: inputText
        }
      ];
    });
    setInputText("");
    setInputTitle("");
    event.preventDefault();
  }

  function deleteNote(id) {
    setNoteItems((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onChanged={handleChange}
        onClicked={handleClick}
        title={inputTitle}
        content={inputText}
      />
      {noteItems.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          removeNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
