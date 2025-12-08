interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  console.log("ID:", id);

  return (
    <div>
      <h1>Hello Pokemon with ID: {id} - Page</h1>
    </div>
  );
}
