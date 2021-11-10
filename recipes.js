const getNewUniqueId = () => {
  return (Math.random() + 1).toString().replace(".", "");
};

const recipes = [
  {
    id: getNewUniqueId(),
    title: "Sea Salad",
    preparationTimeInMins: 30,
    valoration: 4,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Crispy Burger",
    preparationTimeInMins: 60,
    valoration: 5,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Funny Eggs",
    preparationTimeInMins: 20,
    valoration: 4,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1593584785033-9c7604d0863f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Meat Balls",
    preparationTimeInMins: 90,
    valoration: 3,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Onion Rings",
    preparationTimeInMins: 75,
    valoration: 5,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Honey Cakes",
    preparationTimeInMins: 45,
    valoration: 5,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Super Soup",
    preparationTimeInMins: 60,
    valoration: 5,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
  {
    id: getNewUniqueId(),
    title: "Strawberry Cake",
    preparationTimeInMins: 90,
    valoration: 5,
    description: "Loremp ipsum dolor.",
    user: "Lorem Ip",
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
    ingredients: ["Lettuce", "Violet Onion"],
    preparation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat finibus massa vitae viverra. Proin vitae ornare ipsum. Aenean pharetra, sem ut tempus lobortis, turpis nisi varius lacus, non sodales felis lectus non turpis. Nullam et dapibus sapien, quis finibus metus. Nunc accumsan lacus nec dignissim rhoncus. Duis vestibulum tellus enim, vitae imperdiet est dapibus non. Curabitur facilisis faucibus magna, non pretium est. Morbi nisi augue, ultrices eu eros eget, condimentum dictum quam. Etiam hendrerit ligula est, at finibus purus tempus vel. Morbi auctor volutpat ante eget rutrum. Fusce interdum in neque sollicitudin aliquet. Proin maximus, turpis at bibendum condimentum, ante tellus maximus augue, vel rhoncus nisl diam vitae sem. ",
  },
];

export default recipes;
