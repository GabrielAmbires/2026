const produtos = {
  racao: {
    titulo: 'Ração',
    tag: 'Nutrição completa',
    imagem: 'Produtos img/racao.png',
    alt: 'Pacote de ração para pets',
    descricao: 'Ração premium para cães e gatos, com ingredientes selecionados para uma rotina mais saudável e saborosa.',
    beneficios: ['Ingredientes selecionados', 'Nutrientes balanceados', 'Ideal para o dia a dia']
  },
  coleiras: {
    titulo: 'Coleiras',
    tag: 'Passeios com estilo',
    imagem: 'Produtos img/coleiras.png',
    alt: 'Coleiras para pets',
    descricao: 'Coleiras resistentes e confortáveis, feitas para deixar os passeios mais seguros sem perder o visual moderno.',
    beneficios: ['Material resistente', 'Ajuste confortável', 'Cores modernas']
  },
  brinquedos: {
    titulo: 'Brinquedos',
    tag: 'Diversão e estímulo',
    imagem: 'Produtos img/brinquedo.png',
    alt: 'Brinquedo para pets',
    descricao: 'Brinquedos para estimular a curiosidade, o movimento e a diversão dos pets em todos os momentos.',
    beneficios: ['Estimula a atividade', 'Ajuda a gastar energia', 'Mais interação com seu pet']
  },
  higiene: {
    titulo: 'Higiene',
    tag: 'Cuidado diário',
    imagem: 'Produtos img/tapete.png',
    alt: 'Tapete higiênico para pets',
    descricao: 'Itens de higiene para manter a casa organizada e seu pet sempre limpo, confortável e bem cuidado.',
    beneficios: ['Prático para a rotina', 'Ajuda na limpeza da casa', 'Conforto para o pet']
  }
};

const params = new URLSearchParams(window.location.search);
const produtoSelecionado = produtos[params.get('produto')] || produtos.racao;

document.title = `${produtoSelecionado.titulo} - Patas e Companhia`;
document.getElementById('product-title').textContent = produtoSelecionado.titulo;
document.getElementById('product-name').textContent = produtoSelecionado.titulo;
document.getElementById('product-tag').textContent = produtoSelecionado.tag;
document.getElementById('product-description').textContent = produtoSelecionado.descricao;

const productImage = document.getElementById('product-image');
productImage.src = produtoSelecionado.imagem;
productImage.alt = produtoSelecionado.alt;

const productBenefits = document.getElementById('product-benefits');
productBenefits.innerHTML = '';

produtoSelecionado.beneficios.forEach((beneficio) => {
  const item = document.createElement('span');
  item.textContent = beneficio;
  productBenefits.appendChild(item);
});
