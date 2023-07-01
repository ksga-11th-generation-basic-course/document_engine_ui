import React, { useEffect, useRef, useState } from "react";
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
import { Button, ButtonToolbar, Loader, Placeholder } from "rsuite";
import "twemoji";
import Twemoji from "./Twemoji";

export const Editor = ({ loading, blockData, status }) => {
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
    // <IconCode className="w-5 h-5" />,
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

  const EmbedBlock = createReactBlockSpec({
    type: "embed",
    propSchema: {
      ...defaultProps,
      src: {
        default: "",
      },
      width: {
        default: "100%",
      },
      height: {
        default: "auto",
      },
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div id="embed-wrapper">
        <iframe
          src={block.props.src}
          width={block.props.width}
          height={block.props.height}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <InlineContent />
      </div>
    ),
  });

  // Creates a slash menu item for inserting an embed block.
  const insertEmbed = new ReactSlashMenuItem(
    "Insert Embed",
    (editor) => {
      const src = prompt("Enter embed URL");
      editor.insertBlocks(
        [
          {
            type: "embed",
            props: {
              src: src || "",
            },
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["embed", "iframe", "video"],
    "Media",
    <RiImage2Fill />,
    "Insert an embed"
  );

  const ImageBlockFile = createReactBlockSpec({
    type: "image",
    propSchema: {
      ...defaultProps,
      src: {
        default: "https://via.placeholder.com/1000",
      },
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div id="image-wrapper">
        <img src={block.props.src} alt="Image" contentEditable={false} />
        <InlineContent />
      </div>
    ),
  });

  // Creates a slash menu item for inserting an image block.
  const insertImageFile = new ReactSlashMenuItem(
    "Upload Image File",
    (editor) => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (readerEvent) => {
            const src = readerEvent.target.result;
            editor.insertBlocks(
              [
                {
                  type: "image",
                  props: {
                    src,
                  },
                },
              ],
              editor.getTextCursorPosition().block,
              "after"
            );
          };
          reader.readAsDataURL(file);
        }
      };
      fileInput.click();
    },
    ["image", "img", "picture", "media"],
    "Media",
    <RiImage2Fill />,
    "Upload an image with file"
  );

  // Creates a custom image block.
  const ImageBlock = createReactBlockSpec({
    type: "image",
    propSchema: {
      ...defaultProps,
      src: {
        default: "https://via.placeholder.com/1000",
      },
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div id="image-wrapper">
        <img src={block.props.src} alt="Image" contentEditable={false} />
        <InlineContent />
      </div>
    ),
  });

  // Creates a slash menu item for inserting an image block.
  const insertImage = new ReactSlashMenuItem(
    "Upload Image Link",
    (editor) => {
      const src = prompt("Enter image URL");
      editor.insertBlocks(
        [
          {
            type: "image",
            props: {
              src: src || "https://via.placeholder.com/1000",
            },
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    ["image", "img", "picture", "media"],
    "Media",
    <RiImage2Fill />,
    "Upload an image with link"
  );

  

  // const blockData = useSelector((state) => state.block.blocks);

  // console.log(blockData);

  const [blocks, setBlocks] = useState([]);
  const param = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBlockBydoucmentId(param.documentId));
  // }, [param.documentId]);

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
      // Adds all default blocks.
      ...defaultBlockSchema,
      // Adds the custom image block.
      image: ImageBlock,
      imageFile: ImageBlockFile,
      embed: EmbedBlock,
      quote: QuoteBlock,
      codeblock: CodeBlock,
      callout: CalloutBlock,
    },
    slashCommands: [
      ...defaultReactSlashMenuItems,
      insertImage,
      insertImageFile,
      insertEmbed,
      insertQuote,
      CodeCommand,
      CalloutCommand,
    ],
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
    editable: true,
    
  });

  return (
    <div>
      {/* <div className="absolute -top-14 -left-36 -z-0">
        {isLoading ? (
          <Button appearance="ghost" className="w-24" loading>
            Ghost
          </Button>
        ) : (
          <ButtonToolbar>
            <Button
              disabled={isLoading}
              className="w-24"
              appearance="ghost"
              active
            >
              Saved
            </Button>
          </ButtonToolbar>
        )}
      </div> */}

      {loadingPlaceHolder ? (
        <div>
          <Placeholder.Paragraph rows={blockData.length} />
          <Loader content="loading" />
        </div>
      ) : (
        <BlockNoteView editor={editor} />
      )}
    </div>
  );
};
