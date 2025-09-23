const exercicios = { 
    ombro: [
        "img/ombro/ARNOLD.gif",
        "img/ombro/ABDUÇÃO DE OMBRO TOTAL.gif",
        "img/ombro/ARTICULADO.gif",
        "img/ombro/CRUCIFIXO INVERSO EM PÉ.gif",
        "img/ombro/CRUCIFIXO INVERSO NA POLIA.gif",
        "img/ombro/CRUCIFIXO INVERSO NO CROSS.gif",
        "img/ombro/CRUCIFIXO INVERSO NO PECK DECK.gif",
        "img/ombro/CRUCIFIXO INVERTIDO INCLINADO.gif",
        "img/ombro/DESENVOLVIMENTO ALTERNADO.gif",
        "img/ombro/DESENVOLVIMENTO BARRA GUIADA SENTADO.gif",
        "img/ombro/DESENVOLVIMENTO BARRA.gif",
        "img/ombro/DESENVOLVIMENTO COM HALTER.gif",
        "img/ombro/DESENVOLVIMENTO MAQUINA.gif",
        "img/ombro/DESENVOLVIMENTO POR TRÁS BARRA.gif",
        "img/ombro/DESENVOLVIMENTO SENTADO FRONT.gif",
        "img/ombro/ELEVAÇÃO FRONTAL COM BARRA.gif",
        "img/ombro/ELEVAÇÃO FRONTAL UNILATERAL.gif",
        "img/ombro/ELEVAÇÃO LATERAL COM ISOMETRIA.gif",
        "img/ombro/ELEVAÇÃO LATERAL FAIXA.gif",
        "img/ombro/ELEVAÇÃO LATERAL UNI POLIA BAIXA.gif",
        "img/ombro/ELEVAÇÃO LATERAL.gif",
        "img/ombro/HIPEREXTENSÃO DE OMBRO.gif",
        "img/ombro/INVERSO UNILATERAL.gif",
        "img/ombro/MANGUITO ROTEADOR EXTERNO.gif",
        "img/ombro/MANGUITO ROTEADOR.gif",
        "img/ombro/PECK DECK.gif",
        "img/ombro/REMADA ALTA CROSS.gif",
        "img/ombro/ROTAÇÃO EXTERNA COM ABDUÇÃO DE OMBRO.gif",
        "img/ombro/ROTAÇÃO EXTERNA OMBRO.gif",
        
    ],

    costas: [
        "img/costas/PUXADA ARTICULADA.gif",
        "img/costas/BARRA FIXA SUPINADA.gif",
        "img/costas/CRUCIFIXO INVERSO COM FAIXA.gif",
        "img/costas/CRUCIFIXO INVERSO COM HALTERES.gif",
        "img/costas/CRUCIFIXO INVERSO NO VOADOR.gif",
        "img/costas/CRUCIFIXO INVERSO.gif",
        "img/costas/CRUCIFIXO INVERTIDO INCLINADO.gif",
        "img/costas/EXTENSÃO LOMBAR.gif",
        "img/costas/FLEXÃO DO TRONCO COM ROTAÇÃO.gif",
        "img/costas/INVERSO EMPÉ.gif",
        "img/costas/INVERSO NO CROSS.gif",
        "img/costas/PULL DOWN COM CORDA.gif",
        "img/costas/PULLEY COSTAS.gif",
        "img/costas/PULLEY FECHADO.gif",
        "img/costas/PULLEY FRENTE.gif",
        "img/costas/PUXADA ARTICULADA.gif",
        "img/costas/PUXADA GRAVITON.gif",
        "img/costas/REMADA ALTA BARRA GUIADA.gif",
        "img/costas/REMADA ALTA COM BARRA.gif",
        "img/costas/REMADA ALTA COM CORDA.gif",
        "img/costas/REMADA ARTICULADA NEUTRA.gif",
        "img/costas/REMADA ARTICULADA PRONADA.gif",
        "img/costas/REMADA BAIXA NEUTRA.gif",
        "img/costas/REMADA BAIXA PRONADA.gif",
        "img/costas/REMADA BAIXA SUPINADA.gif",
        "img/costas/REMADA CAVALINHO BARRA.gif",
        "img/costas/REMADA CAVALINHO MAQUINA.gif",
        "img/costas/REMADA CURVADA BARRA.gif",
        "img/costas/REMADA CURVADA HALTER.gif",
        "img/costas/REMADA HAMMMER.gif",
        "img/costas/REMADA POLIA ALTA UNILATERAL.gif",
        "img/costas/ROSCA UNILATERAL POLIA ALTA.gif",
        
    ],
    peito: [
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
        "img/costas/.gif",
    ],
};

function mostrarExercicio(grupo) {
    const galeria = document.getElementById("galeria");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");

    galeria.innerHTML = ""; // Limpa antes

    if (exercicios[grupo]) {
        exercicios[grupo].forEach(src => {
            let img = document.createElement("img");
            img.src = src;
            img.alt = grupo;
            img.style.width = "200px";
            img.style.margin = "10px";
            img.style.cursor = "pointer";

            // Abre no modal
            img.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImg.src = src;
            });

            galeria.appendChild(img);
        });
    }

    // Fechar modal ao clicar nele
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
