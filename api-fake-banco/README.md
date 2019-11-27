# Fake API digital bank

Fake Node/Express API used to test frontend with token headers, em filter.

## Project Setup

1. Clone
2. Install Dependencies - `npm install`
3. Run - `npm start`

## Endpoints and Params

###Login

POST http://localhost:1337/login

{
	"email": "vemser@bancodigital.com",
	"senha": "vemserbanco"
}

###List Agency

GET http://localhost:1337/agencias

Headers {
  Authorization : banco-vemser-api-fake
}

###Especific Agency

GET http://localhost:1337/agencia/:id

Headers {
  Authorization : banco-vemser-api-fake
}

###List Client

GET http://localhost:1337/clientes

Headers {
  Authorization : banco-vemser-api-fake
}

###Especific Client

GET http://localhost:1337/cliente/:id

Headers {
  Authorization : banco-vemser-api-fake
}

###List Type Account

GET http://localhost:1337/tipoContas

Headers {
  Authorization : banco-vemser-api-fake
}

###Especific Type Account

GET http://localhost:1337/tipoConta/:id

Headers {
  Authorization : banco-vemser-api-fake
}

###List Account Client

GET http://localhost:1337/conta/clientes

Headers {
  Authorization : banco-vemser-api-fake
}

###Especific Account Client

GET http://localhost:1337/conta/cliente/:id

Headers {
  Authorization : banco-vemser-api-fake
}