

const EmailSender = require('../services/mail.sender')


const sentMail = (req,res,next) => {
        const {from, to, subject, text, html} = req.body
        console.log(from)
        const Sent = new EmailSender()
        Sent.sendMessage(from, to, subject, text, html).then(()=> {
            res.status(200).json({msg: `message to ${from} was sent succesfully`})
        }).catch((err)=>{
            console.log(err)
            res.status(200).json({msg:err})
        })
}


const sendJson = (req,res,next) => {
    const {datetime, adult, children, msg, mail} = req.body
    const from = "s.salia@gtu.ge"
    const to = "s.salia@gtu.ge"
    const subject = 'reservation'
    const text = {
        datetime: datetime,
        adult: adult,
        children: children,
        msg: msg,
        mail: mail
    }
    const html = '123'
    const text1 = `<b>datetime:${datetime}<br>, adult:${adult}<br>, children: ${children}<br>,msg:${msg}<br>, mail: ${mail}<br></b>`

    const Sent1 = new EmailSender()
    Sent1.sendMessage(from, to, subject, text1, html).then(()=> {
        res.status(200).json({msg: `message to ${from} was sent succesfully`})
     }).catch((err)=>{
        console.log(err)
        res.status(200).json({msg:err})
    })



}


module.exports = {sendJson, sentMail}