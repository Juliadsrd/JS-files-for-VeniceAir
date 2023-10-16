const elementoVoos = document.querySelector('#voos')

async function consultaVoos(){
  const retorno = await fetch('http://localhost:3000/listarVoos') //reconhecida
  const voos = retorno.json()
  console.log(voos)
}
consultaVoos()


const botaoEnviar = document.querySelector('#btncadastro')
btnSubimit.addEventListener('click',()=>{
  //pegar os dados e enviar para api
  const voos =getDadosForm()
  enviarParaApi(voos)

})
function getDadosForm(){
  const getvoo=document.querySelector('#voo')
  const getorigem=document.querySelector('#origem')
  const getdestino=document.querySelector('#destino')
  const getdia=document.querySelector('#dia')
  const gethorario=document.querySelector('#horario')
  const getvalor=document.querySelector('#valor')
  if (getvoo.value.trim() === "" || getorigem.value.trim() === "" || getdestino.value.trim() === "" || getdia.value.trim() === "" || gethorario.value.trim() === "" || getvalor.value.trim() === "" ) {
    console.log('Null');
    return;
  }
  //recebendo valor para back
  const voos={
    voo:getvoo.value,
    origem:getorigem.value,
    destino:getdestino.value,
    dia:getdia.value,
    horario:gethorario.value,
    valor:getvalor.value
  }
  return voos
}

async function enviarParaApi(voos){
  try{
 const resposta = await fetch('http://localhost:3000/inserirVoo',{
  //especificar o method
  method: 'PUT',
  //especificando os dados
  headers:{
      Accept: 'application/json',
      'Content-type':'application/json'
  },
  body: JSON.stringify(voos)
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
  document.querySelector('#voo').value='ok'
  document.querySelector('#origem').value='ok'
  document.querySelector('#destino').value='ok'
  document.querySelector('#dia').value='ok'
  document.querySelector('#horario').value='ok'
  document.querySelector('#valor').value='ok'
}