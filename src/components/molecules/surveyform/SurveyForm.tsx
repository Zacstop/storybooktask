import React, { useRef, useEffect } from "react";
import {
  SurveyFormContainer,
  SurveyFormDesktop,
  FormControlDesktop,
  SectionControlDesktop,
} from "./SurveyForm.Desktop";
import { ArrowVertical } from "../../../assets/iconts";
import { Delete } from "../../../assets/iconts";
import { Copy } from "../../../assets/iconts";
import { PlusSquare } from "../../../assets/iconts";
import { TypeSquare } from "../../../assets/iconts";
import { Image01 } from "../../../assets/iconts";
import { VideoRecorder } from "../../../assets/iconts";
import { FileDownload02 } from "../../../assets/iconts";
import { Rows01 } from "../../../assets/iconts";

interface Props {
  children?: React.ReactNode;
}

const SurveyForm = ({ children }: Props) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleBlur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <SurveyFormContainer
        tabIndex={0}
        ref={dropdownRef}
        onFocus={handleFocus}
      >
        <SurveyFormDesktop.Container>
          {children}
        </SurveyFormDesktop.Container>
        <FormControlDesktop.Container>
          <FormControlDesktop.Wrapper>
            <FormControlDesktop.IconGroup>
              <button>
                <ArrowVertical />
              </button>
              <button>
                <Copy />
              </button>
              <button>
                <Delete />
              </button>
            </FormControlDesktop.IconGroup>
          </FormControlDesktop.Wrapper>
        </FormControlDesktop.Container>
        {isFocus ? (
          <SectionControlDesktop.Container>
            <button>
              <PlusSquare />
            </button>
            <button>
              <TypeSquare />
            </button>
            <button>
              <Image01 />
            </button>
            <button>
              <VideoRecorder />
            </button>
            <button>
              <FileDownload02 />
            </button>
            <button>
              <Rows01 />
            </button>
          </SectionControlDesktop.Container>
        ) : (
          <SectionControlDesktop.BlurContainer></SectionControlDesktop.BlurContainer>
        )}
      </SurveyFormContainer>
    </>
  );
};

export default SurveyForm;
