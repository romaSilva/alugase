import React, { useContext, useState } from "react";
import globalContext from "../store/globalContext";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddModal = () => {
  const { modal, handleModalClick } = useContext(globalContext);

  return (
    <Modal
      style={modalStyle}
      isOpen={modal}
      onRequestClose={() => handleModalClick(false)}
    >
      <div>Hello World</div>
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "450px",
    width: "100%",
  },
};

export default AddModal;
