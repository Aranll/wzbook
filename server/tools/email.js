//发送验证邮件
const nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "smtp.163.com",
    auth: {
        user: '18924142715@163.com',
        password: '058398ran'
    }
});
// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foo" <18924142715@163.com>', // sender address
    to: '893916371@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};
// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});