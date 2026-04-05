import { useState } from 'react';

export function useResume() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  return { analysis, loading, setAnalysis };
}
