let btn = document.querySelector('#validateBtn');
let msg = document.querySelector('#validate');
let qty = document.querySelector('.qty').addEventListener('input', isValid);

function isValid(e) {
    e.preventDefault();
    if (Number(e.target.value) <= 0 && e.target.value != '') {
        msg.style.display = 'inline';
        btn.style.display = 'none';
    } else {
        msg.style.display = 'none';
        btn.style.display = '';
    }
}