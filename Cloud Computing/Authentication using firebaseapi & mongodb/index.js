const express = require("express");
const bodyParser = require("body-parser")
const path = require('path')
const dotenv = require('dotenv')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');


require('firebase/auth')

dotenv.config();
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
mongoose.connect(
    process.env.DB_CONNECT, 
    () => console.log('Connected!')
);

app = express();
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

const userService = require("./user_service.js");

app.post("/api/register", async (req, res) => {
  const { Email, username, passwords, pnumber } = req.body;
  const mail = await User.findOne({ Email }).lean()
	const user = await User.findOne({ username }).lean()

  if (user) {
		return res.json({ status: 'error', error: 'Username Already Exist' })
	}

	if (mail) {
		return res.json({ status: 'error', error: 'Email Already Exist' })
	}

  if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (passwords.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}
  const password = await bcrypt.hash(passwords, 10)

  try {
    const user = await userService.addUser(Email, passwords);
    const response = await User.create({
			Email,
			username,
      password,
			pnumber
		});
    //res.status(201).json(user);
    res.json({ status: 'ok' })
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

/*app.post("/api/login", async (req, res) => {
  const { Email, passwords } = req.body;
  const mail = await User.findOne({ Email }).lean()
  if (!mail) {
		return res.json({ status: 'error', error: 'Invalid Email/password' })
	}
  try {
    if (await bcrypt.compare(passwords, User.password)) {

      const token = jwt.sign(
        {
          id: user._id,
          mail: user.Email
        },
        JWT_SECRET
      )
      const user = await userService.authenticate(Email, passwords);
      res.json({ status: 'ok' })
  
      //return res.json({ status: 'ok', data: token })
    }

  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});*/

app.post('/api/login', async (req, res) => {
	const { Email, passwords } = req.body
	const mail = await User.findOne({ Email }).lean()

	if (!mail) {
		return res.json({ status: 'error', error: 'Invalid Email/password' })
	}

	if (await bcrypt.compare(passwords, mail.password)) {

		const token = jwt.sign(
			{
				id: mail._id,
				mail: mail.Email
			},
			JWT_SECRET
		)
    const user = await userService.authenticate(Email, passwords);
		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));
