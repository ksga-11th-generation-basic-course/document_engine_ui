import React, { useState } from "react";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "../../App.module.css";

const initialContent = [
  {
    id: "d16e6bf9-7bdf-4225-8c6e-8a5470b85481",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "hi",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "d16e6bf9-7bdf-4225-8c6e-8a5470b85481",
    type: "paragraph",
    props: {
      textColor: "default",
      backgroundColor: "default",
      textAlignment: "left",
    },
    content: [
      {
        type: "text",
        text: "Hello",
        styles: {},
      },
    ],
    children: [],
  },
];

export const Editor = () => {
  const editor = useBlockNote({
    initialContent: initialContent,
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
