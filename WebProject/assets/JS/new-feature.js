//Toggle Drobdown sub-info
let accordionBtn = document.querySelectorAll('#accordion-btn');
let accordionDropdown = document.querySelectorAll('#accordion-dropdown');    let plusIcon = document.querySelectorAll('#plus-icon');
let closeIcon = document.querySelectorAll('#close-icon');
accordionBtn.forEach((btn, i) => {      
    btn.addEventListener('click', () => {
    accordionDropdown[i].classList.toggle('max-h-[400px]');        
    plusIcon[i].classList.toggle('hidden');
    closeIcon[i].classList.toggle('hidden');      
    });
});  ''




