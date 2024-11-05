export const getUserData = () => {
  const response = fetch("https://jsonplaceholder.typicode.com/users");
  return response
    .then((res) => res?.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log({ err });
    });
};
