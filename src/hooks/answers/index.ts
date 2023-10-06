import { useQuery } from "@tanstack/react-query";

import { getAnswerTypes } from "../../types";
import getAnswer from "../../services/answers";

const useGetAnswer = ({ questionNo, pinNo }: getAnswerTypes) => {
  return useQuery(["answer", questionNo, pinNo], () =>
    getAnswer({ questionNo, pinNo })
  );
};

export default useGetAnswer;
