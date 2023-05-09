let modal = document.querySelector('#modalNovaSessao')
let novaSessao = document.querySelector('#novaSessao')
let fatoRelevante = document.querySelector('#fatoRelevante')
let modal_2 = document.querySelector('#modal_2')
let voltarListagem = document.querySelector('#retornarListagem')
let mais = document.querySelector('#mais')
let btnClose = document.querySelector('#btnClose')
// function abrirSessao() {
//     modal.classList.remove('d-none')
// } 


novaSessao.addEventListener('click',()=>{
    modal.classList.remove('d-none')


})

fatoRelevante.addEventListener('click',()=>{
    modal_2.classList.remove('d-none')

})

voltarListagem.addEventListener('click' ,(click)=>{
    window.location.replace('../Tela4/tela4.listaPacientesComModal.html')
})

btnLeiaMais.addEventListener('click',(click)=>{
    window.location.replace('../Tela6/tela6.sess%C3%A3o.html')
})

function fecharModalNovaSessao() {
    let modalNovaSessao = document.querySelector('#modalNovaSessao')
    modalNovaSessao.classList.add('d-none')
}

function abrirModalCriado() {
    let modalConteudo = document.querySelector('#modalCriado') 
    modalConteudo.classList.remove('d-none')

    fecharModalNovaSessao()
    fecharModalFatosRelevantes()
}

function fecharModalFatosRelevantes () {
    let modalFatosRelevantes = document.querySelector('#modal_2')
    modalFatosRelevantes.classList.add('d-none')
}
