import PokemonEntity from "../entities/pokemon_entity";
import TypeEntity from "../entities/type_entity";

export default interface IPokemonRepository {
    getAllPokemon(): Promise<PokemonEntity[]>;
    getPokemonById(id: number): Promise<PokemonEntity>;
    getPokemonByType(type: TypeEntity): Promise<PokemonEntity[]>;
}
