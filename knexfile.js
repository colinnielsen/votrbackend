module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/voter"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
