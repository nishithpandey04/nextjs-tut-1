import boooks from '../../database';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = +context.params.id;
  if (id !== undefined) {
    return Response.json({
      book: boooks.filter((book) => book.id === id),
    });
  }

  return Response.json(boooks);
}
