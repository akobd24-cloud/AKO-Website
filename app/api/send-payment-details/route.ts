import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_PAYMENT_API_KEY || 're_build_placeholder');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, transactionId, paymentMethod, amount } = body;

    // Validate required fields
    if (!name || !email || !phone || !transactionId || !paymentMethod || !amount) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'akobd24@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Al-Khidmah Organization <onboarding@resend.dev>';

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: fromEmail, // Update RESEND_FROM_EMAIL in .env after verifying your domain in Resend
      to: [adminEmail],
      subject: `New Payment Details Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Payment Details Submission
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Donor Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Payment Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Payment Method:</td>
                <td style="padding: 8px 0; color: #1f2937;">${paymentMethod}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Amount:</td>
                <td style="padding: 8px 0; color: #1f2937; font-size: 18px; font-weight: bold;">৳${Number(amount).toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Transaction ID:</td>
                <td style="padding: 8px 0; color: #1f2937; font-family: monospace;">${transactionId}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Al-Khidmah Organization donation form.</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Payment details submitted successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing payment details:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
