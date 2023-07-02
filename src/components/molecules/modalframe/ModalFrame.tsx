import React, { useRef } from "react";
import { ModalFrameDesktop } from "./ModalFrame.Desktop";
import { Clear } from "../../../assets/iconts";

interface Props {
  title: string;
  children?: React.ReactNode;
  onClickClose: () => void;
}

const ModalFrame = ({ title, children, onClickClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClickClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ModalFrameDesktop.BackgroundContainer>
      <ModalFrameDesktop.Container ref={ref}>
        <ModalFrameDesktop.Title>
          <span>{title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClickClose();
            }}
          >
            <Clear />
          </button>
        </ModalFrameDesktop.Title>
        {children}
      </ModalFrameDesktop.Container>
    </ModalFrameDesktop.BackgroundContainer>
  );
};

export default ModalFrame;
