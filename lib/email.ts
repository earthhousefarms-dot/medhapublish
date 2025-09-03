import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'Medha Publish <noreply@medhapublish.com>',
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}

export function getVerificationEmailTemplate(name: string, verificationLink: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Medha Publish</h1>
            <p>Nurturing Brilliance, One Mind at a Time</p>
          </div>
          <div class="content">
            <h2>Hello ${name}!</h2>
            <p>Thank you for joining Medha Publish, the premier platform for gifted learners and young authors.</p>
            <p>Please verify your email address to access our collection of advanced educational materials and start your journey with us.</p>
            <div style="text-align: center;">
              <a href="${verificationLink}" class="button">Verify Email Address</a>
            </div>
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #667eea;">${verificationLink}</p>
            <p>This link will expire in 24 hours for security reasons.</p>
            <div class="footer">
              <p>If you didn't create an account with Medha Publish, please ignore this email.</p>
              <p>&copy; 2024 Medha Publish. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getWelcomeEmailTemplate(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .feature { padding: 15px; margin: 10px 0; background: #f9fafb; border-radius: 5px; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Medha Publish!</h1>
            <p>Your Account is Now Active</p>
          </div>
          <div class="content">
            <h2>Dear ${name},</h2>
            <p>Your email has been successfully verified! Welcome to our community of gifted learners and educators.</p>
            
            <h3>What you can do now:</h3>
            <div class="feature">
              <strong>📚 Browse Our Catalog</strong>
              <p>Explore 500+ advanced educational materials designed for gifted minds</p>
            </div>
            <div class="feature">
              <strong>📖 Download Free Resources</strong>
              <p>Access our collection of free books with sample previews</p>
            </div>
            <div class="feature">
              <strong>✍️ Young Authors Program</strong>
              <p>Submit your manuscript and share your brilliance with the world</p>
            </div>
            <div class="feature">
              <strong>🎧 Multimedia Learning</strong>
              <p>Enjoy audiobooks and video content for enhanced learning</p>
            </div>
            
            <div style="text-align: center;">
              <a href="http://localhost:3000/catalog" class="button">Start Exploring</a>
            </div>
            
            <div class="footer">
              <p>Need help? Contact us at support@medhapublish.com</p>
              <p>&copy; 2024 Medha Publish. Nurturing Talent, Building Future</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getDownloadLinkEmailTemplate(name: string, bookTitle: string, downloadLink: string, format: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .book-info { background: #f9fafb; padding: 20px; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Your Book is Ready!</h1>
          </div>
          <div class="content">
            <h2>Hello ${name},</h2>
            <p>Your download for the following book is ready:</p>
            
            <div class="book-info">
              <h3>${bookTitle}</h3>
              <p><strong>Format:</strong> ${format.toUpperCase()}</p>
              <p><strong>Download expires in:</strong> 24 hours</p>
            </div>
            
            <div style="text-align: center;">
              <a href="${downloadLink}" class="button">Download Your Book</a>
            </div>
            
            <p>Or copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #667eea;">${downloadLink}</p>
            
            <p><strong>Important:</strong> This download link will expire in 24 hours. Please download your book as soon as possible.</p>
            
            <div class="footer">
              <p>Thank you for choosing Medha Publish!</p>
              <p>&copy; 2024 Medha Publish. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}