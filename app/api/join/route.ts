import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_JOIN_FORM_API_KEY || 're_build_placeholder');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      occupation,
      institution,
      postName,
      officeName,
      businessName,
      occupationDescription,
      email,
      phone,
      bloodGroup,
      heardAboutUs,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !occupation ||
      !email ||
      !phone ||
      !bloodGroup ||
      !heardAboutUs
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate occupation-specific fields
    if (occupation === 'student' && !institution) {
      return NextResponse.json(
        { error: 'Institution name is required for students' },
        { status: 400 }
      );
    }

    if (occupation === 'jobHolder' && (!postName || !officeName)) {
      return NextResponse.json(
        { error: 'Post name and office name are required for job holders' },
        { status: 400 }
      );
    }

    if (occupation === 'business' && !businessName) {
      return NextResponse.json(
        { error: 'Business name is required for business occupation' },
        { status: 400 }
      );
    }

    if (occupation === 'other' && !occupationDescription) {
      return NextResponse.json(
        { error: 'Occupation description is required for other occupation' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'akobd24@gmail.com';
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      'Al-Khidmah Organization <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: `New Join Request - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #047857; border-bottom: 2px solid #047857; padding-bottom: 10px; margin-bottom: 20px;">
            New Join Request
          </h2>

          <p style="margin: 0 0 16px 0; color: #374151;">
            A new brother/sister has submitted a request to join Al-Khidmah Organization.
          </p>

          <div style="background-color: #ecfdf5; padding: 16px 20px; border-radius: 8px; margin-top: 10px;">
            <h3 style="color: #065f46; margin-top: 0; margin-bottom: 12px;">Basic Information</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Full Name:</td>
                <td style="padding: 6px 0; color: #022c22;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Occupation:</td>
                <td style="padding: 6px 0; color: #022c22;">${occupation}</td>
              </tr>
              ${
                occupation === 'student' && institution
                  ? `<tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Institution:</td>
                <td style="padding: 6px 0; color: #022c22;">${institution}</td>
              </tr>`
                  : ''
              }
              ${
                occupation === 'jobHolder' && postName
                  ? `<tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Post/Position:</td>
                <td style="padding: 6px 0; color: #022c22;">${postName}</td>
              </tr>`
                  : ''
              }
              ${
                occupation === 'jobHolder' && officeName
                  ? `<tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Office/Workplace:</td>
                <td style="padding: 6px 0; color: #022c22;">${officeName}</td>
              </tr>`
                  : ''
              }
              ${
                occupation === 'business' && businessName
                  ? `<tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Business Name:</td>
                <td style="padding: 6px 0; color: #022c22;">${businessName}</td>
              </tr>`
                  : ''
              }
              ${
                occupation === 'other' && occupationDescription
                  ? `<tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Occupation Description:</td>
                <td style="padding: 6px 0; color: #022c22; white-space: pre-line;">${occupationDescription}</td>
              </tr>`
                  : ''
              }
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Email:</td>
                <td style="padding: 6px 0; color: #022c22;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Phone:</td>
                <td style="padding: 6px 0; color: #022c22;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: 600; color: #065f46;">Blood Group:</td>
                <td style="padding: 6px 0; color: #022c22;">${bloodGroup}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #eff6ff; padding: 16px 20px; border-radius: 8px; margin-top: 16px;">
            <h3 style="color: #1d4ed8; margin-top: 0; margin-bottom: 10px;">How they heard about Al-Khidmah</h3>
            <p style="margin: 0; color: #1f2937; white-space: pre-line;">${heardAboutUs}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p style="margin: 0 0 4px 0;">This email was sent from the Al-Khidmah Organization website join form.</p>
            <p style="margin: 0;">Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error (join form):', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Join request submitted successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing join request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


