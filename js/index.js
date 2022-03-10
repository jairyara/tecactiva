const btn = document.getElementById('menu-btn');

btn.addEventListener('click', async () => {
    const module = await import('./header.js');
    module.activeMenu();
});

const edit = document.getElementById('edit');
const save = document.getElementById('save');

edit.addEventListener('click', async () => {
    const module = await import('./showHide.js');
    module.showHide();
});

save.addEventListener('click', async () => {
    const module = await import('./showHide.js');
    module.showHide();
})