//mostrar menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}

//segunda data pesquisa
document.addEventListener("DOMContentLoaded", function () {
    alternar();
});
function alternar() {
    const checkbox = document.getElementById("check");
    const periodo = document.querySelector("periodo");
    periodo.style.display = "none";
    if (checkbox.checked) {
        periodo.style.display = "flex";
    } else {
        periodo.style.display = "none";
    }
}

//reload
//window.location.reload()

