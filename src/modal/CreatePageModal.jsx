import React from "react";
import { Modal } from "react-daisyui";

export const CreatePageModal = ({
  visiblePage,
  setVisiblePage,
  secondhandleClick,
}) => {
  return (
    <div>
      <button onClick={() => setVisiblePage(!visiblePage)}>Open Modal</button>
      <Modal
        open={visiblePage}
        onClickBackdrop={() => {
          setVisiblePage(!visiblePage);
          secondhandleClick(false);
        }}
        className="bg-white"
      >
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <button
            onClick={() => {
              setVisiblePage(!visiblePage);
              secondhandleClick(false);
            }}
          >
            Yay!
          </button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
