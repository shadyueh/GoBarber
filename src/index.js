const server = require('./server')

// seta a porta com a variável de ambiente passada para o node ou seta para 3000
server.listen(process.env.PORT || 3000)
