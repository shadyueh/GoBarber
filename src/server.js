const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    // variável do node para detectar o ambiente: production, development ou testing
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    // tratamento dos dados passados por formulário
    this.express.use(express.urlencoded({ extended: false }))
  }

  views () {
    // configurações do nunjucks
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })
    this.express.set('view engine', 'njk')
  }
  routes () {

  }
}

// exporta uma instância da app
module.exports = new App().express
