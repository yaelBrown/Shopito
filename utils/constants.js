// Constants file

const CONSTANTS  = {
  DB_HOST: process.env.NEXT_PUBLIC_DB_HOST || "127.0.0.1",
  DB_USER: process.env.NEXT_PUBLIC_DB_USER || "postgres",
  DB_PASSWORD: process.env.NEXT_PUBLIC_DB_PASSWORD || "shopshopshop",
  DB_DATABASE: process.env.NEXT_PUBLIC_DB_DATABASE || "shopito_db",
  API_VERSION: "v1",
}

CONSTANTS.API_URL = `http://localhost:3000/${CONSTANTS.API_VERSION}/`

export default CONSTANTS