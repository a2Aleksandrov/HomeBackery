document.querySelector('.product').addEventListener('input', isValid);

function isValid(e) {
    e.preventDefault();
    if (e.target.className == 'qty') {
        if (Number(e.target.value) <= 0 && e.target.value != '') {
            e.target.parentElement.parentElement.parentElement.querySelector('#validate').style.display = 'inline';
            e.target.parentElement.parentElement.lastElementChild.style.display = 'none';
        } else {
            e.target.parentElement.parentElement.parentElement.querySelector('#validate').style.display = 'none';
            e.target.parentElement.parentElement.lastElementChild.style.display = '';
        }
    }
}