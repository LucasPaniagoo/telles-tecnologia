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
  const imagem = document.getElementById('imagem01')

  span01.addEventListener('mouseover', () =>
  {
    esconderLogo(span01)
  })
  span01.addEventListener('mouseout', () =>
  {
    voltarLogo(span01)
  })

  function esconderLogo(nomeCampo) 
  {
    nomeCampo.classList.add('solucoes-hover')
    // nomeCampo.childNodes[1].classList.add('esconder');
    imagem.classList.add('esconder');
    const p = document.createElement('p');
    p.id = 'textonovo'
    p.innerText = 'Acesso Remoto';
    p.classList.add('solucoes__box__servicos__texto')
    nomeCampo.append(p);
  }

  function voltarLogo(nomeCampo)
  {
    nomeCampo.classList.remove('solucoes-hover')
    nomeCampo.childNodes[1].classList.remove('esconder')
    const ptexto = document.getElementById('textonovo').remove()
    
  }
  function esconde() {
    imagem.classList.add('esconder')
  }