import React from "react";
import { PaginationDesktop } from "./Pagination.Desktop";
import { ChevronRight } from "../../../assets/iconts";
import { ChevronLeft } from "../../../assets/iconts";

interface Props {
  pageList: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  pageList,
  currentPage,
  setCurrentPage,
}: Props) => {
  const onClickPage = (page: number) => {
    setCurrentPage(page);
  };

  const onClickPrev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    if (currentPage === pageList.length) return;

    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginationDesktop.Container>
      <PaginationDesktop.Wrapper>
        <PaginationDesktop.PageButton onClick={onClickPrev}>
          <ChevronLeft />
          <span>Previous</span>
        </PaginationDesktop.PageButton>
        <PaginationDesktop.PageNumberButtonGroup>
          {pageList.map((page) => {
            return (
              <PaginationDesktop.PageNumberButton
                key={page}
                currentPage={currentPage === page}
                onClick={() => onClickPage(page)}
              >
                <span>{page}</span>
              </PaginationDesktop.PageNumberButton>
            );
          })}
        </PaginationDesktop.PageNumberButtonGroup>
        <PaginationDesktop.PageButton onClick={onClickNext}>
          <span>Next</span>
          <ChevronRight />
        </PaginationDesktop.PageButton>
      </PaginationDesktop.Wrapper>
    </PaginationDesktop.Container>
  );
};

export default Pagination;
