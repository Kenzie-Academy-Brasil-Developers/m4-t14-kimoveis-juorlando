import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import { appError } from "./errors";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts.js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const baseUrl: string | undefined = process.env.DATABASE_URL;

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!baseUrl) {
    throw new appError("Env var DATABASE_URL does not exists");
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: baseUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationPath],
    entities: [entitiesPath],
    migrationsTableName: "migration_kimoveis",
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
