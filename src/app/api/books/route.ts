import boooks from '../database';

export async function GET() {
  return Response.json(boooks);
}

export async function POST(request: Request) {
  const book = await request.json();
  boooks.push(book);

  return Response.json(boooks);
}
