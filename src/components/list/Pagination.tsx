import { type FunctionComponent } from "react";
import PaginationButton from "~/components/buttons/PaginationButton";

interface PaginationProps {
  itemCount: number;
  pageSize: number;
  setPage: (page: number) => void;
  activePage: number;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  itemCount,
  pageSize,
  setPage,
  activePage,
}) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  return (
    <div className="flex flex-col items-center gap-y-2">
      {itemCount} toplamın {itemCount < pageSize ? itemCount : pageSize} tanesi
      gösteriliyor
      <div className="inline-flex">
        <PaginationButton
          action={() => {
            if (activePage > 0) setPage(activePage - 1);
          }}
          position="left"
          text="Önceki"
        />
        {Array.from(Array(pageCount).keys()).map((page) => {
          if (page === activePage)
            return (
              <button
                key={page}
                type="button"
                className={`${
                  page === 0 ? "border-l" : ""
                }h-8 w-8 items-center justify-center border-y border-r border-blue-600 bg-blue-600 text-blue-50`}
              >
                {page + 1}
              </button>
            );

          return (
            <PaginationButton
              key={page}
              action={() => {
                setPage(page);
              }}
              position="center"
              text={`${page + 1}`}
            />
          );
        })}
        <PaginationButton
          action={() => {
            if (activePage < pageCount - 1) setPage(activePage + 1);
          }}
          position="right"
          text="Sonraki"
        />
      </div>
    </div>
  );
};

export default Pagination;
