# Projeto Store Manager

:rocket: *Projeto desenvolvido em 07/2022 - Bloco 23/Trybe*

![App Screenshot](./img/store-manager.gif)

## :dart: Objetivo

Desenvolver uma API de gerenciamento de vendas contendo endpoints para criar, exibir, atualizar e excluir produtos e vendas, utilizando o modelo de arquitetura MSC (model-service-controller) juntamente com o padrão REST, assim criando uma API RESTful.

## :brain: Habilidades desenvolvidas

- Acessar o banco de dados do *MySQL* através do *Docker*
- Utilizar o *Express* para o desenvolvimento da API
- Gerenciar as vendas e produtos com um *CRUD (Create, Read, Update e Delete)*
- Tratar erros com o *express-recue*
- Validar dados recebidos através do *Joi*
- Monitorar mudanças nos arquivos com o *Nodemon*
- Criar testes para cada camada MSC utilizando *Mocha*, *Chai* e *Sinon*

## :hammer_and_wrench: Ferramentas utilizadas

- MySQL
- Docker
- Express
- Express-rescue
- Joi
- Nodemon
- Mocha, Chai e Sinon

:zap: *Todos os projetos da [Trybe](https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0TgLB25i-0iaTXpXGAYC5i-3mDoTto4laUGYI5XZFJpSlNbrojLuUaAs6cEALw_wcB) utilizam Linters, Git e Github*

## :pushpin: Endpoints da API

| Rotas de produtos | Descrição       | - | Rotas de vendas | Descrição       |
| :---------- | :--------- | - | :----------  | :----------  |
| `GET /products` | Lista todas os produtos | - | `GET /sales` | Lista todas as vendas |
| `GET /products/:id` | Lista um produto específico | - | `GET /sales/:id` | Lista uma venda específica |
| `GET /products/search` | Exibe o produto pesquisado | - | `POST /sales` | Cadastra uma nova venda |
| `POST /products` | Cadastra um novo produto | - | `PUT /sales/:id` | Altera os dados de uma venda |
| `PUT /products/:id` | Altera os dados de um produto | - | `DELETE /sales/:id` | Deleta uma venda específica |
| `DELETE /products/:id` | Deleta um produto específico |

## :computer: Rodando localmente

Clone o projeto e entre no diretório

```bash
  git clone git@github.com:Jacqueline-Silva/store-manager.git && cd store-manager
```

Instale as dependências

```bash
  npm install
```

Crie seu arquivo **.env** e adicione as variáveis de ambiente necessárias

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`

`PORT`

Suba o container docker

```bash
  docker-compose up -d db
```

Crie o banco de dados e o popule

```bash
  npm run migration && npm run seed
```

Inicie o servidor

```bash
  npm run start
```

Para verificar os endpoints utilizados use a ferramenta desejada, por exemplo o Insomnia *(como no vídeo)*

Para visualizar o banco de dados faça a conexão do MySQL com a porta 3306

## :mag: Observações

Os arquivos *docker-compose*, *seed.sql*, *migration.sql* e *connectUtils* foram disponibilizados pela [Trybe](https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw852XBhC6ARIsAJsFPN0TgLB25i-0iaTXpXGAYC5i-3mDoTto4laUGYI5XZFJpSlNbrojLuUaAs6cEALw_wcB) para realização deste projeto

## :mailbox: Contatos

[![Linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jacqueline-sxds/)
[![Portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://jacqueline-silva.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jacqueline-Silva)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](http://wa.me/5511946162157)
[![Microsoft](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](jacque.sx@hotmail.com)
