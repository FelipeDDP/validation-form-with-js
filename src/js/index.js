const fields = document.querySelectorAll('.field');
const send = document.querySelector('.btn-send');
const mandatory = document.querySelectorAll('.mandatory');

fields.forEach(field => {
    field.addEventListener('input', () => {
        if (field.value.trim() !== "") {
            field.classList.add('filled-in');
            field.classList.remove('not-filled');
            field.nextElementSibling.classList.remove('show');
        } else {
            field.classList.remove('filled-in');
        }
    });
});

send.addEventListener('click', () => {
    fields.forEach(field => {
        if (field.value.trim() === "") {
            field.classList.add('not-filled');
            field.nextElementSibling.classList.add('show');
        }            
    });
});