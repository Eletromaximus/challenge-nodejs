# Api de artigos espaciais


Api desenvolvido com base no desafio da Codesh-node. Apliquei conceitos de arquitetura limpa na tentativa de tornar meu código menos repetitivo, mais simples de compreender e de mais facíl manutenção e caso haja alguma recomendação ou correção necessária, por favor, deixe-a registrada em uma issue.


## Entidades

Criei apenas uma entidade: Articles. Articles possui todos os atributos que serão enviados pela api. O construtor da classe invoca o metodo de validação, que determina se todos os parâmetros estão corretos, caso contrário, uma excessão é lançada. 

## Casos de uso

No diretório useCases, os métodos que adaptam as requisições para serem inseridas no banco de dados e vice-versa, ou que atualizem alguma informação estão estabelecidos em ArticleClientApi.
A interface que determina como serão os argumentos e retornos de cada método da api estão detalhadas em ArticleClient e aplicadas na classe ArticleClientApi. 

## Database
 
E a camada responsável por aplicar as mudanças no banco de dados Postgress com a ajuda do Prisma, utilizando os casos de uso de ArticleClientApi.
## Utilidades

Na pasta utils api.ts estabelece a conexão com a api spaceflght; either.ts possui classes Eight, left e right que facilitam na identifiação de erros quando as excessões nao previstas acontecem; e verifyAgenda.ts verica todos os dias, as nove horas da manhã, se há atualizações na api.
# index.ts e routers.ts

index.ts é o arquivo que inicializa o servidor. Nele configuramos as configurações de recomendados pela lib helmet; adicionamos o tratamento de erros assíncronos com express-async-errors e importamos as rotas de routes.ts.

