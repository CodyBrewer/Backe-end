// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './database/medcab.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
//let me know if we need something else for pg to wrk
//this looks standard for production deployment
staging: {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user:     'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
},

production: {
  client: 'postgresql',
  connection: {
    database: 'my_db',
    user:     'username',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

};
