import React, { useEffect, useRef, useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";
import { createBlock, getBlockBydoucmentId, updateBlock } from "../../redux/service/blockService/blockService";
import { handler } from "daisyui";
import { useParams } from "react-router-dom";
import { createBlockSuccess, updateBlockSuccess } from "../../redux/slice/blockSlice/blockSlice";
import { useDispatch } from "react-redux";

export const Editor = ({initialContent}) => {
  const [blocks, setBlock] = useState([]);
  const block = [...blocks];
  const param      =  useParams();
  const documentId =  param.id;
  const dispatch = useDispatch();
  console.log(initialContent);

  // Create Block
  const handleCreateBlock = async () => {
    for (let index = 0; index < block.length; index++) {
      const text = block[index]
      const types = blocks.filter(obj => obj.type).map(obj => obj.type);
      const type = types[index]
      console.log(block[index]);
      const blockId = block[index].id;
      const checkIsExist = initialContent.find(value => value.id === blockId);
      if(!checkIsExist){
        const response = await createBlock(type,text,documentId);
        dispatch(createBlockSuccess(response));
      }
      // if(checkIsExist){
      //   const response = await updateBlock(blockId,documentId,text);
      //   dispatch(updateBlockSuccess(response));
      // }
    }
  }

  //Editor
  const editor = useBlockNote({
    initialContent: initialContent,
    onEditorContentChange: (editor) => {
      const content = [];
      setBlock(content);
      for (let indexOfTopLevelBlocks = 0; indexOfTopLevelBlocks < editor.topLevelBlocks.length; indexOfTopLevelBlocks++) {
        const element = editor.topLevelBlocks[indexOfTopLevelBlocks];
        for (let indexOfContent = 0; indexOfContent < element.content.length; indexOfContent++) {
          const type = element.type
          const id   = element.id;
          const text = element.content[0].text;
          const typeContent = element.content[0].type
          const level = element.props.level;
          if (type == 'heading') {
            const dataOfContent = {id:id, type: type, typeContent:typeContent, text: text, level: level };
            content.push(dataOfContent);
          } else {
            const dataOfContent = {id:id, type: type, typeContent:typeContent, text: text };
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
      <BlockNoteView editor={editor}/>
    </div>

  )
};
