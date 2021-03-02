const express = require('express'); 
const app = express();

const bodyParser = require('body-parser'); 
const cors = require('cors');
const morgan = require('morgan')

app.use(morgan("dev"));
app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

const routes = require('./routes')

app.use((req,res,next) => {
    res.header('Access-Control_Allow_Origin', '*')
    res.header(
        'Access-Control_Allow_Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );


    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow_Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.statusCode(200).send({})
    }

    next();
})

app.use('/api', routes)

app.use((req,res,next) => {
    const erro = new Error('Não Encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensasgem: error.message
        }
    }); 
});

module.exports = app;