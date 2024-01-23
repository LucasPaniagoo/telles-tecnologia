  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 6000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    
  });
  const boxSolucoes = document.querySelectorAll('.solucoes__box__servicos')
  const paragrafo = document.createElement('p');
  paragrafo.id = 'textoSelecionado';

  boxSolucoes.forEach(span => span.addEventListener('mouseenter', () => 
  {
    esconderLogo(span);
  }));
  boxSolucoes.forEach(span => span.addEventListener('mouseleave', () =>
  {
    voltarLogo(span);
  }));

  const texto = 
  {
  span_solucao01: 'Terceirização de TI',
  span_solucao02: 'Suporte Remoto',
  span_solucao03: 'Gerenciamento de Servidores',
  span_solucao04: 'Montagem e Manutenção de Computadores'
  }

  function esconderLogo(nomeCampo) 
  {
  nomeCampo.classList.add('solucoes-hover')
  nomeCampo.childNodes[1].classList.add('esconder');
  paragrafo.innerText = texto[nomeCampo.id];
  paragrafo.classList.add('solucoes__box__servicos__texto');
  nomeCampo.append(paragrafo);
  }

  function voltarLogo(nomeCampo)
  {
  nomeCampo.classList.remove('solucoes-hover');
  nomeCampo.childNodes[1].classList.remove('esconder');
  paragrafo.remove()
  }