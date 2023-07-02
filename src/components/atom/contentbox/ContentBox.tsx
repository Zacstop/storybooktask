import React from "react";
import { ContentBoxDesktop } from "./ContentBox.Desktop";
import { ThreePointsVertical } from "../../../assets/iconts";

interface Props {
  title: string;
  description: string;
  onClick?: () => void;
}

const ContentBox = ({ title, description, onClick }: Props) => {
  return (
    <ContentBoxDesktop.Container onClick={onClick}>
      <ContentBoxDesktop.ContentWrapper>
        <ContentBoxDesktop.Content>
          <h3>{title}</h3>
          <p>{description}</p>
        </ContentBoxDesktop.Content>
        <ContentBoxDesktop.MoreButton>
          <ThreePointsVertical />
        </ContentBoxDesktop.MoreButton>
      </ContentBoxDesktop.ContentWrapper>
    </ContentBoxDesktop.Container>
  );
};

export default ContentBox;
