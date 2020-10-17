import React, { useCallback, useState, useContext } from "react";
import globalContext from "../store/globalContext";
import { useDropzone } from "react-dropzone";

import { FiUpload } from "react-icons/fi";
import "../styles/components/dropzone.css";

const Dropzone = ({ setImage }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const { handleFileSubmit } = useContext(globalContext);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);

    setImage(file);
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
