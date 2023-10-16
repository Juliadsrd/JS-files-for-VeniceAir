const elementoAeroportos = document.querySelector('#aeroportos')

async function consultaAeroportos(){
  const retorno = await fetch('http://localhost:3000/listarAeroportos') //reconhecer se é a mesma
  const aeroportos = retorno.json()
  console.log(aeroportos)
}
consultaAeroportos()


const botaoEnviar = document.querySelector('#btncadastro')
btnSubimit.addEventListener('click',()=>{
  //pegar os dados e enviar para api
  const aeroportos=getDadosForm()
  enviarParaApi(aeroportos)

})
function getDadosForm(){
  const getAeroporto=document.querySelector('#aeroporto')
  const getCidade=document.querySelector('#cidade')
  const getPais=document.querySelector('#pais')
  if (getAeroporto.value.trim() === "" || getCidade.value.trim() === "" || getPais.value.trim() === "" ) {
    console.log('Null');
    return;
  }
  //recebendo valor para back
  const aeroportos={
    aeroporto:getAeroporto.value,
    cidade:getCidade.value,
    pais:getPais.value
  }
  return aeroportos
}

async function enviarParaApi(aeroportos){
  try{
 const resposta = await fetch('http://localhost:3000/inserirAeroporto',{
  //especificar o method
  method: 'PUT',
  //especificando os dados
  headers:{
      Accept: 'application/json',
      'Content-type':'application/json'
  },
  body: JSON.stringify(aeroportos)
 })
  if (resposta.status === 201){
    limparCampos()
  }else{
    console.log('ERRO AO ADICIONAR. TENTE NOVAMENTE.')
  }
}catch(erro){
  console.error(erro)
}
}
function limparCampos(){
  document.querySelector('#aeroporto').value='ok'
  document.querySelector('#cidade').value='ok'
  document.querySelector('#pais').value='ok'
}