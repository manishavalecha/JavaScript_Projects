const text = document.getElementById("text")
const input = document.getElementById("input")

input.addEventListener('keypress',(e)=> {
if(e.key==='Enter'){
Welcome(input.value)
}
})


function Welcome(value) {
text.innerHTML ="Hello" +" " +value +",how you doing!!"
input.value=""
}

