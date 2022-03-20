import TypeEntity from "./type_entity";

export default class PokemonEntity {
    id: number;
    name: string;
    types: TypeEntity[];

    constructor(id: number, name: string, types: TypeEntity[]) {
        if (!(types.length === 1 || types.length === 2)) {
            throw {
                message: "Each pokemon must have 1 or 2 types",
            };
        }
        this.id = id;
        this.name = name;
        this.types = types;
    }
}
