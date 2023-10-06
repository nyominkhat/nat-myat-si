import { Button, Card, Text } from "@tremor/react";

import useBadinContext from "../context";
import useGetAnswer from "../hooks/answers";
import { useNavigate } from "react-router-dom";

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
    return null;
  }

  return (
    <section className="container flex items-center justify-center h-full mx-auto">
      <Card className="max-w-lg space-y-6">
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
