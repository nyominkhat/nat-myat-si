import { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Text,
} from "@tremor/react";
import { useNavigate } from "react-router-dom";

import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

import useBadinContext from "../context";
import { useGetQuestions } from "../hooks/questions";

import { questionTypes } from "../types";

const Home = () => {
  const { setQuestionNo, setQuestionName } = useBadinContext();
  const navigate = useNavigate();

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

  const navigater = (questionNo: string, questionName: string) => {
    setQuestionName(questionName);
    setQuestionNo(questionNo);
    navigate("/touch");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="container flex items-center justify-center h-full mx-auto ">
      <Card className="flex flex-col justify-between lg:h-[90vh] w-screen h-screen space-y-5">
        <div className="h-[80%] space-y-5">
          <Text className="mb-5 text-xl lg:text-2xl dark:text-slate-200">
            နတ်မျက်စိ လက်ထောက်ဗေဒင်
          </Text>

          <Table className="h-full">
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
                  onClick={() => {
                    navigater(item.questionNo + "", item.questionName);
                  }}
                >
                  <TableCell>{item.questionNo}</TableCell>
                  <TableCell>{item.questionName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

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
