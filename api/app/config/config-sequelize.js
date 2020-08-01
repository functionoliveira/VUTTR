module.exports = {
  "development": {
    "dialect"  : "postgres",
    "host"     : "vuutr-database",
    "port"     : "5432",
    "username" : "root",
    "password" : "teste123",
    "database" : "vuutr"
  },
  "test": {
    "dialect": "sqlite",
    "storage": ":memory"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./database.sqlite3"
  }
}
