import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const portfolio = db.getPortfolio();
    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, client_name, metrics, description, image_url, case_study_content } = body;
    
    if (!title || !category || !client_name || !metrics || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProject = db.addPortfolio({
      title,
      category,
      client_name,
      metrics,
      description,
      image_url: image_url || '/assets/port-placeholder.jpg',
      case_study_content: case_study_content || ''
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add portfolio item' }, { status: 500 });
  }
}
