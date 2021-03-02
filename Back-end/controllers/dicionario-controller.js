const repDicionario = require('../repositories/dicionario-repository')

exports.getPalavras = async(req,res,next) => {
    const rep = await repDicionario.FindAllWords();

    res.status(200).send({
        mensagem: "Usando o GET",
        rep
    });
};