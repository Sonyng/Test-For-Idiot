var buttton = document.getElementById("SIM")
var buttton2 = document.getElementById("NAO")

buttton.onclick = function() {
    alert("EU SABIA!!!")
}

buttton2.addEventListener("mouseover", function() {

   eixoX = (Math.floor(Math.random() * 90))
   eixoY = (Math.floor(Math.random() * 90))
   stringX = eixoX.toString()+ "%"
   stringY = eixoY.toString()+ "%"


this.style.top = stringX
this.style.left = stringY

})
