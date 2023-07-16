import React, { useEffect, useRef, useState } from "react";
import styles from "../../App.module.css";
import {
  createBlock,
  deleteBlock,
  updateBlock,
} from "../../redux/service/blockService/blockService";
import { useParams } from "react-router-dom";
import {
  createBlockSuccess,
  deleteBlockSuccess,
  updateBlockSuccess,
} from "../../redux/slice/blockSlice/blockSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  BlockNoteEditor,
  defaultBlockSchema,
  defaultProps,
} from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,
  createReactBlockSpec,
  InlineContent,
  ReactSlashMenuItem,
  defaultReactSlashMenuItems,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { RiImage2Fill } from "react-icons/ri";
import { RiChatQuoteFill } from "react-icons/ri";
import { RiCodeSSlashFill } from "react-icons/ri";
import { Button, ButtonToolbar, Loader, Placeholder } from "rsuite";
import "twemoji";
import Twemoji from "./Twemoji";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebase.utils";
import { v4 as uuidv4 } from "uuid";
import { ProgressSpinner } from "primereact/progressspinner";

export const EditorForViewDocument = ({ loading, blockData }) => {
  const { document } = useSelector((state) => state.document);
  const CodeBlock = createReactBlockSpec({
    type: "codeblock",
    propSchema: {
      language: {
        default: "plaintext",
      },
    },
    containsInlineContent: true,
    render: ({ block, editor }) => {
      return (
        <div className="relative bg-stone-100 p-6">
          <select
            className="absolute top-6 right-6 text-sm w-[100px] bg-stone-100 focus:outline-none"
            onChange={(e) => {
              editor.updateBlock(block, {
                props: {
                  ...block.props,
                  language: e.target.value,
                },
              });
            }}
          >
            <option className="p-3" value="plaintext">
              Plain Text
            </option>
            <option className="p-3" value="javascript">
              javascript
            </option>
          </select>
          <code className={`language-${block.props.language}`}>
            <InlineContent />
          </code>
        </div>
      );
    },
  });

  const CodeCommand = new ReactSlashMenuItem(
    "Code",
    (editor) => {
      if (editor.getTextCursorPosition().block.content.length === 0) {
        editor.updateBlock(editor.getTextCursorPosition().block, {
          type: "codeblock",
          props: {},
        });
        return;
      }

      editor.insertBlocks(
        [
          {
            type: "codeblock",
            props: {},
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["code"],
    "Text",
    <RiCodeSSlashFill />,
    "Insert a Code Block"
  );

  const CalloutBlock = createReactBlockSpec({
    type: "callout",
    propSchema: {
      language: {
        default: "plaintext",
      },
    },
    containsInlineContent: true,
    render: () => {
      return (
        <div className="flex bg-stone-100 p-6">
          <button className="w-6 h-6 flex justify-center items-center mr-3">
            <img
              draggable="false"
              alt="💡"
              src="https://twemoji.maxcdn.com/v/14.0.2/svg/1f4a1.svg"
              width={20}
              height={20}
            />
          </button>
          <InlineContent className="flex-1" />
        </div>
      );
    },
  });

  const CalloutCommand = new ReactSlashMenuItem(
    "Callout",
    (editor) => {
      if (editor.getTextCursorPosition().block.content.length === 0) {
        editor.updateBlock(editor.getTextCursorPosition().block, {
          type: "callout",
          props: {},
        });
        return;
      }

      editor.insertBlocks(
        [
          {
            type: "callout",
            props: {},
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["callout"],
    "Text",
    <Twemoji emoji="💡" className="w-5 h-5" />,
    "Insert a Code Block"
  );

  const QuoteBlock = createReactBlockSpec({
    type: "quote",
    propSchema: {
      ...defaultProps,
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div
        style={{
          borderLeft: "2px solid #ccc",
          paddingLeft: "10px",
          margin: "10px 0",
          fontStyle: "italic",
          color: "#555",
        }}
      >
        <blockquote
          style={{
            margin: "0",
            padding: "0",
            border: "none",
          }}
        >
          {block.props.text}
          <InlineContent />
        </blockquote>
      </div>
    ),
  });

  const insertQuote = new ReactSlashMenuItem(
    "Insert Quote",
    (editor) => {
      if (editor.getTextCursorPosition().block.content.length === 0) {
        editor.updateBlock(editor.getTextCursorPosition().block, {
          type: "quote",
          props: {},
        });
        return;
      }
      editor.insertBlocks(
        [
          {
            type: "quote",
            props: {
              text: "",
            },
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["quote"],
    "Text",
    <RiChatQuoteFill />,
    "Insert a quote"
  );

  const ImageBlock = createReactBlockSpec({
    type: "image",
    propSchema: {
      ...defaultProps,
      src: {
        default: "",
      },
      caption: {
        default: "",
      },
    },
    containsInlineContent: true, // For the caption
    render: ({ block, editor }) => {
      const inputRef = useRef(null);

      const onSelect = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const imageRef = ref(
          storage,
          `images/document/${uuidv4()}_${file.name}`
        );

        uploadBytes(imageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            editor.updateBlock(block, {
              props: {
                ...block.props,
                src: url,
              },
            });
          });
        });
      };

      return (
        <div className="flex flex-col" id={block.id}>
          {block.props.src && (
            <>
              <img
                src={block.props.src}
                contentEditable={false}
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.target;
                  e.target.style.width = `${naturalWidth}px`;
                  e.target.style.height = `${naturalHeight}px`;
                }}
              />
            </>
          )}
          {!block.props.src && (
            <div
              className="w-full bg-stone-100 flex items-center p-6 gap-x-2 cursor-pointer"
              contentEditable={false}
              onClick={() => inputRef.current.click()}
              onKeyDown={() => inputRef.current.click()}
            >
              <input
                type="file"
                className="hidden"
                ref={inputRef}
                onChange={onSelect}
              />
              <RiImage2Fill />
              <p className="text-xl text-gray-600" contentEditable={false}>
                Add an image
              </p>
            </div>
          )}
          <InlineContent className={block.props.caption ? "block" : "hidden"} />
        </div>
      );
    },
  });

  const ImageCommand = new ReactSlashMenuItem(
    "Insert Image",
    (editor) => {
      if (editor.getTextCursorPosition().block.content.length === 0) {
        editor.updateBlock(editor.getTextCursorPosition().block, {
          type: "image",
          props: {},
        });
        return;
      }

      editor.insertBlocks(
        [
          {
            type: "image",
            props: {},
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["image", "img", "picture", "media"],
    "Media",
    <RiImage2Fill />,
    "Insert an image"
  );

  const [blocks, setBlocks] = useState([]);
  const param = useParams();
  const dispatch = useDispatch();

  console.log("Test", blockData)

  const sortedInitialContent = [...blockData].sort((a, b) => a.order - b.order);

  const [timerId, setTimerId] = useState(null);

  function handleInputChange(event) {
    event.preventDefault();
    clearTimeout(timerId);
    const newTimerId = setTimeout(() => {
      console.log("helo");
      handleUpdateDocument();
    }, 3000);
    setTimerId(newTimerId);
  }

  const [isLoading, setIsLoading] = useState(false);
  const [loadingPlaceHolder, setLoadingPlaceHolder] = useState(true);
  setTimeout(() => {
    setLoadingPlaceHolder(false);
  }, 4000);

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
          index,
          param.documentId
        );
        dispatch(createBlockSuccess(response));
      } else {
        const response = await updateBlock(
          blockId,
          param.documentId,
          text,
          index
        );
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
    setIsLoading(false);
  };

  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      handleCreateBlock();
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  //Editor
  const editor = useBlockNote({
    initialContent: sortedInitialContent.map((block) => {
      return block.content;
    }),
    onEditorContentChange: (editor) => {
      setBlocks(editor.topLevelBlocks);
      setInputValue(editor.topLevelBlocks);
    },
    blockSchema: {
      ...defaultBlockSchema,
      image: ImageBlock,
      quote: QuoteBlock,
      codeblock: CodeBlock,
      callout: CalloutBlock,
    },
    slashCommands: [
      ...defaultReactSlashMenuItems,
      ImageCommand,
      insertQuote,
      CodeCommand,
      CalloutCommand,
    ],
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
    editable: false,
    enableBlockNoteExtensions: true
  });

  return (
    <div>
      {/* <div className="absolute top-5 ml-10">
        {isLoading ? (
          <div className="flex items-center gap-x-3">
            <p className="text-gray-500 text-16px">Editing</p>
            <ProgressSpinner
              style={{ width: "20px", height: "20px" }}
              strokeWidth="5"
              fill="var(--surface-ground)"
              animationDuration=".5s"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-16px">Edited just now</p>
        )}
      </div> */}

      {loadingPlaceHolder ? (
        <div className="ml-11">
          <Placeholder.Paragraph rows={blockData.length} />
          {/* <Loader content="loading" /> */}
        </div>
      ) : (
        <BlockNoteView editor={editor} />
      )}
    </div>
  );
};
