# Backend

![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)




> Explicando um pouco mais sobre a parte de backend do projeto dos Jogos de PC - trainee 2024  

## 💾 O que contém no banco de dados
O banco de dados trabalhado e disponibilizado pelo [kaggle](https://www.kaggle.com/) no seguinte link: (https://www.kaggle.com/datasets/codefantasy/list-of-bestselling-pc-games/data) contém uma lista dos 176 jogos mais vendidos na história. Organizado segundo as seguintes colunas (os nomes entre aspas são uma explicação ou tradução):

- Game *"o nome do jogo"*
- Total copies sold *"total de cópias vendidads"*
- Series *"Se o jogo pertence a uma série de jogos e qual"*
- Release date *"Data de lançamento do jogo"*
- Genre(s) *"Gênero(s) do jogo"*
- Developer(s) *"O studio/time desenvolvedor do jogo"*
- Publisher(s) *"A companhia publicadora do jogo"*

A consulta de informações do banco de dados, portanto, pode ser realizada por qualquer um dos parâmetros 
apresentados. No entanto, no desenvolvimento do site, decidiu-se útil para o nosso caso a consulta por base 
no nome do jogo e o(s) gênero(s) ao qual ele pertence.

## 🖌️ A API de Imagens

Além da leitura das informações do banco de dados de jogos, também utilizamos uma API que, pelo nome do 
jogo, retorna uma imagem de uma capa do jogo no formato 16:9.

Vale ressaltar, que essa API não contém somente os 176 jogos do banco de dados, mas sim uma gama muito 
maior de opções, por isso devemos retornar erro caso um jogo que não está listado no nosso banco de dados 
seja requisitado

<img src="https://github.com/user-attachments/assets/ed69d392-d391-408c-a776-5d0839c4c5e5" alt="api de imagens" min-width="200px" max-width="400px" width="300px" align="center">


## 🍃 Conexão com o MongoDB

O banco de dados é trabalhado por meio do MongoDB, um programa de database orientado à documentos, o qual utiliza documentos em JSON, schemas e consiste de um sistema NoSQL, ou seja, não necessariamente é relacional

Para se conectar ao MongoDB da Síntese Júnior, de início é necessário criar uma conta no MongoDB com 
seu e-mail síntese e enviar seu e-mail a um dos diretores em Projetos.
Em seguida, é necessário adicionar o IPV4 do computador sendo utilizado, para tal, no 
canto inferior esquerdo se encontra o menu "Network Access".

<img src="https://github.com/user-attachments/assets/f3917102-8aee-40ed-8aab-d7a8cf4e1080" alt="conexao mongodb 1" min-width="600px" max-width="400px" width="800px" align="center">

Ao clicar, abre-se a página da lista de IPs de acesso.
Clique em "`ADD CURRENT IP ADRESS`"


<img src="https://github.com/user-attachments/assets/23bb570d-90d7-4655-96f5-aa5c96e5ae79" alt="conexao mongodb 2" min-width="600px" max-width="400px" width="800px" align="center">

E pronto! O seu IP já está cadastrado no MongoDB para acesso à rede.


> [!NOTE]
> Caso haja algum erro pode-se configurar o IP manualmente.
>Para encontrar o seu IP manualmente abra o terminal de seu computador e digite o seguinte comando segundo o seu sistema operacional:
>
>- Windows:
>  ```
>  ipconfig /all
>  ```
>- MacOS:
>  ```
>  ipconfig getifaddr en0
>  ```
>- Linux:
>  ```
>  ip a
> ```
>
>Procure pela opção de IPV4 caso apareça diversas opções.
>Agora que você tem seu IP em mãos, volte a página no MongoDB e clique em "`Add IP Adress`" e por fim, digite seu IPV4 no primeiro campo.
>Por fim, conclua a adição.


## 🚀 Inicializando a API

Primeiramente, como essa API foi realizada utilizando o `Node.js`, verifique se o Node.js já está instalado
no seu computador com o comando:

```
node --version
```

Se caso não estiver instalado, acesse o [site do Node.js](https://nodejs.org/pt) para sua instalação.

Além disso é necessária a instalação das dependências do projeto, como o `cors`, `mongoose` e `express`, para 
o funcionamento da API. Para isso, após a instalação do Node.js, rode no terminal (Linux) ou no Windows 
PowerShell (Windows), no diretório em que a API está instalada, o comando:

```
npm install
```
Por fim, rode o arquivo “`node app.js`”.

Se retornar a mensagem que o servidor de Jogos foi iniciada, significa que a API já está em 
funcionamento na sua máquina na porta 3000 definida nesse arquivo.


## 🔎 Acessando a API

Para acessar a API basta se conectar pelo seu navegador no endereço “ http://localhost:3000 ”, mas recomendamos 
realizar essa conexão em um aplicativo terceiro, como o `Insomnia`, caso queira uma interação mais avançada e 
com mais ferramentas.

### Funcionalidades

Para acessar as diferentes funcionalidades, conecte-se nos respectivos endereços que serão fornecidos a seguir:

- Lista de todos os jogos presentes no banco de dados
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001 ”
      
- Busca do jogo pelo nome
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001/nome_do_jogo ”
      
- Busca do jogo pelo gênero
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001/genero/nome_do_genero ”
    - obs: o nome_do_genero deve ser exatamente igual ao presente no banco de dados

- Acessar o número de páginas disponíveis 
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001/pag ”

- Acessar uma página de jogos
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001/pag/{número} ”

- Listar Categorias de jogos
    - Método de requisição HTTP: GET
    - Endereço: “ http://localhost:3001/listar/generos ”



