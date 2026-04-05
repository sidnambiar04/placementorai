import React, { createContext, useState, useContext } from 'react';

const InterviewContext = createContext();

export function InterviewProvider({ children }) {
  const [currentInterview, setCurrentInterview] = useState(null);
  const [results, setResults] = useState(null);

  const startInterview = (interviewData) => {
    setCurrentInterview(interviewData);
  };

  return (
    <InterviewContext.Provider value={{ currentInterview, results, startInterview, setResults }}>
      {children}
    </InterviewContext.Provider>
  );
}

export const useInterview = () => useContext(InterviewContext);
