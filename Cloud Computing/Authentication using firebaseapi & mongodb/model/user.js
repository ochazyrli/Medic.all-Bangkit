//this code for database modelling

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		Email: {
			type: String,
			required: true,
			min: 6,
			max: 255,
			unique:true,
		},
		username: {
			type: String,
			required: true,
			min: 6,
			max: 255,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 8,
			max: 1024
		},
		pnumber: {
			type: String,
			required: true,
			min: 8,
			max: 1024
		},
		
	},

	{ collection: 'userdata' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
