import React from 'react';
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";


interface Props {
  active: boolean;
  close: any;
}

export const ModalVideo = (props: Props) => {

    return (
      <div>
        <Modal
          isOpen={props.active}
          onRequestClose={props.close}
          contentLabel="Example Modal"
          className="modal-video"
        >
          <AiOutlineClose
            onClick={props.close}
            className="modal-video--closeicon"
          />
          <div className="modal-video--display">
            <ReactPlayer
              width="90rem"
              height="50rem"
              style={{}}
              url="https://www.youtube.com/watch?v=VSlmfxPtZJQ"
            />
          </div>
        </Modal>
      </div>
    );
}
