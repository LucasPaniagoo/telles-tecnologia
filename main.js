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
  const span01 = document.getElementById('span_solucao01');
  const span02 = document.getElementById('span_solucao02');
  const span03 = document.getElementById('span_solucao03');
  const span04 = document.getElementById('span_solucao04');
  const paragrafo = document.createElement('p');
  paragrafo.id = 'textoSelecionado';

  const texto = 
  {
  span_solucao01: 'Terceirização de TI',
  span_solucao02: 'Suporte Remoto',
  span_solucao03: 'Gerenciamento de Servidores',
  span_solucao04: 'Montagem e Manutenção de Computadores'
  }

  span01.addEventListener('mouseenter', () =>
  {
    esconderLogo(span01);
  })
  span01.addEventListener('mouseleave', () =>
  {
    voltarLogo(span01);
  })

  span02.addEventListener('mouseenter', () => 
  {
    esconderLogo(span02);
  })
  span02.addEventListener('mouseleave', () => 
  {
    voltarLogo(span02);
  })
  
  span03.addEventListener('mouseenter', () => 
  {
    esconderLogo(span03);
  })
  span03.addEventListener('mouseleave', () => 
  {
    voltarLogo(span03);
  })

  span04.addEventListener('mouseenter', () => 
  {
    esconderLogo(span04);
  })
  span04.addEventListener('mouseleave', () => 
  {
    voltarLogo(span04)
  })



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