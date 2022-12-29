

const advBtn = document.querySelector("#adviceBtn");
const advMain = document.querySelector("#advMain");
const advId = document.querySelector("#advId")



advBtn.addEventListener("click", () => {
    getAdvice()
});

window.onload = () => {
    getAdvice();
}

function getAdvice() {
    
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        const AdviceObj = adviceData.slip;
        advId.innerHTML = `<p>ADVICE #${AdviceObj.id}</p>`;
        advMain.innerHTML = `<p>"${AdviceObj.advice}"</p>`;
    }).catch(error => {
        console.log(error)
    });

}