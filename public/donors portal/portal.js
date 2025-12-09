const dropDownEl = document.querySelector('.dropdown');
const dropdownMenuEl = document.querySelector('.dropdown-menu');
const dropDownToggleEl = document.querySelector('.dropdown-toggle');
const hambagerEl = document.querySelector('.navbar-hambager');
const closeEl = document.querySelector('.navbar-close');
const sidebarEl = document.querySelector('.sidebar');

hambagerEl.addEventListener('click', () => {
    showMenu();
});
// close sidebar when close icon is clicked
closeEl.addEventListener('click', () => {
    sidebarEl.style.right = '-250px';
    sidebarEl.style.transition = 'all 0.3s ease-in-out';
    hambagerEl.style.display = 'block';
    closeEl.style.display = 'none'; 
    setTimeout(() => {
        sidebarEl.style.display = 'none';
    }, 300); // Match the transition duration
});

const showMenu = () => {
        sidebarEl.style.display = 'block';
    sidebarEl.style.right = '0'
    sidebarEl.style.transition = 'all 0.3s ease-in-out';
    hambagerEl.style.display = 'none';
    closeEl.style.display = 'block';

    
}

// Toggle dropdown menu visibility on click
dropDownToggleEl.addEventListener('click', function () {
    dropdownMenuEl.classList.toggle('show');

});
// Close dropdown menu when clicking outside
document.addEventListener('click', function (event) {
    if (!dropDownEl.contains(event.target)) {
        dropdownMenuEl.classList.remove('show');
    }
});
// Close dropdown menu when clicking on a menu item
dropdownMenuEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('dropdown-item')) {
        dropdownMenuEl.classList.remove('show');
    }
});
// Close dropdown menu on Escape key press
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        dropdownMenuEl.classList.remove('show');
    }
});
// Optional: Close dropdown menu on scroll
window.addEventListener('scroll', function () {
    dropdownMenuEl.classList.remove('show');
});