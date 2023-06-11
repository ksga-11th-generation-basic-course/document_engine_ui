import React, { useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";
import { useDispatch } from "react-redux";
import { createBlockSuccess } from "../../redux/slice/blockSlice/blockSlice";
import { createBlock } from "../../redux/service/blockService/blockService";
import { useParams } from "react-router-dom";

export const Editor = () => {
  const dispatch           = useDispatch();
  const param              = useParams();
  const documentId         = param.id;
  const [blocks, setBlock] = useState([]);
  const block=[...blocks];

  // Create Block
  const handleCreateBlock=async()=>{
    for (let index = 0; index < block.length; index++) {
      const text = block[index]
      const types = blocks.filter(obj => obj.type).map(obj => obj.type);
      let type ='';
      for (let i = 0; i < types.length; i++) {
        type = types[i];
      }
      const response = await createBlock(type,text,documentId);
      const success = dispatch(createBlockSuccess(response));
      if(success!=null){
        setBlock([]);
      }
    }
  }

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      const content = [];
      setBlock(content);
      for (let indexOfTopLevelBlocks = 0; indexOfTopLevelBlocks < editor.topLevelBlocks.length; indexOfTopLevelBlocks++) {
        const element = editor.topLevelBlocks[indexOfTopLevelBlocks];
        for (let indexOfContent = 0; indexOfContent < element.content.length; indexOfContent++) {
          const type  = element.type
          const text  = element.content[0].text;
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

  return(
    <div>
      <input type="submit" value='click' onClick={handleCreateBlock}/>
      <BlockNoteView editor={editor} />
    </div>
    
  ) 
};
