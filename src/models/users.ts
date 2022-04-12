import { Pool, ResultSetHeader } from 'mysql2/promise';

interface Iuser {
  Connection: Pool
}

export default class CRUDUsers implements Iuser {
  Connection;

  constructor(connection: Pool) {
    this.Connection = connection;
  }

  create = async (username: string, classe: string, level: number, password: string) => {
    const querry = 'INSERT INTO Trybesmith.Users (username,classe,level,password) VALUES (?,?,?,?)';
    const [results] = await this.Connection.execute<ResultSetHeader>(
      querry, 
      [username, classe, level, password],
    );
    return results; 
  };
}
