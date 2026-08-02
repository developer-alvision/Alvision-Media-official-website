import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const apps = db.getCareers();
    return NextResponse.json(apps);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch career applications' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { job_title, applicant_name, email, portfolio_url, resume_url } = body;

    if (!job_title || !applicant_name || !email) {
      return NextResponse.json({ error: 'Missing job title, applicant name, or email' }, { status: 400 });
    }

    const newApp = db.addCareerApplication({
      job_title,
      applicant_name,
      email,
      portfolio_url: portfolio_url || '',
      resume_url: resume_url || ''
    });

    return NextResponse.json(newApp, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
