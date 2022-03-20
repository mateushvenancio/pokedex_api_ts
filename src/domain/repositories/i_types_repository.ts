import TypeEntity from "../entities/type_entity";

export default interface ITypesRepository {
    getAllTypes(): Promise<TypeEntity[]>;
    getTypeById(id: number): Promise<TypeEntity>;
}
