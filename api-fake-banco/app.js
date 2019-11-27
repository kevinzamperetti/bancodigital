const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.post('/login', (req, res, next) => {
  if (req.body.email === 'vemser@bancodigital.com' && req.body.senha === 'vemserbanco') {
    res.status(200).json({
      status: 'success',
      token: 'banco-vemser-api-fake'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
});

app.get('/agencias', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      agencias: [
        { id: 1, codigo: 0001, nome: 'passo dareia', endereco: {
          logradouro: 'av. andarai',
          numero: 531,
          bairro: 'Passo dareia',
          cidade: 'Porto Alegre',
          uf: 'RS'
        } },
        { id: 2, codigo: 0002, nome: 'teste 1', endereco: {
          logradouro: 'Rua Testando',
          numero: 16,
          bairro: 'Teste',
          cidade: 'Porto Alegre',
          uf: 'RS'
        } }
      ]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/agencia/:id', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }

  const agencias = [
    { id: 1, codigo: 0001, nome: 'passo dareia', endereco: {
      logradouro: 'av. andarai',
      numero: 531,
      bairro: 'Passo dareia',
      cidade: 'Porto Alegre',
      uf: 'RS'
    } },
    { id: 2, codigo: 0002, nome: 'teste 1', endereco: {
      logradouro: 'Rua Testando',
      numero: 16,
      bairro: 'Teste',
      cidade: 'Porto Alegre',
      uf: 'RS'
    } }
  ]
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      agencias: agencias[req.params.id]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/clientes', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      clientes: [
        { id: 1,
          nome: 'Facilitador Vem Ser 3',
          cpf: '000.000.000-00',
          agencia: {
            id: 1,
            codigo: 0001,
            nome: 'passo dareia',
            endereco: {
              logradouro: 'av. andarai',
              numero: 531,
              bairro: 'Passo dareia',
              cidade: 'Porto Alegre',
              uf: 'RS'
            }
          }
        },
        { id: 2,
          nome: 'Alunos Vem Ser 3',
          cpf: '000.000.000-01',
          agencia: {
            id: 2,
            codigo: 0002,
            nome: 'teste 1',
            endereco: {
              logradouro: 'Rua Testando',
              numero: 16,
              bairro: 'Teste',
              cidade: 'Porto Alegre',
              uf: 'RS'
            }
          }
        }
      ]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/cliente/:id', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }

  const clientes = [
    { id: 1,
      nome: 'Facilitador Vem Ser 3',
      cpf: '000.000.000-00',
      agencia: {
        id: 1,
        codigo: 0001,
        nome: 'passo dareia',
        endereco: {
          logradouro: 'av. andarai',
          numero: 531,
          bairro: 'Passo dareia',
          cidade: 'Porto Alegre',
          uf: 'RS'
        }
      }
    },
    { id: 2,
      nome: 'Alunos Vem Ser 3',
      cpf: '000.000.000-01',
      agencia: {
        id: 2,
        codigo: 0002,
        nome: 'teste 1',
        endereco: {
          logradouro: 'Rua Testando',
          numero: 16,
          bairro: 'Teste',
          cidade: 'Porto Alegre',
          uf: 'RS'
        }
      }
    }
  ]
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      cliente: clientes[req.params.id]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/tipoContas', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      tipos: [
        { id: 1,
          nome: 'Corrente'},
        { id: 2,
          nome: 'Conjunta'},
        { id: 3,
          nome: 'Digital'},
        { id: 4,
          nome: 'Investimento'},
        { id: 5,
          nome: 'Poupança'},
        { id: 6,
          nome: 'Salario'},
      ]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/tiposConta/:id', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }

  const tipos = [
    { id: 1,
      nome: 'Corrente'},
    { id: 2,
      nome: 'Conjunta'},
    { id: 3,
      nome: 'Digital'},
    { id: 4,
      nome: 'Investimento'},
    { id: 5,
      nome: 'Poupança'},
    { id: 6,
      nome: 'Salario'},
  ]
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      tipos: tipos[req.params.id]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/conta/clientes', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      cliente_x_conta: [
        { id: 1,
          codigo: 00001,
          tipo: {
            id: 1,
            nome: 'Corrente'
          },
          cliente: {
            id: 1,
            nome: 'Facilitador Vem Ser 3',
            cpf: '000.000.000-00',
          }
        },
        { id: 2,
          codigo: 00002,
          tipo: {
            id: 6,
            nome: 'Salario'
          },
          cliente: {
            id: 1,
            nome: 'Facilitador Vem Ser 3',
            cpf: '000.000.000-00',
          }
        }
      ]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.get('/conta/cliente/:id', (req, res, next)  => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'error'
    });
  }

  const conta = [
    { id: 1,
      codigo: 00001,
      tipo: {
        id: 1,
        nome: 'Corrente'
      },
      cliente: {
        id: 1,
        nome: 'Facilitador Vem Ser 3',
        cpf: '000.000.000-00',
      }
    },
    { id: 2,
      codigo: 00002,
      tipo: {
        id: 6,
        nome: 'Salario'
      },
      cliente: {
        id: 1,
        nome: 'Facilitador Vem Ser 3',
        cpf: '000.000.000-00',
      }
    }
  ]
  
  const header = req.headers.authorization;
  if (header === 'banco-vemser-api-fake') {
    res.status(200).json({
      status: 'success',
      conta: conta[req.params.id]
    });
  } else {
    res.status(401).json({
      status: 'error'
    });
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

app.listen(1337, () => {
  console.log('App listening on port 1337!');
});
