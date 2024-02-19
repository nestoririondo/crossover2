export const projects = [
  {
    _id: 123,
    title: "My project 1",
    description: "Bla bla bla bla bla bla bla bla bla bla bla.",
    goal: 10000,
    donations: [
      { user: user_id, amount: 200, date: "2024-02-19" },
      { user: another_user_id, amount: 600, date: "2024-02-19" },
    ],
    image: "url",
    owner: user_id,
    category: ["category1", "category2"],
    createdAt: "2024-02-19",
  },
];


export const user = {
  _id: 434535,
  name: "Max",
  password: "HashedPw",
  email: "max@mustermann.de",
  createdAt: "2024-02-19",
};
