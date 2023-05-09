const botaoEntrar = document.querySelector('#bottonEntrar')
const botaoCadastro = document.querySelector('#btnCadastro')


botaoEntrar.addEventListener('click',(submit)=>{
    submit.preventDefault()
    window.location.replace("../Tela4/tela4.listaPacientesComModal.html")
    
})

botaoCadastro.addEventListener('click',(submit)=>{
    submit.preventDefault()
    window.location.replace("../Tela2/tela2.Cadastro.html.html")
})


