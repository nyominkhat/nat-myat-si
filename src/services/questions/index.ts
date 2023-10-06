import axios from "axios";
import { getQuestionsTypes } from "../../types";

export const getQuestions = async ({ page }: getQuestionsTypes) => {
  const query = `_page=${page}`;

  try {
    const response = await axios.get(
      `http://localhost:5555/questions?${query}`
    );

    const totalCountHeader = response.headers["x-total-count"];
    const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return {
      questions: response.data,
      totalPages,
    };
  } catch (error: any) {
    console.log(error.message);
  }
};
