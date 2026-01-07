export async function GET(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    count: 100,
    method: "GET",
  });
}

export async function POST(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    method: "POST",
  });
}

export async function PUT(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    method: "PUT",
  });
}

export async function DELETE(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    method: "DELETE",
  });
}

export async function PATCH(request: Request) {
  console.log({ method: request.method });
  return Response.json({
    method: "PATCH",
  });
}
