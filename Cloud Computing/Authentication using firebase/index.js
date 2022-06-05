const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("firebase/auth");

app = express();
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

const userService = require("./user_service.js");

app.post("/api/register", async (req, res) => {
  const { Email, passwords } = req.body;

  if (passwords.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  try {
    const user = await userService.addUser(Email, passwords);
    await userService.verifyemail();
    res.json({ status: "ok" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { Email, passwords } = req.body;

  if (!Email) {
    return res.json({ status: "error", error: "Invalid Email/password" });
  }

  try {
    const user = await userService.authenticate(Email, passwords);
    if (!userService.emailVerified()) {
      res.status(401).json({ error: "Please Verify Your Email Address!" });
    } else {
      res.json({ status: "ok" });
    }
    //res.json({ status: 'ok' })
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/api/changepas", async (req, res) => {
  const { Email } = req.body;
  try {
    const user = await userService.changepass(Email);
    res.json({ status: "ok" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.post("/api/signout", async (req, res) => {
  try {
    const user = await userService.signOut();
    res.json({ status: "ok" });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));
