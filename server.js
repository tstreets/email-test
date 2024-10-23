const nodemailer = require("nodemailer");

async function run() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "streetso71@gmail.com",
      pass: "kffb wkhz knfd",
    },
  });

  const name = "Ty";

  const options = {
    from: "Ty the Tacocat Guy <streetso71@gmail.com>", // sender address
    to: "tstreets@iu.edu", // receiver email
    subject: "New Email", // Subject line
    text: `Hi ${name}`,
    html: `
    <!DOCTYPE html>
    <html>
        <body>
            <h1>${name}</h1>
        </body>
    </html>`,
  };

  const info = await transporter.sendMail(options);

  console.log("Email sent successfully");
  console.log("MESSAGE ID: ", info.messageId);

  console.log("hi");
}

run();
