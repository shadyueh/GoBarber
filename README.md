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
