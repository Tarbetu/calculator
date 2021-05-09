function appendTheNum(e) {
    const num = e.explicitOriginalTarget.innerText; 
    let shownValue = document.querySelector("#shownValue");
    if (num == "C") {
        shownValue.value = 0;
    } else if (num == "") {
        if (!shownValue.value.includes(".")) {
            shownValue.value = shownValue.value + ".";
        }
    } else if (shownValue.value == 0) {
        shownValue.value = num;
    } else {
        shownValue.value = shownValue.value + num;
    }
}

function prepareNumbers(container) {
    const numbers = Array.from([...Array(9)].keys()).reverse().map((i) => ++i);
    numbers.push("C");
    numbers.push("0");
    numbers.push(".");
    numbers.forEach((num) => {
        let button = document.createElement("button");
        button.classList.add("number");
        button.classList.add("button");
        button.textContent = num;
        if (num == ".") {
            button.innerHTML = `<i class="fas fa-circle"></i>`;
            button.style["font-size"] = "3vh";
        }
        button.addEventListener("click",appendTheNum);
        container.appendChild(button);
    });
}

const container = document.querySelector("#numbers"); 
prepareNumbers(container);

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operation, a, b) {
    return operation(a,b);
}
