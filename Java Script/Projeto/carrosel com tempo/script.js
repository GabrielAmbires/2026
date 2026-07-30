document.addEventListener('DOMContentLoaded', function () {
    const produtoCarrossel = document.querySelector('.carrossel.produto');
    const lancamentosCarrossel = document.querySelector('.carrossel.lancamentos');

    if (!produtoCarrossel || !lancamentosCarrossel) {
        return;
    }

    const produtoSlides = Array.from(produtoCarrossel.querySelectorAll('.slides .img'));
    const lancamentosSlides = Array.from(lancamentosCarrossel.querySelectorAll('.slides .img'));
    let produtoIndex = 0;
    let lancamentosIndex = 0;
    const produtoNome = document.querySelector('.produto-info h3');
    const produtoPreco = document.querySelector('.produto-info .preco');
    const botaoAnterior = produtoCarrossel.querySelector('.prev');
    const botaoProximo = produtoCarrossel.querySelector('.next');
    const intervaloLancamentos = parseInt(lancamentosCarrossel.dataset.interval, 10) || 3000;
    let lancamentosTimer = null;

    function atualizarProduto() {
        produtoSlides.forEach(function (item, position) {
            if (position === produtoIndex) {
                item.classList.add('ativa');
                produtoNome.textContent = item.dataset.name || produtoNome.textContent;
                produtoPreco.textContent = item.dataset.price ? 'R$ ' + item.dataset.price : produtoPreco.textContent;
            } else {
                item.classList.remove('ativa');
            }
        });
    }

    function atualizarLancamentos() {
        lancamentosSlides.forEach(function (item, position) {
            if (position === lancamentosIndex) {
                item.classList.add('ativa');
            } else {
                item.classList.remove('ativa');
            }
        });
    }

    function irParaProdutoAnterior() {
        produtoIndex = produtoIndex - 1;
        if (produtoIndex < 0) {
            produtoIndex = produtoSlides.length - 1;
        }
        atualizarProduto();
    }

    function irParaProdutoProximo() {
        produtoIndex = produtoIndex + 1;
        if (produtoIndex >= produtoSlides.length) {
            produtoIndex = 0;
        }
        atualizarProduto();
    }

    function mudarLancamentos() {
        lancamentosIndex = lancamentosIndex + 1;
        if (lancamentosIndex >= lancamentosSlides.length) {
            lancamentosIndex = 0;
        }
        atualizarLancamentos();
    }

    atualizarProduto();
    atualizarLancamentos();

    if (botaoAnterior) {
        botaoAnterior.addEventListener('click', irParaProdutoAnterior);
    }

    if (botaoProximo) {
        botaoProximo.addEventListener('click', irParaProdutoProximo);
    }

    if (intervaloLancamentos > 0 && lancamentosSlides.length > 1) {
        lancamentosTimer = setInterval(mudarLancamentos, intervaloLancamentos);

        lancamentosCarrossel.addEventListener('mouseenter', function () {
            if (lancamentosTimer !== null) {
                clearInterval(lancamentosTimer);
                lancamentosTimer = null;
            }
        });

        lancamentosCarrossel.addEventListener('mouseleave', function () {
            if (lancamentosTimer === null) {
                lancamentosTimer = setInterval(mudarLancamentos, intervaloLancamentos);
            }
        });
    }
});
