import nodemailer from "nodemailer";

export const sendEmail = async (to, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "GearGuard <no-reply@gearguard.com>",
    to,
    subject: "Reset your GearGuard password",
    html: `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
      <p>This link expires in 15 minutes.</p>
    `,
  });
};
