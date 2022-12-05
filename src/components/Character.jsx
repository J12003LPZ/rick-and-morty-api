function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        className="imagen img-fluid mt-2 rounded-pill"
        src={character.image}
        alt={character.name}
      />
      <p className="mt-3"><b>Origin:</b> {character.origin.name}</p>
      <p className="mt-3"><b>Species:</b> {character.species}</p>
      <p className="mt-3"><b>Status:</b> {character.status}</p>
    </div>
  );
}

export default Character;
