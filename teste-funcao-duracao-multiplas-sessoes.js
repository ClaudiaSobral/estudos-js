import data from './arquivo-teste/rotina_exemplo.json' with { type: 'json'};

function minutosAtivos(dados, sessaoId){
    const eventosDaSessao = dados.eventos
    .filter(evento => evento.sessao_id === sessaoId)
    .sort((a,b) => new Date(a.timestamp_utc) - new Date(b.timestamp_utc));
    
    const finalizada = eventosDaSessao.some(evento => evento.tipo === 'sessao_finalizada');
    if (!finalizada) {
        return null;
    }

    let totalMin = 0;
    let inicioDoTrecho = null;
    
    for (const evento of eventosDaSessao) {
        const momento = new Date(evento.timestamp_utc);
    
        if (evento.tipo === 'sessao_iniciada' || evento.tipo === 'sessao_retomada') {
            inicioDoTrecho = momento;
        } else if (evento.tipo === 'sessao_pausada' || evento.tipo === 'sessao_finalizada') {
            totalMin += momento - inicioDoTrecho;
        }
    }
    
    return totalMin / 60000;
}

console.log(minutosAtivos(data, 's-0001'));