import { Pool, RowDataPacket } from 'mysql2/promise';

interface Iorder {
  Connection: Pool
}

export default class CRUDOrder implements Iorder {
  Connection;

  constructor(connection: Pool) {
    this.Connection = connection;
  }

  // utilizei o JSON_ARRAYAGG atraves da documentação do mysql
  // fonte: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg 

  getAll = async () => {
    const querry = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS products
    FROM Trybesmith.Orders AS o 
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER By o.userId`;
    const [results] = await this.Connection.execute<RowDataPacket[]>(querry);
  
    return results;
  };
}
