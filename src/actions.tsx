export const newUser = (username: string) => ({
  type: 'NEW_USER',
  username,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const addMessage = (message: string) => ({
  type: 'SEND_MESSAGE',
  payload: message,
});

export const resetMessages = () => ({
  type: 'RESET_MESSAGES',
});
