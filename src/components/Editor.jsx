import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";

function Editor() {
    const ejInstance = useRef();
  const editor = new EditorJS({
    holder: "editorjs",
    onReady: () => {
      ejInstance.current = editor;
    },
    autofocus: true,
    onChange: async () => {
      let content = await editor.saver.save();
      console.log(content);
    },
    tools: {
      header: Header,
      list: List,
      checklist: CheckList,
      code: {
        class: CodeMirror,
      },
      linkTool: LinkTool,
      quote: Quote,
      marker: Marker,
      delimiter: Delimiter,
      inlineCode: InlineCode,
    },
  });
  useEffect(() => {
    if (ejInstance.current === null) {
      // initEditor();
    }
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
  return (
    <div id="editorjs" >
    </div>
  )
}

export default Editor