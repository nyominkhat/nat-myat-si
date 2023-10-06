import axios from "axios";

import { getAnswerTypes } from "../../types";

const API = import.meta.env.VITE_API_URL;

const getAnswer = async ({ questionNo, pinNo }: getAnswerTypes) => {
  try {
    const response = await axios.get(
      `${API}/answers?questionNo=${questionNo}&answerNo=${pinNo}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default getAnswer;
