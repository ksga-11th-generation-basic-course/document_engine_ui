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
// import { Button, ButtonToolbar, Loader, Placeholder } from "rsuite";

export const Editor = () => {
  const QuoteBlock = createReactBlockSpec({
    type: "quote",
    propSchema: {
      ...defaultProps,
      text: {
        default: "Enter quote text here",
      },
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

  // Creates a slash menu item for inserting a quote block.
  const insertQuote = new ReactSlashMenuItem(
    "Insert Quote",
    (editor) => {
      editor.insertBlocks(
        [
          {
            type: "quote",
            props: {
              text: "", // Initialize the quote text as an empty string
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
  }, 2000);

  // Create Block
  const handleCreateBlock = async () => {
    setIsLoading(true);
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
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  //Editor
  const editor = useBlockNote({
    initialContent: sortedInitialContent.map((block) => {
      return block.content;
    }),
    onEditorContentChange: (editor) => {
      oninput = () => handleInputChange();
      setBlocks(editor.topLevelBlocks);
      for (
        let indexOfTopLevelBlocks = 0;
        indexOfTopLevelBlocks < editor.topLevelBlocks.length;
        indexOfTopLevelBlocks++
      ) {
        const element = editor.topLevelBlocks[indexOfTopLevelBlocks];
        for (
          let indexOfContent = 0;
          indexOfContent < element.content.length;
          indexOfContent++
        ) {
          const text = element.content[0].text;
        }
      }
    },
    blockSchema: {
      // Adds all default blocks.
      ...defaultBlockSchema,
      // Adds the custom image block.
      image: ImageBlock,
      imageFile: ImageBlockFile,
      embed: EmbedBlock,
      quote: QuoteBlock,
    },
    slashCommands: [
      ...defaultReactSlashMenuItems,
      insertImage,
      insertImageFile,
      insertEmbed,
      insertQuote,
    ],
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
    theme: "light",
  });

  return (
    <div>
      <div className="absolute -top-14 -left-36 -z-0">
        {isLoading ? (
          <Button appearance="ghost" className="w-24" loading>
            Ghost
          </Button>
        ) : (
          <ButtonToolbar>
            <Button
              onClick={handleCreateBlock}
              disabled={isLoading}
              className="w-24"
              appearance="ghost"
              active
            >
              Save
            </Button>
          </ButtonToolbar>
        )}
      </div>

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
