const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ayooo backend dudeee. what's goood! with auto restart");
});

const users = [
  { id: 1, name: "Ali", email: "ali@gmail.com", phone: "01918276518" },
  { id: 2, name: "Siddik", email: "siddik@gmail.com", phone: "01918276518" },
  { id: 3, name: "Miraz", email: "miraz@gmail.com", phone: "01918276518" },
  { id: 4, name: "Wajid", email: "wajid@gmail.com", phone: "01918276518" },
  { id: 5, name: "Karim", email: "karim@gmail.com", phone: "01918276518" },
  { id: 6, name: "Helal", email: "helal@gmail.com", phone: "01918276518" },
];

app.get("/users", (req, res) => {
  // filter by search query params
  if (req.query.name) {
    const search = req.query.name;
    const match = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(match);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.post("/user", (req, res) => {
  console.log("request: ", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send("Post data success");
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sour fazle flavour");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
