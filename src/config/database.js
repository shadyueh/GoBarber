module.exports = {
  // instale o modulo do postgres -  o yarn add pg
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  database: 'gonodemodulo2',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
