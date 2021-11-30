const getNewUniqueId = () => {
  return (Math.random() + 1).toString().replace(".", "");
};

const user = {
  id: getNewUniqueId(),
  name: "Franco",
  lastName: "Villarreal",
  email: "francovillarreal@gmail.com",
  favourites: ["2", "8", "5"],
};

export default user;
