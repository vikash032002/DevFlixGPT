export const validate = (email, password, name) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(
      password
    );

  const isName =
    name === undefined || /^[A-Z][a-zA-Z '.-]*[A-Za-z]$/.test(name);

  if (!isEmail) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";
  if (name !== undefined && !isName) return "Name is not valid";

  return null; 
};
