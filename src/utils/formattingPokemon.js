

export function formattingPokemon(pokemonDetail) {
  return {
    id: pokemonDetail.id,
    name: pokemonDetail.name,
    type: pokemonDetail.types[0].type.name,
    order: pokemonDetail.order,
    image: pokemonDetail.sprites.other["official-artwork"].front_default,
  }
}