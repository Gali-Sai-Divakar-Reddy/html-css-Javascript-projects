let count = 0

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// console.log(btns)
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const list = e.currentTarget.classList
        if (list.contains("decrease")){
            count--;
        }
        else if (list.contains("increase")){
            count++;
        }
        else{
            count = 0
        }
        if (count > 0){
            value.style.color = "green";
        }
        else if (count < 0){
            value.style.color = "red"
        }
        else if (count === 0){
            value.style.color = "#000"
        }
        value.textContent = count
    })
});

