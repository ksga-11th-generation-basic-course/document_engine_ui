import React from "react";
import Download from "../assets/images/Icon/download.svg";
import Docker from "../assets/workspace_image/docker.svg"

const DOCS_FILE_URL = " http://localhost:5174/file_docs.docs";
const HTML_FILE_URL = " http://localhost:5174/file_html.html";
const MD_FILE_URL = " http://localhost:5174/file_md.md";
// const PNG_FILE_URL = " http://localhost:5173/Moby-logo.png";


function ExportFile() {
    const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <div class="max-w-sm mt-12 ml-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src={Docker}
            alt=""/>
        </a>
        
      </div>
      <div className="App w-[160px] mt-12 ml-20 text-center p-3 bg-white border rounded-2xl">
        <div className=" ml-2 ">
          <button
            className="flex text-sm gap-4"
            onClick={() => {
              downloadFileAtURL(DOCS_FILE_URL);
            }}
          >
            <img src={Download} className=" w-[15px] " />
            .DOCS
          </button>
        </div>

        <div className="ml-2 mt-4 mb-4">
          <button
            className="flex text-sm gap-4"
            onClick={() => {
              downloadFileAtURL(HTML_FILE_URL);
            }}
          >
            <img src={Download} className=" w-[15px] " />
            .HTML
          </button>
        </div>

        <div className="ml-2">
          <button
            className="flex text-sm gap-4"
            onClick={() => {
              downloadFileAtURL(MD_FILE_URL);
            }}
          >
            <img src={Download} className=" w-[15px] " />
            .MD
          </button>
        </div>
        
        {/* <div className=" ml-2 mt-4">
          <button
            className="flex text-sm gap-4"
            onClick={() => {
              downloadFileAtURL(PNG_FILE_URL);
            }}
          >
            <img src={Download} className=" w-[15px] " />
            .PNG
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ExportFile;
