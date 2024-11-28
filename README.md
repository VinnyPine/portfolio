# Portfolio

Este é um portfólio para apresentar minhas habilidades e projetos.

## Pasta utils

Você pode clonar o repositorio se quiser, e alterar os seus dados na pasta utils.
Dentro dessa pasta, você precisará fazer o seguinte:

- Em userData, coloque seu nome, usuário do GitHub, o final do link do seu LinkedIn e seu número de telefone com DDD.

```javascript
const userData = {
  name: "Seu nome aqui",
  github: "seu-nome-de-usuário-do-github",
  linkedin: "seu-linkedin",
  whatsappNumber: "11912341234"
  email: "exemplo@email.com",
  curriculum: "https://linkdo.curriculo"
};
```

- Em stackData, coloque o título da ferramenta, ícone do pacote react-icons e uma ou mais tags para o filtro.

```javascript
const stackData = [
  {
    title: "React",
    icon: "GrReactjs",
    tag: ["frontend"],
  },
  {
    title: "NodeJs",
    img: FaNodeJs,
    tags: ["backend"],
  },
  {
    title: "TypeScript",
    img: SiTypescript,
    tags: ["frontend", "backend", "mobile"],
  },
];
```

- Em projectsData, coloque o nome do projeto (igual está no GitHub) e a imagem a ser exibida.

```javascript
const projectsData = [
  {
    name: "projeto-1",
    img: "caminho/para/imagem-1",
  },
  {
    name: "projeto-2",
    img: "caminho/para/imagem-2",
  },
];
```
