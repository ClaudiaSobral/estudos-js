import data from './arquivo-teste/rotina_exemplo.json' with { type: 'json'};

const eventosIniciados = data.eventos.filter(evento => evento.tipo === "sessao_iniciada");

const sessoes = data.eventos
    .filter(evento => evento.tipo === "sessao_iniciada")
    .map(sessao => sessao.sessao_id);

const eventosDaSessao = data.eventos
    .filter(sessao => sessao.sessao_id === "s-0001");

const inicio = eventosDaSessao.find(evento => evento.tipo == "sessao_iniciada");

const fim = eventosDaSessao.find(evento => evento.tipo == "sessao_finalizada");

const duracaoEmMinutos = (new Date(fim.timestamp_utc) - new Date(inicio.timestamp_utc)) / 60000;

console.log(duracaoEmMinutos);