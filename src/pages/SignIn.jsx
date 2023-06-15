import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
   const [files, setFiles] = useState([]);
   const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: acceptedFiles => {
         setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
         })));
      }
   });

   const thumbs = files.map(file => (
      <div key={file.name}>
         <img
         src={file.preview}
         alt={file.name}
         style={{ width: "100px", height: "100px" }}
         />
      </div>
   ));

   return (
      <section className="container">
         <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
         </div>
         <aside>
            {thumbs}
         </aside>
      </section>
   );
}