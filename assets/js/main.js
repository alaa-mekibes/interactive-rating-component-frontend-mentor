class inputVerification {
    constructor() {
        this.selectedbtn = document.querySelectorAll(".choosing .numbers label");
        this.submit = document.querySelector(".submit button");
        this.selected = false;
        this.numberSelected;
    }
    chooseBtn() {
        this.selectedbtn.forEach(el => {
            el.addEventListener("click", _ => {
                this.selectedbtn.forEach(btn => {btn.classList.remove("selected"); btn.setAttribute("aria-checked", "false");});
                el.classList.add("selected");
                el.setAttribute("aria-checked", "true");
                this.selected = true;
                this.numberSelected = el.textContent;
            })});
    }
    submitNumber() {
        const errorMSG = document.querySelector(".error");
        const boxContainer = document.querySelector(".container");
        this.submit.addEventListener("click", _ => {
            if(this.selected === false) {
                errorMSG.textContent = "You must select one number!";
                errorMSG.setAttribute("aria-live", "assertive");
                setTimeout(() => {
                if(errorMSG) errorMSG.textContent = "";
                }, 3000);
                return;
            }
            else {
                boxContainer.innerHTML = `
            <div class="thanks" aria-hidden="true">
                <img src="assets/images/illustration-thank-you.svg" alt="">
                </div>
                <p class="whatSelected">You selected ${this.numberSelected} out of 5</p>
            <section>
            <h1 class="thanks">Thank you!</h1>
            <p class="message">We appreciate you taking the time to give a rating. If you ever need more support, 
                don't hesitate to get in touch!</p>
            </section>
                `;
                boxContainer.style.cssText = "text-align: center; animation: fade-in 1s";
            }
        })
    }
}

// main
inp = new inputVerification();
inp.chooseBtn();
inp.submitNumber();