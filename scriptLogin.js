

function loginUsuario() {
    
    let senha = window.document.getElementById("senha").value;

        if (senha == "berg") {
            sessionStorage.setItem("logado", "true");  /* Salva o estado de login na sessão */
            window.location.href = "treinos.html";  /* Redireciona para a página de treinos */
        }
        else {
            alert("Senha incorreta!!!")
        }

}












