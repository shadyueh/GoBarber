# GoBarber

Barbearia

## Base da app:

```
❯ yarn init
❯ yarn add nodemon eslint -D
❯ yarn eslint --init
```

### Configurações do ESLint

```
? How would you like to use ESLint?
❯ To check syntax, find problems, and enforce code style
? What type of modules does your project use?
❯ CommonJS (require/exports)
? Which framework does your project use?
❯ None of these
? Where does your code run?
❯ Node
? How would you like to define a style for your project?
❯ Use a popular style guide
? Which style guide do you want to follow?
❯ Standard (https://github.com/standard/standard)
? What format do you want your config file to be in?
❯ JSON
```

remover o arquivo `package-lock.json` e

```
❯ yarn
```

para o `yarn` revisar e gerenciar as dependências instaladas pelo `npm`.

### Configuração do editorconfig

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Configuração do nodemon

Adicione ao arquivo `package.json`

```
"scripts" :{
  "start": "nodemon src/index.js"
}
```

### Configuração do Sequelize

```
❯ yarn add sequelize
❯ yarn add sequelize-cli -D
❯ npx sequelize init
```

Mova o diretório `config` para dentro de `src`

Dentro de `src`, crie um diretório nomeado `database` e mova para dentro dele os diretórios `migrations` e `seeders`

Renomeie o arquivo `src/config/config.json` para `src/config/database.js`

Crie um arquivo .sequelizerc para configurar o sequelize para enxergar os paths modificados

```
const path = require('path')

module.exports = {
  'config': path.resolve('src','config','database.js'),
  'models-path': path.resolve('src','app','models'),
  'seeders-path': path.resolve('src','database','seeders'),
  'migrations-path': path.resolve('src','database','migrations'),
}
```

Teste a criação das migrations com

```
❯ npx sequelize migration:create --name=create-users
```

Um arquivo de migration deve estar no diretório
`src\database\migrations`

### Instalação do Postgres

Instale o docker.
As instruções para para ubuntu linux estão neste [link](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce).

Teste a instalação com

```
❯ docker -v
```

Efetue login no docker através do cli usando o id criado no docker hub.

Instale o serviço como `database`, redirecionando a porta do PostgreSQL para a mesma no host OS, em modo `detached`, com a imagem `kartoza/postgis`.

O usuário e senha padrões são `docker:docker`

```
❯ docker run --name database -p 5432:5432 -d -t kartoza/postgis
```

Verifique se o serviço está em execução com

```
❯ docker ps
```

Uma vm com a imagem informada deve estar na lista.

Daí já é possível conectar à database do container com qualquer cliente SGBD postgres usando as configurações:

```
host: localhost
database: postgres
port: 5432
user: docker
password: docker
```

Para parar o container

```
❯ docker stop <ID ou alias do container>
```

Para iniciar um container existente

```
❯ docker start <ID ou alias do container>
```
