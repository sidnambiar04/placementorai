import { useState } from 'react';

export function useInterview() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  return { questions, loading };
}
