let account = document.getElementById('data-account');
let edit = document.getElementById('form-edit-account');

export const showHide = () => {
    if (!edit.classList.contains('show')) {
        edit.classList.add('show');
        account.classList.add('hide');
    } else {
        edit.classList.add('hide');
        account.classList.add('show');
    }
}