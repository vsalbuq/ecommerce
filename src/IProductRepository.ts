import Product from "./Product";

export default interface IProductRepository {
  getById(idItem: number): Product | undefined;
}
