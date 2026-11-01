import data from './arquivo-teste/rotina_exemplo.json' with { type: 'json'};

const eventos = data.eventos;

const sessao02 = eventos.filter(evento => evento.sessao_id === 's-0002');

console.log(sessao02)