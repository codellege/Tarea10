let h = document.getElementById('ham');
let p = document.getElementById('price');
let n = document.getElementById('number');
let a = document.getElementById('alert');
let currHam = '';
let currPay = '';
let currNum = 0;

disabler("");


p.addEventListener('change', calculate)
h.addEventListener('change', calculate)
n.addEventListener('keyup', validar)

function validar(e) {

    currNum = Number(e.target.value);

    disabler(e.target.value);

    calculate();

}

function disabler(value) {
    if (value == "") {
        h.disabled = true;
        p.disabled = true;
    } else {
        h.disabled = false;
        p.disabled = false;
    }
}

function calculate() {

    
    currHam = h.value;
    currPay = p.value;

    let fcost = 0;

    switch (currHam) {
        case 'sen':
            fcost = 20 * currNum;
            break;
        case 'dob':
            fcost = 25 * currNum;
            break;
        case 'tri':
            fcost = 28 * currNum;
            break;
    }

    switch (currPay) {
        case 'tar':
        fcost *= 1.05;
            break;
        case 'din':
        fcost = fcost;
            break;
    }

    a.innerHTML = `<div class="alert bg-dark" role="alert">
            <strong class="text-white">Total: ${fcost.toFixed(2)}</strong>
        </div>`

}