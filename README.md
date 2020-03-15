# Projeto Cadastro Cliente Front-Back

Este projeto é um simples exemplo de um formulario basico com validações integrado com um backend feito em node js usando o nestjs framework usando MongoDB

## Instruções

Atenção, na primeira vez que os comandos forem executados, pode demorar um pouco para iniciar devido a ele baixar as depedencias, aguarde um pouco até que o processo conclua.

### Usando Docker com banco local (criado pelo proprio docker):

No direito root digite:

`sudo docker-compose up --build`

frontend: http://localhost:4001

backend: http://localhost:4000/v1

### Usando Docker porem com banco remoto:

Vá até o diretorio `backend` e comente a linha do mongo local e descomente a linha do banco remoto. assim:
```dotenv
# MONGODB LOCAL
#MONGO_URL=mongodb://root:root@project-mongo:27017/project?authSource=admin

# ATLAS DB
MONGO_URL=mongodb+srv://jhonny:0vwJHCfSpqZe0ZRJ@cluster0-lgmcc.gcp.mongodb.net/test?retryWrites=true&w=majority

# HASH
ENCRYPTION_KEY=90e6e9c86684e887d817fc913c55222d
ENCRYPTION_IV=6a663b63313

# SERVER
PORT=4000
```

Volte para a pasta root e digite:

`sudo docker-compose up --build`

### Iniciando projetos manualmente:

- Siga o processo acima para usar o banco remoto **porem sem digitar o comando final**

Agora é só iniciar os projetos manualmente:

- Vá até a pasta `backend` e digite os comando: 
  1. `sudo yarn` para instalar as depedencias
  2. `sudo yarn start` para iniciar o projeto
   
- Vá até a pasta `frontend` e digite o comando:
  1. `sudo yarn` para instalar as depedencias
  2. `sudo yarn start` para iniciar o projeto

Pronto, ambos projetos devem estar rodando e conectados ao banco na nuvem com sucesso 

Para acessa-los vá nas urls:

- frontend: http://localhost:4001
- backend: http://localhost:4000/v1
