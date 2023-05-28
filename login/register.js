function change_theme() {
    const btn = document.getElementById('theme');
    const body = document.querySelector('body');
    // const foot = document.querySelector('footer');
    // const sec2 = document.getElementById('sec2');
    // const prog = document.getElementById('prog');
    // const form1 = document.getElementById('form');
    // const left = document.getElementById('left_box');
    body.classList.toggle('active');
    // foot.classList.toggle('active');
    // sec2.classList.toggle('active');
    // prog.classList.toggle('active');
    // form1.classList.toggle('active');
    // left.classList.toggle('active');
    if (btn.innerHTML == 'Dark')
        btn.innerHTML = 'Light';
    else
        btn.innerHTML = 'Dark';
}