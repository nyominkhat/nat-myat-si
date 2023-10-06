import axios from "axios";

import { getAnswerTypes } from "../../types";

const getAnswer = async ({ questionNo, pinNo }: getAnswerTypes) => {
  try {
    const response = await axios.get(
      `http://localhost:5555/answers?questionNo=${questionNo}&answerNo=${pinNo}`
    );

    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default getAnswer;
