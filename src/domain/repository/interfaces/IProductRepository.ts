import Product from "../../entity/Product";

export default interface IProductRepository {
  getById(idItem: number): Product | undefined;
}
