function atualizarRelogio() {
    // obtém a hora atual
    const data = new Date();

    // formata a hora no formato HH:MM:SS
    const hora = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');
    const horaFormatada = `${hora}:${minutos}:${segundos}`;

    // atualiza o conteúdo do elemento h1 com a hora formatada
    document.querySelector('h1').textContent = horaFormatada;
  }

  // atualiza o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);