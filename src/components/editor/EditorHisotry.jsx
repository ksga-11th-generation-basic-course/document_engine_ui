import React, { useEffect } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlockHistory } from "../../redux/service/historyService/historyService";
import { useParams } from "react-router-dom";

export const EditorHisotry = () => {
  const { blockHistory } = useSelector((state) => state.history);
  const sortedInitialContent = [...blockHistory].sort(
    (a, b) => a.order - b.order
  );
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlockHistory(param.historyId));
  }, []);
  const editor = useBlockNote({
    initialContent:
      sortedInitialContent &&
      sortedInitialContent.map((block) => {
        return block.content;
      }),
    theme: "light",
    editable: false,
  });
  return <BlockNoteView editor={editor} />;
};
