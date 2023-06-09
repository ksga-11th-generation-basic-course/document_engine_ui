import React, { useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";
import { useDispatch } from "react-redux";
import { createBlockSuccess } from "../../redux/slice/blockSlice/blockSlice";
import { createBlock } from "../../redux/service/blockService/blockService";
import { useParams } from "react-router-dom";

export const Editor = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [myArray, setMyArray] = useState([]);
  const [timerId, setTimerId] = useState(null);
  const param = useParams();
  const documentId = param.id;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create new object with input value and add it to the array
    const newObj = { key1: inputValue };
    setMyArray([...myArray, newObj]);
    // Clear input field
    setInputValue('');
  };


  function handleInputChange(event) {
    event.preventDefault();
    clearTimeout(timerId);
    const newTimerId = setTimeout(() => {
      const handleUpdateDocument = async () => {
        const block = await createBlock('helo',myArray,documentId);
        dispatch(createBlockSuccess(block));
      }
      handleUpdateDocument();
      console.log('successfully');
    }, 3000);
    setTimerId(newTimerId);
  }
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
  });

  return <BlockNoteView editor={editor} />;
};
