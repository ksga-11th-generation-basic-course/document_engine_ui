import React, { useEffect, useRef, useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";
import {
  createBlock,
  deleteBlock,
  getBlockBydoucmentId,
  updateBlock,
} from "../../redux/service/blockService/blockService";
import { useParams } from "react-router-dom";
import {
  createBlockSuccess,
  deleteBlockSuccess,
  updateBlockSuccess,
} from "../../redux/slice/blockSlice/blockSlice";
import { useDispatch, useSelector } from "react-redux";

export const Editor = ({ initialContent }) => {
  const blockData = useSelector((state) => state.block.blocks);

  // console.log(blockData);

  const [blocks, setBlocks] = useState([]);
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlockBydoucmentId(param.documentId));
  }, []);

  const sortedInitialContent = [...blockData].sort((a, b) => a.order - b.order);

  // console.log("adwawd", sortedInitialContent)
  // console.log("block", initialContent);

  // Create Block
  const handleCreateBlock = async () => {
    for (let index = 0; index < blocks.length; index++) {
      const text = blocks[index];
      const types = blocks.filter((obj) => obj.type).map((obj) => obj.type);
      const type = types[index];
      const blockId = blocks[index].id;
      const isExist = sortedInitialContent.find(
        (block) => block.blockId === blockId
      );

      if (!isExist) {
        const response = await createBlock(
          blockId,
          type,
          text,
          param.documentId
        );
        dispatch(createBlockSuccess(response));
      } else {
        const response = await updateBlock(blockId, param.documentId, text);
        dispatch(updateBlockSuccess(response));
      }
    }

    const data = sortedInitialContent.filter(
      (content) => !blocks.some((b) => b.id === content.blockId)
    );

    data.map(async (val) => {
      const blockId = await deleteBlock(val.blockId, param.documentId);
      dispatch(deleteBlockSuccess(blockId));
    });
  };

  //Editor
  const editor = useBlockNote({
    initialContent: sortedInitialContent.map((block) => {
      return block.content;
    }),
    onEditorContentChange: (editor) => {
      // console.log(editor.topLevelBlocks);
      // const content = [];
      setBlocks(editor.topLevelBlocks);
      // for (
      //   let indexOfTopLevelBlocks = 0;
      //   indexOfTopLevelBlocks < editor.topLevelBlocks.length;
      //   indexOfTopLevelBlocks++
      // ) {
      //   const element = editor.topLevelBlocks[indexOfTopLevelBlocks];
      //   for (
      //     let indexOfContent = 0;
      //     indexOfContent < element.content.length;
      //     indexOfContent++
      //   ) {
      //     const href = element.content[0].href;
      //     const type = element.type;
      //     const id = element.id;
      //     const text = element.content[0].text;
      //     const typeContent = element.content[0].type;
      //     const level = element.props.level;
      //     let backgroundColor;
      //     let textColor;
      //     let bold;
      //     let italic;
      //     let strike;
      //     let underline;
      //     if (href !== undefined) {
      //       backgroundColor =
      //         element.content[0].content[0].styles.backgroundColor;
      //       textColor = element.content[0].content[0].styles.textColor;
      //       bold = element.content[0].content[0].styles.bold;
      //       italic = element.content[0].content[0].styles.italic;
      //       strike = element.content[0].content[0].styles.strike;
      //       underline = element.content[0].content[0].styles.underline;
      //     } else {
      //       backgroundColor = element.content[0].styles.backgroundColor;
      //       textColor = element.content[0].styles.textColor;
      //       bold = element.content[0].styles.bold;
      //       italic = element.content[0].styles.italic;
      //       strike = element.content[0].styles.strike;
      //       underline = element.content[0].styles.underline;
      //     }
      //     const dataOfContent = {
      //       id: id,
      //       type: type,
      //       typeContent: typeContent,
      //       text: text,
      //       level: level,
      //       backgroundColor: backgroundColor,
      //       textColor: textColor,
      //       bold: bold,
      //       italic: italic,
      //       strike: strike,
      //       underline: underline,
      //       href: href,
      //     };
      //     content.push(dataOfContent);
      //   }
      // }
    },
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
  });

  return (
    <div>
      <button type="button" onClick={handleCreateBlock}>
        Click
      </button>
      <br />
      <BlockNoteView editor={editor} />
    </div>
  );
};
