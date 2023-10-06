import React, { createContext, useContext, useState } from "react";

interface contextInterface {
  questionNo: string;
  setQuestionNo: React.Dispatch<React.SetStateAction<string>>;
  pinNo: string;
  setPinNo: React.Dispatch<React.SetStateAction<string>>;
  questionName: string;
  setQuestionName: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
  questionNo: "",
  setQuestionNo: () => {},
  pinNo: "",
  setPinNo: () => {},
  questionName: "",
  setQuestionName: () => {},
} as contextInterface;

export const BadinContext = createContext<contextInterface>(defaultState);

export const BadinContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questionNo, setQuestionNo] = useState<string>("");
  const [pinNo, setPinNo] = useState<string>("");
  const [questionName, setQuestionName] = useState<string>("");

  const value = {
    questionNo,
    setQuestionNo,
    pinNo,
    setPinNo,
    setQuestionName,
    questionName,
  };

  return (
    <BadinContext.Provider value={value}>{children}</BadinContext.Provider>
  );
};

const useBadinContext = () => {
  return useContext(BadinContext);
};

export default useBadinContext;
