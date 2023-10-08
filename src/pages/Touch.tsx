import { Card, Text } from "@tremor/react";
import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";

import useBadinContext from "../context";
import { myanmarToEnglishNums } from "../libs";

const numList = [
  "၃",
  "၁၀",
  "၅",
  "၁၀",
  "၇",
  "၂",
  "၅",
  "၂",
  "၇",
  "၈",
  "၆",
  "၄",
  "၅",
  "၃",
  "၁",
  "၁၀",
  "၈",
  "၆",
  "၇",
  "၂",
  "၉",
  "၄",
  "၉",
  "၆",
  "၉",
  "၄",
  "၁",
  "၈",
  "၅",
  "၁၀",
  "၆",
  "၃",
  "၈",
  "၄",
  "၁",
  "၆",
  "၃",
  "၁",
  "၉",
  "၁",
  "၉",
  "၇",
  "၉",
  "၇",
  "၅",
  "၂",
  "၇",
  "၄",
  "၁၀",
  "၅",
  "၂",
  "၈",
  "၃",
  "၁၀",
  "၇",
  "၄",
  "၉",
  "၂",
  "၉",
  "၄",
  "၉",
  "၆",
  "၁",
  "၂",
  "၁၀",
  "၈",
  "၇",
  "၅",
  "၃",
  "၄",
  "၂",
  "၁၀",
  "၁",
  "၆",
  "၃",
  "၆",
  "၁",
  "၈",
  "၃",
  "၈",
  "၅",
];

const Touch = () => {
  const { setQuestionNo, questionNo, questionName, setPinNo } =
    useBadinContext();

  const navigate = useNavigate();

  const handlePicker = (pinNo: string) => {
    if (questionNo === "0") {
      navigate(-1);
    }

    setPinNo(myanmarToEnglishNums(pinNo));
    navigate("/destiny");
  };

  const back = () => {
    setQuestionNo("0");
    navigate(-1);
  };

  return (
    <section className="container flex items-center justify-center h-full mx-auto">
      <Card className="flex flex-col items-center justify-center w-screen h-screen space-y-5 lg:max-w-3xl lg:w-fit lg:h-fit bg-dark-tremor-background">
        <div className="flex items-center justify-between w-full">
          <Text className="text-lg dark:text-slate-200 text-slate-200">
            {questionName}
          </Text>

          <Button onClick={back} className="dark:text-white">
            နောက်သို့
          </Button>
        </div>

        <div className="grid grid-cols-9">
          {numList.map((item, index) => (
            <Button
              key={index}
              onClick={() => handlePicker(item)}
              className="h-10 lg:h-20 lg:w-20 dark:bg-tremor-content-strong dark:text-white"
            >
              {item}
            </Button>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Touch;
