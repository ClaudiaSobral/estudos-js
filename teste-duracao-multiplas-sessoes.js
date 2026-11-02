import data from './arquivo-teste/rotina_exemplo.json' with { type: 'json'};

const eventos = data.eventos;

const sessao02 = eventos.filter(evento => evento.sessao_id === 's-0002');

let duracaoTotal = 0;
let inicio = null;

for (const sessao of sessao02) {
    const momento = new Date(sessao.timestamp_utc);

    if (sessao.tipo === 'sessao_iniciada' || sessao.tipo === 'sessao_retomada') {
        inicio = momento;
    } else if (sessao.tipo === 'sessao_pausada' || sessao.tipo === 'sessao_finalizada') {
        duracaoTotal += momento - inicio;
    }
}

console.log(duracaoTotal / 60000);

// para cada evento
// se evento = evento iniciado ou evento retomado
// evento = inicio
// se evento = evento pausado ou evento finalizado
// evento = fim
// duracao = fim - inicio
// else -> continue
// eventototal = duracao.append