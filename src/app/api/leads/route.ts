import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const leads = db.getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: 'Missing required fields (name, email, message, service)' }, { status: 400 });
    }

    const newLead = db.addLead({
      name,
      email,
      phone: phone || '',
      company: company || '',
      message,
      service
    });

    return NextResponse.json(newLead, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const success = db.updateLeadStatus(id, status);
    if (success) {
      return NextResponse.json({ message: 'Lead status updated successfully' });
    } else {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update lead status' }, { status: 500 });
  }
}
