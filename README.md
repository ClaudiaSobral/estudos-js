# estudos-js
Repositório de estudos de JavaScript

## Objetivo
Este repositório é um auxiliar do repo do meu [app de registro de rotina](https://github.com/ClaudiaSobral/app-rotina). Aqui, desenvolvo exercícios para exercitar JavaScript e estudar as funções a serem implementadas.

### Exercício 1

O arquivo ```teste-duracao-sessao-unica.json``` serviu para eu aprender como extrair duração de uma sessão única do crônometro (sem pausas).

A princípio, houve dificuldade para entender como filtrar e isolar as sessões. Esse foi o primeiro código, que funcionou, mas ele era confuso e funcionava por acaso:

```javascript
const eventosDaSessao = data.eventos
    .filter(sessao => sessao.sessao_id === "s-0001");

const data1 = new Date(eventosDaSessao.filter(evento => evento.tipo == "sessao_iniciada").map(data => data.timestamp_utc));

const data2 = new Date(eventosDaSessao.filter(evento => evento.tipo == "sessao_finalizada").map(data => data.timestamp_utc));

const duracao = data2 - data1;
console.log(duracao);
```

Nesse trecho, data se confude com o json importado, que também se chama "data", e além disso ele não funcionaria se houvesse mais de uma sessão iniciada no trecho analisado. Ele traria uma lista. Além disso, esse código traz o resultado em milissegundos.

A correção foi essa:

```javascript
const eventosDaSessao = data.eventos
    .filter(sessao => sessao.sessao_id === "s-0001");

const inicio = eventosDaSessao.find(evento => evento.tipo == "sessao_iniciada");

const fim = eventosDaSessao.find(evento => evento.tipo == "sessao_finalizada");

const duracaoEmMinutos = (new Date(fim.timestamp_utc) - new Date(inicio.timestamp_utc)) / 60000;

console.log(duracaoEmMinutos);
```

Primeiro, ela captura todos os eventos com a id "s-0001". Depois, ela filtra o primeiro resultado do tipo "sessão iniciada" e, na linha seguinte, o primeiro resultado de "sessao_finalizada".

Na penúltima linha, a constante é a diferença de fim e início, transformando o texto encontrado em data. No final da linha, ele divide tudo por 60000 para ter o resultado em minutos em vez de milissegundos.

Esse resultado ainda não funciona para sessões que tenham uma pausa. Esse será o próximo desafio.