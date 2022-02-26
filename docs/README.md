# cadastro-do-bem-api
Aplicação back-end para teste técnico da Bemol.

Após clonar o código, rodar 'yarn' para instalar os pacotes

Para executar o conteiner rode 'docker-compose up'

Liste os containers em execução com o 'docker ps'

Entre no shell do container que está rodando o app com 'docker exec -it CONTAINER_ID /bin/bash'

Rode as migrations para criar as tabelas no seu db 'yarn typeorm migration:run'

