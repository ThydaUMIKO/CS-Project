function openNav() {
    document.getElementById("mySidenav").classList.remove('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-y-hidden');
    
}

function closeNav() {
    document.getElementById("mySidenav").classList.add('hidden');
    document.getElementById('overlay-blur').classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-y-hidden');
    
}

function showDropdown(x){
    if (x === 1){
        let dropdownside = document.getElementById('feature-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 2){
        let dropdownside = document.getElementById('men-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 3){
        let dropdownside = document.getElementById('women-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 4){
        let dropdownside = document.getElementById('kids-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 5){
        let dropdownside = document.getElementById('jordan-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
    if (x === 6){
        let dropdownside = document.getElementById('sale-drop');
        dropdownside.classList.toggle('max-h-[300px]')
    }
}