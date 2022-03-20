import NotFoundException from "../../core/exception/not_found_exception";
import ParamsException from "../../core/exception/params_exception";
import PokemonEntity from "../entities/pokemon_entity";
import IPokemonRepository from "../repositories/i_pokemon_repository";
import ITypesRepository from "../repositories/i_types_repository";

export default class PokemonController {
    constructor(
        private pokemonRepository: IPokemonRepository,
        private typesRepository: ITypesRepository
    ) {}

    async getAllPokemon(): Promise<PokemonEntity[]> {
        return this.pokemonRepository.getAllPokemon();
    }
    async getPokemonById(id: number): Promise<PokemonEntity> {
        if (!id) {
            throw new ParamsException("id");
        }
        return await this.pokemonRepository.getPokemonById(id);
    }
    async getPokemonByType(typeId: number): Promise<PokemonEntity[]> {
        if (!typeId) {
            throw new ParamsException("typeId");
        }

        const type = await this.typesRepository.getTypeById(typeId);

        if (!type) {
            throw new NotFoundException("Type not found");
        }

        return this.pokemonRepository.getPokemonByType(type);
    }
}
