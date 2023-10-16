const elementoAeronaves = document.querySelector('#aeronaves')

async function consultaAeronaves(){
  const retorno = await fetch('http://localhost:3000/listarAeronaves')
  const aeronaves = retorno.json()
  console.log(aeronaves)
}
consultaAeronaves()


const botaoEnviar = document.querySelector('#btncadastro')
btnSubimit.addEventListener('click',()=>{
  //pegar os dados e enviar para api
  const aeronave=getDadosForm()
  enviarParaApi(aeronaves)

})
function getDadosForm(){
  const getFabricante=document.querySelector('#fabricante')
  const getModelo=document.querySelector('#modelo')
  const getanoFab=document.querySelector('#anoFab')
  const getqtdeAssentos=document.querySelector('#qtdeAssentos')
  if (getFabricante.value.trim() === "" || getModelo.value.trim() === "" || getanoFab.value.trim() === "" || getqtdeAssentos.value.trim() === "") {
    console.log('Null');
    return;
  }
  //recebendo valor para back
  const aeronaves={
    fabricante:getFabricante.value,
    modelo:getModelo.value,
    anoFab:getanoFab.value,
    qtdeAssentos:getqtdeAssentos.value
  }
  return aeronaves
}

async function enviarParaApi(aeronaves){
  try{
 const resposta = await fetch('http://localhost:3000/inserirAeronave',{
  //especificar o method
  method: 'PUT',
  //especificando os dados
  headers:{
      Accept: 'application/json',
      'Content-type':'application/json'
  },
  body: JSON.stringify(aeronaves)
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
  document.querySelector('#fabricante').value='ok'
  document.querySelector('#anoFab').value='ok'
  document.querySelector('#modelo').value='ok'
  document.querySelector('#qtdeAssentos').value='ok'
}