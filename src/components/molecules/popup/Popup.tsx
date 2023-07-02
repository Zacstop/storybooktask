import React, { useRef, useState, useEffect } from "react";
import { PopupDesktop } from "./Popup.Desktop";
import { CheckCircleBroken } from "../../../assets/iconts";
import { AlertTriangle } from "../../../assets/iconts";
import { AlertCircle } from "../../../assets/iconts";
import ReactDOM from "react-dom";

interface Props {
  popupColor: "success" | "warning" | "error";
  title: string;
  description: string;
  onClickClose: () => void;
}

const Popup = ({
  popupColor,
  title,
  description,
  onClickClose,
}: Props) => {
  const outSection = useRef<HTMLDivElement | null>(null);
  const [container] = useState(document.createElement("div"));

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    if (
      outSection.current &&
      !outSection.current.contains(e.target as Node)
    ) {
      onClickClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClickClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClickClose]);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <PopupDesktop.Background>
      <PopupDesktop.Container ref={outSection}>
        <PopupDesktop.Wrapper>
          <PopupDesktop.IconWrapper popupColor={popupColor}>
            {popupColor === "success" ? (
              <CheckCircleBroken />
            ) : popupColor === "warning" ? (
              <AlertTriangle />
            ) : (
              <AlertCircle />
            )}
          </PopupDesktop.IconWrapper>
          <PopupDesktop.Title>{title}</PopupDesktop.Title>
          <PopupDesktop.Description>
            {description}
          </PopupDesktop.Description>
        </PopupDesktop.Wrapper>
      </PopupDesktop.Container>
    </PopupDesktop.Background>,
    container
  );
};

export default Popup;
