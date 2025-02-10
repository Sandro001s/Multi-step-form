const submit = document.getElementById("submit");
const nameinp = document.getElementById("name");
const emailinp = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const workspace = document.querySelector(".workspace");
const planDiv = document.querySelector(".plandiv");
const span = document.querySelector(".firstspan");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");
const span4 = document.querySelector(".span4");
const plans = document.querySelectorAll(".plans");
const addonsdiv = document.querySelector(".addonsdiv");

let countPage = 1;

submit.addEventListener("click", () => {
    let isValid = true;
    
    if (emailinp.value === "" || !emailinp.value.includes("@")) {
        emailinp.classList.add("error");
        isValid = false;
    } else {
        emailinp.classList.remove("error");
    }

    if (nameinp.value === "") {
        nameinp.classList.add("error");
        isValid = false;
    } else {
        nameinp.classList.remove("error");
    }

    if (phoneNumber.value === "") {
        phoneNumber.classList.add("error");
        isValid = false;
    } else {
        phoneNumber.classList.remove("error");
    }

    if (isValid) {
        countPage++;
        workspace.style.display = "none";
        planDiv.style.display = "block";

        [span, span2, span3, span4].forEach(span => span.classList.remove("firstspan"));

        switch (countPage) {
            case 1:
                span.classList.add("firstspan");
                break;
            case 2:
                span2.classList.add("firstspan");
                break;
            case 3:
                span3.classList.add("firstspan");
                break;
            case 4:
                span4.classList.add("firstspan");
                break;
        }
        if(countPage === 3){
            planDiv.style.display = "none";
            addonsdiv.style.display = "block";

        }
        if(countPage === 4){
            addonsdiv.style.display = "none"
            planDiv.style.display = "none";
        }
    }                                        
});


plans.forEach(plan => {
    plan.addEventListener("click", () => {
        plans.forEach(p => p.style.border = "1px solid rgba(128, 128, 128, 0.568)");
        plan.style.border = "2px solid hsl(270, 100.00%, 28.40%)";
    });
});


const onCheckboxes = document.querySelectorAll(".onscheckbox");

onCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkbox.parentElement.style.backgroundColor = "#F5F5F5"; // Purple background
            checkbox.parentElement.style.border = "2px solid #4635B1"; // Purple border
        } else {
            checkbox.parentElement.style.backgroundColor = "white"; // Reset background
            checkbox.parentElement.style.border = "1px solid rgba(128, 128, 128, 0.568)"; // Reset border
        }
    });
});
