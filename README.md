<h1 align="center">
aluga-se</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>
</p>

<!-- <p align="center">
  <img alt="Frontend" src=".github/vuttr_home.JPG" width="80%">
</p>
<p align="center">
  <img alt="Frontend" src=".github/vuttr_add.JPG" width="80%">
</p>
<p align="center">
  <img alt="Frontend" src=".github/vuttr_rm.JPG" width="80%">
</p> -->



##  Projeto

Desafio proposto pela [Pris](https://pris.com.br/). A idéia do projeto era desenvolver uma aplicação fullsatck no âmbito de locação de imóveis. Para isso, era necessário criar uma interface, com a qual o usuário fosse capaz de interagir e performar cadastros e alterações no banco de dados da aplicação.

Uma demonstração do funcionamento do sistema desenvolvido pode ser vista no vídeo: 

##  Tecnologias

### Front-end

O front-end da aplicação foi desenvolvido com a da biblioteca de JavaScript ReactJs. A estilização da interface foi obtida com CSS puro. Neste projeto, optei por utilizar o padrão de arquitetura _Flux_ proposto pela própria empresa mantenedora do ReactJs, o Facebook. Os maiores desafios enfrentados na criação da interface foram:

- Manutenção do estado global da aplicação, tendo em vista as diversas chamadas assíncronas realizadas pelo front-end a cada operação do usuário.
- Criação do componente para o upload de imagens, assim como o método correto de envio de tais informações para o servidor.
- Lógica implementada para a paginação dos resultados.

Tecnologias utilizadas:
- JavaScript, HTML, CSS
- [ReactJs](https://reactjs.org/) (_Flux_ _Pattern_)
- [axios](https://github.com/axios/axios) 
- [react-dropzone](https://github.com/react-dropzone/react-dropzone) 

## Como usar
- É necessário ter o [Node.js](https://nodejs.org/en/) e [npm](https://www.npmjs.com/) instalados
- Clone esse repositório: `git clone https://github.com/romaSilva/VUTTR-BossaBox.git`
- Instale as dependências do projeto, digitando no terminal: `npm install`
- Enfim, para rodar a aplicação digite: `npm start`
​

##  Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.