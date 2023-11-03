import React from "react";
import { StylesContentModal, StylesModal } from "./modal.styles.js";
import { X } from "phosphor-react";

const Modal = ({ open, title, fechaModal, children }) => {
  const handleClose = (e) => {
    e.target.id === "modal" && fechaModal();
  };
  return (
    <>
      {open && (
        <StylesModal id="modal" onClick={handleClose}>
          <StylesContentModal>
            <section className="header">
              <X
                color={"#13100D"}
                onClick={fechaModal}
                cursor="pointer"
                size={32}
              />
            </section>
            {children}
          </StylesContentModal>
        </StylesModal>
      )}
    </>
  );
};

export default Modal;
