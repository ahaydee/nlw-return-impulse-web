import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1e4be2e6ca9179",
      pass: "1439c1fbcccabd"
    }
}); 
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Anna <annahaydee01@gmail.com>',
        subject,
        html: body
    });
    }
}