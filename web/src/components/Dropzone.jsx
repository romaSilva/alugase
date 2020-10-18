import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { FiUpload } from "react-icons/fi";
import "../styles/components/dropzone.css";

const Dropzone = ({ setImage }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);

    setImage(file); // eslint-disable-next-line
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Realty" />
      ) : (
        <FiUpload style={{ color: "#d1d1d1", margin: "0 0 10px" }} size={25} />
      )}

      {!selectedFileUrl && <p>Arraste ou selecione um arquivo de imagem</p>}
    </div>
  );
};

export default Dropzone;
