const transporter = require('../config/mail');

exports.registerMail = async ({ body }) => {
  const { name, email } = body;

  try {
    const mailOptions = {
      from: '"MedLink Plus" <noreplymedlink@gmail.com>',
      to: email,
      subject: '🎉 Welcome to MedLink Plus!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; border: 1px solid #e0e0e0;">
          <h2 style="color: #007bff;">Welcome to MedLink Plus, ${name}!</h2>
          <p style="font-size: 16px; color: #555;">
            We're thrilled to have you on board. MedLink Plus is designed to make your healthcare experience better, easier, and more efficient.
          </p>
          <p style="font-size: 16px; color: #555;">
            If you have any questions or need assistance, feel free to reach out to our support team.
          </p>
          <p style="font-size: 14px; color: #777; margin-top: 30px;">
            This is an automated email. Please do not reply. For support, contact <a href="mailto:support@medlinkplus.com">support@medlinkplus.com</a>.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`🎉 Welcome email sent to ${email}`);
  } catch (error) {
    console.error(`❗ Error sending email to ${email}:`, error.message);
    throw error;
  }
};
