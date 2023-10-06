import { useQuery } from "@tanstack/react-query";

import { getQuestions } from "../../services/questions";
import { getQuestionsTypes } from "../../types";

export const useGetQuestions = ({ page }: getQuestionsTypes) => {
  return useQuery(["questions", page], () => getQuestions({ page }));
};
