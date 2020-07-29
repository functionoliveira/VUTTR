module.exports = {
    "dialect": "mysql",
    "timezone": "-03:00",
    "collate": "utf8mb4_general_ci",
    "charset": "utf8mb4",
    "timeout": 10000, 
    "debug": false,
    "pool": {
      "min": 2,
      "max": 50,
      "acquire": 30000,
      "idle": 10000
    },
    "logging": false,
}
