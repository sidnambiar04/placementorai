import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState({ uid: 'demo-user', email: 'demo@placementor.ai', displayName: 'Demo User' });
  const [loading, setLoading] = useState(false);

  return { user, loading };
}
