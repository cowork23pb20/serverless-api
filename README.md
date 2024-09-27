Requisitos:

Usuário AWS IAM com as permissões:
<br>
<br>
![image](https://github.com/user-attachments/assets/7a296792-2b30-477e-98de-48d3b045c950)
<br>
<br>
Instalar a AWS SAM CLI
<br>
<br>
Para executar a API:
<br>
<br>
na pasta serverless-api execute os comandos:
<br>
<br>
sam build
<br>
<br>
sam deploy --guided

<br>
<br>
O endpoint estará disponível na área Stages da API no API Gateway
<br>
<br>

Para executar os testes:
<br>
<br>
na pasta serverless-api execute os comandos:
<br>
<br>
npm run unit
<br>
ou
<br>
npm run coverage

<br>
<br>

body exemplo para PUT request:

{
    "id":"1",
    "nome":"testing nome",
    "data_nasc":"10-10-1910",
    "ativo":true,
    "address":"rua a, casa b, bairro c",
    "contatos":"abc, def, ghi"
}
