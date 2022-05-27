const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const crypto = require("crypto");
const hbs = require('nodemailer-express-handlebars');
var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'medicall.bangkit@gmail.com',
        pass: 'medicall123'
    }
});


dotenv.config();

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

mongoose.connect(
    process.env.DB_CONNECT, 
    () => console.log('Connected!')
);

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));

app.post('/api/change-password', async (req, res) => {
	const {	Email } = req.body
	const passwords = crypto.randomBytes(6).toString('base64')
	const mail = await User.findOne({ Email }).lean()
	if (!mail) {
		return res.json({ status: 'error', error: 'Invalid E-mail' })
	}

	const newpass = await bcrypt.hash(passwords, 10)

	try {
		var mailOptions = {
			from: 'medicall.bangkit@gmail.com',
			to: Email,
			subject: 'Berikut adalah Verifikasi Kode Kamu',
			text: passwords
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) throw err;
			console.log('Email sent: ' + info.response);
		});
		await User.updateOne(
			{Email: Email},
			{password: newpass}
			)
		
	} catch (error) {
		if (error.code === 11000) {
		}
		throw error
	}

	res.json({ status: 'ok' })
	
})

app.post('/api/change-pass', async (req, res) => {
	const { username, password, newpass: plainTextPassword } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	const newpass = await bcrypt.hash(plainTextPassword, 10)

	if (await bcrypt.compare(password, user.password)){
		const response = await User.updateOne(
			{username: user.username,
			password:user.password},
			{password: newpass})
			return res.json({ status: 'ok'})
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})


//tidak digunakan untuk saat ini
app.post('/api/verifmail', async (req, res) => {

	const {	Email } = req.body
	var val = Math.floor(1000 + Math.random() * 9000);
	let vall = val.toString();
	try {
		var mailOptions = {
			from: 'medicall.bangkit@gmail.com',
			to: Email,
			subject: 'Berikut adalah Verifikasi Kode Kamu',
			text: vnum
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) throw err;
			console.log('Email sent: ' + info.response);
		});
		
	} catch (error) {
		if (error.code === 11000) {
		}
		throw error
	}

	res.json({ status: 'ok' })
})


app.post('/api/register', async (req, res) => {
	const passwords = crypto.randomBytes(6).toString('base64')
	const {	Email, username, pnumber } = req.body
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
		var mailOptions = {
			from: 'medicall.bangkit@gmail.com',
			to: Email,
			context:{
				name: username, 
				pass: passwords
			},
			subject: ' Welcome! This is Your Temporary Password',
			template: 'index',
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) throw err;
			console.log('Email sent: ' + info.response);
		});
		const response = await User.create({
			Email,
			username,
			pnumber,
			password
		})
		console.log('User created successfully, Please Check Your Email to Get Your Password! ', response)
		
	} catch (error) {
		if (error.code === 11000) {
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.listen(9999, () => {
	console.log('Server up at 9999')
})
