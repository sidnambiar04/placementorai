// Firebase authentication skeleton
export const login = async (email, password) => {
  console.log("Mock login for:", email);
  return { uid: 'demo-user' };
};

export const logout = async () => {
  console.log("Mock logout");
};
