const nodemailer = require('nodemailer')
const { validate } = require("email-validator")

module.exports = class EmailSender {
    transport

    constructor() {
        this.transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                // aq aris mailis paroli da id shesayvani
                user: 'mail_user',
                pass: 'mail_password',
            },
        })
    }

    async sendMessage(to, subject, text, html) {
        let mailOptions = {
            from: 's.salia@gtu.ge',
            to,
            subject,
            text,
            html,
        }
        if(validate(mailOptions.to)){
            await this.transport.sendMail(mailOptions)
            .then(result => {`console.log(result) resu`})
            .catch(error => {console.log(error)})
        }
        else{
            console.log('pls enter valid mail')
        }
        

    }
}


