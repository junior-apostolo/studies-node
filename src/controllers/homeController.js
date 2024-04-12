
//REQUEST -> RECEBE OS DADOS... REFERENCIA O QUE O SERVIDOR ESTA PEDINDO
//RESPOST -> ENVIA UMA RESPOSTA PARA O USUARIO
exports.paginaInicial = (req, res) => {
  res.render('index')
};

exports.sendPost = (req, res) => {
  res.send("Nova rota de post")
}