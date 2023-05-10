exibirPacientes()
let modal = document.querySelector('#modal1')
let novoCadastro = document.querySelector('#novoCadastro')
let formulario = document.querySelector('#formulario_criar')
let modal2 = document.querySelector('#modal2')
let modalEditar= document.querySelector('#modalEditar')


novoCadastro.addEventListener('click',()=>{
    modal.classList.remove('d-none')
 
})


let fechar = document.querySelector('#fechar')

fechar.addEventListener('click',()=>{
    modal.classList.add('d-none')

})

// let abrirModalEditar = document.querySelector('#editarPacientes')

// abrirModalEditar.addEventListener('click,',()=> {
//     modalEditar.classList.remove('d-none')
// })

formulario.addEventListener('submit',(submit)=>{
    modal.classList.add('d-none')
    submit.preventDefault()



let inputCPF = document.querySelector('#CPF').value
let inputName = document.querySelector('#nome').value
let inputNascimento = document.querySelector('#nascimento').value
let inputEmail = document.querySelector('#email').value
let inputSexo = document.querySelector('#sexo').value
let inputNacionalidade = document.querySelector('#nacionalidade').value
let inputNaturalidade = document.querySelector('#naturalidade').value
let inputProfissão = document.querySelector('#profissão').value
let inputEscolaridade = document.querySelector('#escolaridade').value
let inputestadoCivil = document.querySelector('#estadoCivil').value
let inputMãe= document.querySelector('#mãe').value
let inputPai = document.querySelector('#pai').value

let novoPaciente = {
    cpf: inputCPF,
    nome: inputName,
    nascimento: inputNascimento,
    email: inputEmail,
    sexo: inputSexo,
    nacionalidade: inputNacionalidade, 
    naturalidade: inputNaturalidade,
    profissão: inputProfissão,
    escolaridade: inputEscolaridade,
    estado_civil: inputestadoCivil, 
    mãe: inputMãe,
    pai: inputPai

}
enviarDados(novoPaciente)
exibirPacientes()
})

let criar = document.querySelector('#formulario_criar')

criar.addEventListener('submit', (submit)=>{
    modal2.classList.remove('d-none')
    submit.preventDefault()
})

let ok = document.querySelector('#botão_ok')

ok.addEventListener('click',(submit)=>{
    modal2.classList.add('d-none')
    submit.preventDefault()

    
})


function prontuario(){
    window.location.replace("../Tela5/tela5.prontuarioModal.html")
}

async function receberDados(){
    let armazenamentoApi = await fetch('https://projetofinalarnia.onrender.com/pacientes')
    let dadosAtualizados = await armazenamentoApi.json()
    
    return(dadosAtualizados)

}

async function enviarDados(objeto){
    await fetch('https://projetofinalarnia.onrender.com/pacientes', {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    });
}

//criar função assincrona com metodo DELETE, passasndo o ID do paciente como parametro.

//apos deletar, chamar novamente o exibirPacientes ainda dentro da função.



async function exibirPacientes() {
    let dadosRecebidos = await receberDados()
    let pacientesArmazenados = document.querySelector('#conteudo')

    pacientesArmazenados.innerHTML = ''
    dadosRecebidos.forEach((paciente) => {
        pacientesArmazenados.innerHTML += `
        <div class="row border border-top-0">
            <div class="row col-md-2">${paciente.id} </div>
            <div class="row col-md-4 border-start">${paciente.nome}</div>
            <div class="row col-md-4 border-start">${paciente.cpf}</div>
            <div class="row col-md-2 border-start"> <button onClick="prontuario()" class="btn col-4 d-flex justify-content-center" type="submit"> <img src="../definitivos/img/novaSessão.png" alt="" class=""> </button> 
            <button id="editarPacientes" onclick="editarPacientes(${paciente.id})" class="btn col-4 d-flex justify-content-center"> <img src="../definitivos/img/editar.png" alt="" class="">  </button> 
            <button onclick="excluirPacientes(${paciente.id})" class="btn col-4 d-flex justify-content-center"> <img src="../definitivos/img/lixeira.png" alt="" class=""> </button> </div> 
        </div>`
    });

    
}

async function excluirPacientes(id) {
    
   await fetch  (`https://projetofinalarnia.onrender.com/pacientes/${id}`,{
    method: "DELETE"
   })
   exibirPacientes()
    
}



async function editarPacientes(id) {

        let pacientesArmazenados = await fetch (`https://projetofinalarnia.onrender.com/pacientes?id=${id}`)
        let arrayPacientes = await pacientesArmazenados.json()
        let pacientes = arrayPacientes[0]

            document.querySelector('#CPF_one').value = pacientes.cpf
            document.querySelector('#nome_one').value = pacientes.nome
            document.querySelector('#nascimento_one').value = pacientes.nascimento
            document.querySelector('#email_one').value = pacientes.email
            document.querySelector('#sexo_one').value = pacientes.sexo
            document.querySelector('#nacionalidade_one').value = pacientes.nacionalidade
            document.querySelector('#naturalidade_one').value = pacientes.naturalidade
            document.querySelector('#profissao_one').value = pacientes.profissão
            document.querySelector('#escolaridade_one').value = pacientes.escolaridade
            document.querySelector('#estadoCivil_one').value = pacientes.estado_civil
            document.querySelector('#mae_one').value = pacientes.mãe
            document.querySelector('#pai_one').value = pacientes.pai

            let abrirModalEditado = document.querySelector('#modalEditar')
            abrirModalEditado.classList.remove('d-none')

        let formularioEditar = document.querySelector('#formulario_editar')
        formularioEditar.addEventListener("submit", (submit)=> {
            submit.preventDefault()

        let cpf_paciente = document.querySelector('#CPF_one').value 
        let nome_paciente  = document.querySelector('#nome_one').value
        let nascimento_paciente = document.querySelector('#nascimento_one').value 
        let email_paciente = document.querySelector('#email_one').value 
        let sexo_paciente = document.querySelector('#sexo_one').value 
        let nacionalidade_paciente = document.querySelector('#nacionalidade_one').value 
        let naturalidade_paciente = document.querySelector('#naturalidade_one').value 
        let profissao_paciente = document.querySelector('#profissao_one').value 
        let escolaridade_paciente = document.querySelector('#escolaridade_one').value 
        let estadoCivil_paciente = document.querySelector('#estadoCivil_one').value
        let mae_paciente = document.querySelector('#mae_one').value 
        let pai_paciente = document.querySelector('#pai_one').value 

        let pacienteEditado = {
            cpf: cpf_paciente,
            nome: nome_paciente,
            nascimento: nascimento_paciente,
            email: email_paciente,
            sexo: sexo_paciente,
            nacionalidade: nacionalidade_paciente, 
            naturalidade: naturalidade_paciente,
            profissão: profissao_paciente,
            escolaridade: escolaridade_paciente,
            estado_civil: estadoCivil_paciente, 
            mãe: mae_paciente,
            pai: pai_paciente
        
        }

        editarPaciente(pacienteEditado)
        exibirPacientes()

        let abrirModalEditado = document.querySelector('#modalEditar')
        abrirModalEditado.classList.add('d-none')

        })

        async function editarPaciente(objeto){
            await fetch(`https://projetofinalarnia.onrender.com/pacientes/${id}`, {
            method: "PUT",
            headers: {
         'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
         });
        }

        //EVENT LISTINER DO formulario EDITAR, AQUI!!!
 

}


    const abrirEdicao = function(){
        const modal = document.querySelector('#modalEditar')
        modal.classList.remove('d-none')
    }


   async function filter() {
    let filterName = document.querySelector('#inputFilter').value
    let dadosFiltrados = await fetch (`https://projetofinalarnia.onrender.com/pacientes?nome=${filterName}`)
    let dadosConvertidos = await dadosFiltrados.json()
    if (filterName === "") {
        exibirPacientes()
        return
    }

    let pacientesArmazenados = document.querySelector('#conteudo')
    pacientesArmazenados.innerHTML = ''
    dadosConvertidos.forEach((paciente) => {
        pacientesArmazenados.innerHTML += `
        <div class="row border border-top-0">
            <div class="row col-md-2">${paciente.id} </div>
            <div class="row col-md-4 border-start">${paciente.nome}</div>
            <div class="row col-md-4 border-start">${paciente.cpf}</div>
            <div class="row col-md-2 border-start"> <button onClick="prontuario()" class="btn col-4 d-flex justify-content-center" type="submit"> <img src="../definitivos/img/novaSessão.png" alt="" class=""> </button> 
            <button id="editarPacientes" onclick="editarPacientes(${paciente.id})" class="btn col-4 d-flex justify-content-center"> <img src="../definitivos/img/editar.png" alt="" class="">  </button> 
            <button onclick="excluirPacientes(${paciente.id})" class="btn col-4 d-flex justify-content-center"> <img src="../definitivos/img/lixeira.png" alt="" class=""> </button> </div> 
        </div>`
    });

   

   }

    
  














// let inputCPF = querySelector('#CPF').value (dentro do escutador do botão CRIAR)
