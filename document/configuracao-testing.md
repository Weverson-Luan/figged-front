<div align="center">
    <img alt="figged-front" title="#Innovally" src="https://jestjs.io/img/opengraph.png" />

# Configuração de Teste em React Js

</div>

## Por que utilizar Teste?

- O teste traz uma confiabilidade para seu software.
- Nada mais que agente desenvolver nosso software com segurança.

## Tipo de Testes

- Teste únitarios -> Testa pequenos pedação de seu código(componentes).
- Teste de integração -> Testa como um componente e outro funciona em conjuto.
- Teste e2e -> Testa oque o usuário faria em sua aplicação manualmente.

## Instalação de ferramentas

- Jest -> É uma ferramenta para a criação de teste unitarios de uma aplicação javascript.

- Testing Library -> É uma ferramenta que fornece uma serie de funções para a execução de testes.

`````
  yarn add --dev jest
  yarn add --dev @types/jest
  yarn add --dev @testing-library/react
`````

## Iniciando Confiuração do Jest

- Digite o comando abaixo para a criação do arquivo de configuração do jest.

`````
  npx jest --init
`````

- Após o comando vão surgir algumas pergunta sendo elas

1) Você gostaria de usar o Jest ao executar o script "test" em "package.json"? » yes
2) Você gostaria de usar o Typescript para o arquivo de configuração? » yes
3) Escolha o ambiente de teste que será usado para testar » jsfom(browser-like)
4) Deseja que o Jest adicione relatórios de cobertura? » not
5) Limpa automaticamente chamadas simuladas, instâncias, contextos e resultados antes de cada teste? » yes

## Instalação do TsNode

`````
  yarn add --dev ts-node
`````

- ferramenta muito importante para o jest entender a configuração em typscript

## Instalação do @swc/core

- Temos uma problema, esse problema e que por padrão o jest não consegue entender o react-js
- Para isso vamos precisar de algumas ferramentas segue elas abaixo.

`````
  yarn add --dev @swc/core @swc/jest
`````

1) vamos ir ate o arquivo de configuração do jest e adicionarmos esse codigo abaixo em (trasnformer)

`````
 transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
`````

## Instalação da React Testing Library

`````
  yarn add --dev @testing-library/react
  yarn add --dev @testing-library/jest-dom
  yarn add --dev @testing-library/user-event 
  yarn add --dev jest-environment-jsdom
`````
