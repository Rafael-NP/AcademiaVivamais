let nome = document.getElementById("nome")

document.getElementById("button").addEventListener("click",function(){
    location.href= "menu.html"
    alert(`Olá, ${nome.value}! Sua inscrição foi bem sucedida.`)
})