const mailConfig = require("../config/mailler")
const nodemailer = require("nodemailer")
exports.sendEmail = async (to, subject, htmlContent) => {
	try {
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: mailConfig.HOST,
			port: mailConfig.PORT,
			service: "gmail",
			secure: false, // true for 465, false for other ports
			auth: {
				user: mailConfig.USERNAME, // generated ethereal user
				pass: mailConfig.PASSWORD, // generated ethereal password
			},
		})
		const options = {
			from: mailConfig.FROM_ADDRESS, // sender address
			to: to, // list of receivers
			subject: subject, // Subject line
			html: htmlContent, // html body
		}
		// send mail with defined transport object
		return transporter.sendMail(options)
	} catch (error) {
		console.log(error, "email not sent")
	}
}
