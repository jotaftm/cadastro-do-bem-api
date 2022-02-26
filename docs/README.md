# Cadastro do bem API
A Cadastro do bem é uma aplicação para registro de dados dos clientes da Bemol visando um melhor atendimento nos diversos canais da empresa.

Toda a aplicação está contida dentro do diretório `src`.
# 
## Iniciando

Após clonar o repostório e acessar em sua máquina local, execute este comando no terminal para instalar os pacotes:

    yarn
## Criando os containers
Para criar os conteiners execute o seguinte comando:

    docker-compose up

## Criando as tabelas
Para listar os containers em execução:

    docker ps



Para entrar no shell do container que está rodando a aplicação:

    docker exec -it CONTAINER_ID /bin/bash

E finalmente, para executar as migrations e criar as tabelas no seu db:

    yarn typeorm migration:run


# Endpoints da aplicação

## Criar usuário

### Request

`POST /users`

##

`Content-Type application/json`


### Body

```json
{
	"primaryName": "John",
	"lastName": "Doe",
	"email": "john@mail.com",
	"cpf": "123.456.789-01",
	"birthDate": "1994/02/24",
	"password": "12345",
	"address": {
		"zipCode": "01153-000",
		"publicPlace": "Rua Florêncio de Abreu, 120",
		"complement": "Casa",
		"district": "Centro",
		"city": "São Paulo",
		"state": "SP"
	}
}
```

### Responses
#### Quando criar com sucesso:

```json
    HTTP/1.0 201 CREATED

    Content-Type	application/json

    {
        "uuid": "2a98a7e4-cf3e-4bb7-abe6-0b069c6b27a1",
        "primaryName": "John",
        "lastName": "Doe",
        "email": "john@mail.com",
        "cpf": "123.456.789-01",
        "birthDate": "1994-02-24T00:00:00.000Z",
        "createdAt": "2022-02-26T22:30:05.300Z",
        "confirmed": false
    }
```
#### Quando passar algum valor que já existe no banco:

```json
    HTTP/1.0 400 BAD REQUEST

    Content-Type	application/json

    {
	    "status": "error",
	    "message": "Key (email)=(john@mail.com) already exists."
    }
```
#### Quando passar algum valor inválido ou faltar alguma chave:

```json
    HTTP/1.0 422 UNPROCESSABLE ENTITY

    Content-Type	application/json

    {
        "status": "error",
        "message": [
            "primaryName is required",
            "invalid cpf format"
        ]
    }
```
#
## Atualizar status de confirmação do usuário

### Request

`PATCH /users/:userId`

##

`Content-Type application/json`


### Body

```json
    {
        "confirmed": true
    }
```

### Responses
#### Quando atualizar com sucesso:

```json
    HTTP/1.0 200 OK

    Content-Type	application/json

    {
        "uuid": "2a98a7e4-cf3e-4bb7-abe6-0b069c6b27a1",
        "primaryName": "John",
        "lastName": "Doe",
        "email": "john@mail.com",
        "cpf": "123.456.789-01",
        "birthDate": "1994-02-24T00:00:00.000Z",
        "createdAt": "2022-02-26T22:30:05.300Z",
        "confirmed": true
    }
```
#### Quando faltar a chave:

```json
    HTTP/1.0 422 UNPROCESSABLE ENTITY

    Content-Type	application/json

    {
        "status": "error",
        "message": [
            "confirmed is required"
        ]
    }
```
#### Quando passar um valor inválido:

```json
    HTTP/1.0 422 UNPROCESSABLE ENTITY

    Content-Type	application/json

    {
        "status": "error",
        "message": [
            "confirmed must be a `boolean` type, but the final value was: `\"teste\"`."
        ]
    }
```
#


