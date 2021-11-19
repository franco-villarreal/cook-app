const getNewUniqueId = () => {
  return (Math.random() + 1).toString().replace(".", "");
};

const user = {
  id: getNewUniqueId(),
  name: "Franco",
  lastName: "Villarreal",
  favourites: ["2", "8"],
};

export default user;
