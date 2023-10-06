import { Button, Card, Text } from "@tremor/react";
import { PuffLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import useBadinContext from "../context";
import useGetAnswer from "../hooks/answers";

const Destiny = () => {
  const { questionNo, pinNo, setPinNo, setQuestionName, setQuestionNo } =
    useBadinContext();
  const navigate = useNavigate();

  const { data, isLoading } = useGetAnswer({
    pinNo,
    questionNo,
  });

  const backToNums = () => {
    navigate(-1);
  };

  const backToHomePage = () => {
    setPinNo("0");
    setQuestionName("");
    setQuestionNo("0");
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 inset-0 z-[500]">
        <PuffLoader color="#000" size={60} />
      </div>
    );
  }

  return (
    <section className="container flex items-center justify-center h-full mx-auto">
      <Card className="flex flex-col items-center justify-center w-full h-full space-y-6 lg:h-auto lg:max-w-lg">
        <figure className="w-20 h-20 mx-auto overflow-hidden rounded-full">
          <img src="/mtk.jpg" className="object-cover w-full h-full" />
        </figure>

        <Text className=" dark:text-white">{data[0].answerResult}</Text>

        <div className="flex items-center gap-5">
          <Button
            onClick={backToNums}
            variant="secondary"
            className="dark:text-white "
          >
            နောက်သို့
          </Button>

          <Button onClick={backToHomePage} className="dark:text-white ">
            နောက်တစ်ခုမေးမည်
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default Destiny;
