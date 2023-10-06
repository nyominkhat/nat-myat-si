import { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
} from "@tremor/react";

import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

import { useGetQuestions } from "../hooks/questions";

import { questionTypes } from "../types";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | undefined>(0);

  const { data, isLoading, isSuccess } = useGetQuestions({
    page: currentPage,
  });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data?.totalPages);
    }
  }, [isSuccess, data, currentPage]);

  const handlePageChange = useCallback((currentPage: number) => {
    setCurrentPage(currentPage);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="container flex items-center justify-center h-full mx-auto">
      <Card className="h-[80vh] flex flex-col justify-between">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>No .</TableHeaderCell>
              <TableHeaderCell>Questions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.questions.map((item: questionTypes) => (
              <TableRow
                key={item.questionNo}
                className="transition-all cursor-pointer hover:text-slate-100"
              >
                <TableCell>{item.questionNo}</TableCell>
                <TableCell>{item.questionName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* pagination btns */}
        <Pagination
          totalPages={totalPages!}
          handlePageChange={handlePageChange}
          forcePage={currentPage - 1}
        />
      </Card>
    </section>
  );
};

export default Home;
