import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
  forcePage: number;
}

const Pagination = ({
  totalPages,
  handlePageChange,
  forcePage,
}: PaginationProps) => {
  return (
    <ReactPaginate
      className="flex items-center justify-start gap-4 bg-[#111827] select-none py-0 text-white"
      activeClassName="rounded bg-white text-black"
      pageClassName="block h-10 w-10 border cursor-pointer  rounded transition-all"
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="h-10 text-white rounded w-20 border"
      previousLinkClassName="w-full h-full flex items-center justify-center hover:text-white/70 transition-all"
      nextClassName="h-10 text-white rounded w-20 border"
      nextLinkClassName="flex items-center justify-center w-full h-full hover:text-white/70 transition-all"
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      forcePage={forcePage}
      onPageChange={(e) => {
        handlePageChange(e.selected + 1);
      }}
      breakLabel="..."
      breakClassName="hover:text-white/70 text-white"
      pageLinkClassName="w-full h-full flex items-center justify-center "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
