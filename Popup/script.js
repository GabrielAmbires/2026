function abrirPopUp() {
    document.getElementById("popup").style.display = "block";
}
function fecharPopUp() {
    document.getElementById("popup").style.display = "none";
}
function abrirPopUpC() {
    document.getElementById("popupC").style.display = "block";
}
function fecharPopUpC() {
    document.getElementById("popupC").style.display = "none";
}
function abrirPopUpI() {
    document.getElementById("popupI").style.display = "block";
}
function fecharPopUpI() {
    document.getElementById("popupI").style.display = "none";
}
function abrirPopUpCR() {
    document.getElementById("popupCR").style.display = "block";
}
function fecharPopUpCR() {
    document.getElementById("popupCR").style.display = "none";
}
function abrirPopUpA() {
    document.getElementById("popupA").style.display = "block";
}
function fecharPopUpA() {
    document.getElementById("popupA").style.display = "none";
}
function abrirPopUpSucesso() {
    document.getElementById("popupSucesso").style.display = "block";
}
function fecharPopUpSucesso() {
    document.getElementById("popupSucesso").style.display = "none";
}
function abrirPopUpErro() {
    document.getElementById("popupErro").style.display = "block";
}
function fecharPopUpErro() {
    document.getElementById("popupErro").style.display = "none";
}
function validarSenha() {
    senhaCorreta = "123";
    senha = document.getElementById("senhaInput").value;
    document.getElementById("popupA").style.display = "none";
    if (senha === senhaCorreta) {
        abrirPopUpSucesso();
    } else {
        abrirPopUpErro();
    }
}
