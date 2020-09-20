import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ displayName, value, language, onChange }) {
  const [open, setOpen] = useState(true);

  const changeHandler = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor ${open ? "" : "collapse"}`}>
      <div className="editor__title">
        {displayName}
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          type="button"
          className="editor__expand-collapse"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={changeHandler}
        value={value}
        className="editor__code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
