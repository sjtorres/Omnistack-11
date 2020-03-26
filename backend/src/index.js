// Importando módulos
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

// Criando a aplicação
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


// Ouvindo a porta 3333
app.listen(3333)
