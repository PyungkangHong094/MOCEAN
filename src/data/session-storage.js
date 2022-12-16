export const saveAuthResult = (data) => {
  const { token, user_id, username, email } = data;
  sessionStorage.setItem("MOCEAN-TOKEN", token);
  sessionStorage.setItem("MOCEAN-USER-ID", user_id);
  sessionStorage.setItem("MOCEAN-USER-NAME", username);
  sessionStorage.setItem("MOCEAN-USER-EMAIL", email);
};

export const getAuthResult = () => {
  return {
    token: sessionStorage.getItem("MOCEAN-TOKEN"),
    user_id: sessionStorage.getItem("MOCEAN-USER-ID"),
    username: sessionStorage.getItem("MOCEAN-USER-NAME"),
    email: sessionStorage.getItem("MOCEAN-USER-EMAIL"),
  };
};

export const deleteAuthResult = () => {
  sessionStorage.removeItem("MOCEAN-TOKEN");
  sessionStorage.removeItem("MOCEAN-USER-ID");
  sessionStorage.removeItem("MOCEAN-USER-NAME");
  sessionStorage.removeItem("MOCEAN-USER-EMAIL");
};
