import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.title}
          onChange={(event) => props.onChanged(event)}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={props.content}
          rows="3"
          onChange={(event) => props.onChanged(event)}
        />
        <button
          onClick={(event) => {
            props.onClicked(event);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
