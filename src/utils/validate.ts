import { raiseCustomError } from "../utils/error";

export const validateEmail = (userEmail: string) => {
  const userEmailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!userEmailRegex.test(userEmail)) {
    return raiseCustomError("INVALID_USEREMAIL", 401);
  }
};

export const validatePw = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!passwordRegex.test(password)) {
    return raiseCustomError("INVALID_PASSWORD", 401);
  }
};