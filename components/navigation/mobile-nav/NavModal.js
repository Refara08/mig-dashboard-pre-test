import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-black bg-opacity-75 transition-all duration-75 ${
        props.isOpen ? "opacity-100 z-30" : "opacity-0 -z-20"
      }`}
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-4/5 bg-greenish-gray text-black transition-all duration-300 ${
        props.isOpen
          ? "opacity-100 z-40 translate-x-0"
          : "opacity-0 -z-20 -translate-x-10"
      }`}
    >
      <div>{props.children}</div>
    </div>
  );
};

const NavModal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { isOpen, onClose } = props;

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <Fragment>
      {mounted
        ? createPortal(
            <Backdrop onClose={onClose} isOpen={isOpen} />,
            document.querySelector("#overlays")
          )
        : null}
      {mounted
        ? createPortal(
            <ModalOverlay isOpen={isOpen}>{props.children}</ModalOverlay>,
            document.querySelector("#overlays")
          )
        : null}
    </Fragment>
  );
};

export default NavModal;
