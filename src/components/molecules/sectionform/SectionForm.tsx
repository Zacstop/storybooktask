import React, { useRef, useEffect } from "react";
import {
  SurveyFormContainer,
  SectionFormDesktop,
  SectionControlDesktop,
  SectionControlContainer,
} from "./SectionForm.Desktop";
import { PlusSquare } from "../../../assets/iconts";
import { TypeSquare } from "../../../assets/iconts";
import { Image01 } from "../../../assets/iconts";
import { VideoRecorder } from "../../../assets/iconts";
import { FileDownload02 } from "../../../assets/iconts";
import { Rows01 } from "../../../assets/iconts";

interface Props {
  pageTitle: string;
  children?: React.ReactNode;
}

const SectionForm = ({ pageTitle, children }: Props) => {
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
        <SectionFormDesktop.Container>
          <SectionFormDesktop.HeaderWrapper>
            <SectionFormDesktop.PageTitle>
              <p>{pageTitle}</p>
            </SectionFormDesktop.PageTitle>
          </SectionFormDesktop.HeaderWrapper>
          <SectionFormDesktop.ContentWrapper>
            {children}
          </SectionFormDesktop.ContentWrapper>
          <SectionFormDesktop.FooterWrapper>
            Icons
          </SectionFormDesktop.FooterWrapper>
        </SectionFormDesktop.Container>
        {isFocus ? (
          <SectionControlContainer>
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
          </SectionControlContainer>
        ) : (
          <SectionControlDesktop.BlurContainer></SectionControlDesktop.BlurContainer>
        )}
      </SurveyFormContainer>
    </>
  );
};

export default SectionForm;
