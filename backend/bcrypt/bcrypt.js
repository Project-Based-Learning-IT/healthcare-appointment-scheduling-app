require('dotenv').config();

function hash(plainTextPassword, salt) {
	return (plainTextPassword + "," + salt).split(',')
}

function compare(encryptedPassword, actualPassword) {
	return hash(encryptedPassword, process.env.PASSWORD_SALT) === actualPassword
}

module.exports = {
	hash,
	compare
}