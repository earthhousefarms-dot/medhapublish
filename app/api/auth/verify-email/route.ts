import { NextRequest, NextResponse } from 'next/server';
import { verifyUserEmail } from '@/lib/auth';
import { sendEmail, getWelcomeEmailTemplate } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Verify the email
    const user = await verifyUserEmail(token);

    // Send welcome email
    try {
      const emailHtml = getWelcomeEmailTemplate(user.name);
      await sendEmail({
        to: user.email,
        subject: 'Welcome to Medha Publish!',
        html: emailHtml,
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json({
      message: 'Email verified successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error: any) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify email' },
      { status: 400 }
    );
  }
}