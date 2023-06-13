import React, { useEffect, useRef, useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createBlockSuccess } from "../../redux/slice/blockSlice/blockSlice";
import { createBlock, getBlockBydoucmentId } from "../../redux/service/blockService/blockService";
import { useParams } from "react-router-dom";
import { getDocumentByDocumentId } from "../../redux/service/documentService/documentService";
import { handler } from "daisyui";

export const Editor = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const documentId = param.id;
  const [blocks, setBlock] = useState([]);
  const block = [...blocks];

  const blockData = useSelector((state) => state.block.blocks)
  useEffect(() => {
    dispatch(getBlockBydoucmentId(documentId));
  }, [])
  // console.log(blockData);

  // Store data to localstorage
  const data = block;
  localStorage.setItem('mydata', JSON.stringify(data));

  // Get data from localstorage
  const retrievedData = localStorage.getItem('mydata');
  const parsedData = JSON.parse(retrievedData);

  // Create Block
  const handleCreateBlock = async () => {
    for (let index = 0; index < block.length; index++) {
      const text = block[index]
      const types = blocks.filter(obj => obj.type).map(obj => obj.type);
      const type = types[index]
      const response = await createBlock(type, text, documentId);
      const success = dispatch(createBlockSuccess(response));
    }
  }

  function handleInsert() {
    if (editor) {
      editor.insertBlocks([
        { type: 'paragraph', text: 'New paragraph' },
        { type: 'heading', level: 3, text: 'New heading' },
      ]);
    }
  }
  //Editor
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      // console.log(editor.topLevelBlocks);
      const content = [];
      setBlock(content);
      for (let indexOfTopLevelBlocks = 0; indexOfTopLevelBlocks < editor.topLevelBlocks.length; indexOfTopLevelBlocks++) {
        const element = editor.topLevelBlocks[indexOfTopLevelBlocks];
        for (let indexOfContent = 0; indexOfContent < element.content.length; indexOfContent++) {
          const type = element.type
          const text = element.content[0].text;
          const level = element.props.level;
          if (type == 'heading') {
            const dataOfContent = { type: type, text: text, level: level };
            content.push(dataOfContent);
          } else {
            const dataOfContent = { type: type, text: text };
            content.push(dataOfContent);
          }
        }
      }
    },
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
  });
  

  return (
    <div>
      <input type="submit" value='click' onClick={handleCreateBlock} /><br/>
      <input type="submit" value='get' onClick={handleInsert} />
      <BlockNoteView editor={editor} />
    </div>

  )
};
