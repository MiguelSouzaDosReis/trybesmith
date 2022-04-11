import { Pool, RowDataPacket } from 'mysql2/promise';

type Products = {
  id: number,
  name: string,
  amount: string,
  orderId: number,
};

interface Iproducts {
  Connection: Pool
  getAll: () => Promise<Products[]>
}

export default class CRUDProducts implements Iproducts {
  Connection;

  constructor(connection: Pool) {
    this.Connection = connection;
  }

  getAll = async () => {
    const querry = 'SELECT * FROM Trybesmith.Products';
    const [results] = await this.Connection.execute<RowDataPacket[]>(querry);
  
    return results as Products[];
  };
}
