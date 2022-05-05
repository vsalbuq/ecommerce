import IProductRepository from "./IProductRepository";
import Product from "./Product";

export default class ProductRepositoryMemory implements IProductRepository {
  products: Product[];

  constructor() {
    this.products = [
      new Product(1, "Instrumentos Musicais", "Guitarra", 1000),
      new Product(2, "Instrumentos Musicais", "Amplificador", 5000),
      new Product(3, "Acessórios", "Cabo", 30),
    ];
  }
  getById(idItem: number): Product | undefined {
    return this.products.find((product) => product.idItem === idItem);
  }
}
