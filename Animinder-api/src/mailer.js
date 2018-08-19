import nodemailer from 'nodemailer';

const from = '"animinder" <info@animinder.com>';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: '2525',
    auth: {
        user: 'bd93bcd04b5ff9',
        pass: '274df9e7a143ae'
    }
});

export function sendConfirmationEmail(user) {
    const email = {
        from,
        to: user.email,
        subject: "Welcome to Animinder",
        text: `
            Welcome to Animinder. Please confirm your email.
            ${user.generateConfirmationUrl()}
        `
    }

    transport.sendMail(email).catch((err) => {
        console.log('transport', transport);
        console.log('email', email);
        console.log('error', err);
    });

}

export function sendResetPasswordEmail(user) {
    const email = {
        from,
        to: user.email,
        subject: "Reset password",
        text: `
            To reset password, follow this link
            ${user.generateResetPasswordLink()}
        `
    }

    transport.sendMail(email).catch((err) => {
        console.log('transport', transport);
        console.log('email', email);
        console.log('error', err);
    });

}