document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('cadForm');
  const success = document.getElementById('successMsg');

  if(!form) return;

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const quantidade = document.getElementById('quantidade').value;

    if(!nome || !cidade || !celular || quantidade === ''){
      success.textContent = 'Por favor preencha todos os campos.';
      success.style.color = '#c0392b';
      return;
    }

    try{
      const cadastro = { nome, cidade, celular, quantidade: Number(quantidade), data: new Date().toISOString() };
      const lista = JSON.parse(localStorage.getItem('cadastros')||'[]');
      lista.push(cadastro);
      localStorage.setItem('cadastros', JSON.stringify(lista));
    }catch(err){

    }

    success.textContent = 'Cadastro concluído com sucesso! Obrigado.';
    success.style.color = '#1d7c33';

    form.reset();

    setTimeout(function(){ success.textContent = ''; }, 4000);
  });
});