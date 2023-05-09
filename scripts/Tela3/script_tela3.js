const botaoProsseguir = document.querySelector ('#bottonProsseguir')

botaoProsseguir.addEventListener('click' ,(submit)=>{
    submit.preventDefault()
    window.location.replace("../Tela4/tela4.listaPacientesComModal.html")

})