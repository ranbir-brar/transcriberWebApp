import React, { useState } from "react";

function UploadButtons() {
  const [file, setFile] = useState(""); // varible to store uploaded file

  const handleFileChange = (event) => {
    // event handler for file upload
    setFile(event.target.files[0]); // update the state
  };

  const handleUpload = () => {
    // event handler for upload button
    console.log(file); // view selected file object
  };
  return (
    <div>
      {/* display selected file name */}
      <input type="file" onChange={handleFileChange} />
      {/* upload button */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadButtons;
