import { Connection, createConnection } from 'typeorm';
import { v4 } from 'uuid';
import { vehicle, name, internet } from 'faker';

async function getDatabaseConnection() {
  const {
    DB_HOST: host,
    DB_PORT: port,
    DB_USERNAME: username,
    DB_PASSWORD: password,
    DB_DATABASE: database,
  } = process.env;

  console.log('***** SETTING UP DB CONNECTION *****');
  return createConnection({
    host,
    port: +(port as string),
    username,
    password,
    database,
    type: 'mysql',
    migrations: ['./apps/api/migrations/*.ts'],
    synchronize: false,
    logging: true,
  });
}

async function seed(connection: Connection) {
  const dogs = Array(100)
    .fill(false)
    .map(
      () =>
        `('${v4()}', '${name.firstName()}', '${vehicle.model()}', '${internet.color()}')`
    )
    .join(',');

  await connection.query(
    `INSERT INTO dogs (id, name, breed, color) VALUES ${dogs}`
  );
}

async function main() {
  const connection = await getDatabaseConnection();

  await connection.runMigrations();

  await seed(connection);

  await connection.close();
  console.log('Done ⭐!');
}

main();
