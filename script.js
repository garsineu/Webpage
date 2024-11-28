const body = document.querySelector('body');
const darkmodebutton = document.querySelector('.darkmode');
const pastelmodebutton = document.querySelector('.pastelmode');
const button = document.querySelector('button');
const trial = document.querySelector('.starttrial');
const link = document.querySelectorAll('.link');
const learnmore = document.querySelectorAll('.learnmore');


// Dark mode (Ya lo hice en su momento para otro proyecto)

function applyDarkMode(isDark) {
    if (isDark) {
        body.classList.add('dark');
        button.classList.add('dark');
        trial.classList.add('dark');
        menu.classList.add('dark');
        popup.classList.add('dark');
        body.classList.remove('pastel');
        button.classList.remove('pastel');
        trial.classList.remove('pastel');
        menu.classList.remove('pastel');
        popup.classList.remove('pastel');
        link.forEach(link => link.classList.remove('pastel'));
        learnmore.forEach(link => link.classList.remove('pastel'));
}
    else {
        body.classList.remove('dark');
        button.classList.remove('dark');
        trial.classList.remove('dark');
        menu.classList.remove('dark');
        popup.classList.remove('dark');
}
}

darkmodebutton.addEventListener('click', () => {
    const isDark =
    body.classList.toggle('dark');
    button.classList.toggle('dark');
    trial.classList.toggle('dark');
    menu.classList.toggle('dark');
    popup.classList.toggle('dark');

    applyDarkMode(isDark);

    localStorage.setItem('darkmode', isDark)
});

window.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkmode') === 'true';
    applyDarkMode(isDarkMode);
});


// Pastel mode (Para probar a poner varios modos sin que se solapen)

function applyPastelMode(isPastel) {
    if (isPastel) {
        body.classList.add('pastel');
        button.classList.add('pastel');
        trial.classList.add('pastel');
        menu.classList.add('pastel');
        popup.classList.add('pastel');
        link.forEach(link => link.classList.add('pastel'));
        learnmore.forEach(learnmore => learnmore.classList.add('pastel'));
        body.classList.remove('dark');
        button.classList.remove('dark');
        trial.classList.remove('dark');
        menu.classList.remove('dark');
        popup.classList.remove('dark');
}
    else {
        body.classList.remove('pastel');
        button.classList.remove('pastel');
        trial.classList.remove('pastel');
        menu.classList.remove('pastel');
        popup.classList.remove('pastel');
        link.forEach(link => link.classList.remove('pastel'));
        learnmore.forEach(learnmore => learnmore.classList.remove('pastel'));
}
}

pastelmodebutton.addEventListener('click', () => {
    const isPastel =
    body.classList.toggle('pastel');
    button.classList.toggle('pastel');
    trial.classList.toggle('pastel');
    menu.classList.toggle('pastel');
    popup.classList.toggle('pastel');
    link.forEach(link => link.classList.toggle('pastel'));
    learnmore.forEach(learnmore => learnmore.classList.toggle('pastel'));

    applyPastelMode(isPastel);

    localStorage.setItem('pastelmode', isPastel)
});

window.addEventListener('DOMContentLoaded', () => {
    const isPastelMode = localStorage.getItem('pastelmode') === 'true';
    applyPastelMode(isPastelMode);
});


// Popup (Esto sí lo he tenido que investigar xd)

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const popup = document.getElementById("popup");
  
    // Toggle the popup menu on button click
    menu.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      popup.classList.toggle("show");
    });
  
    // Close the popup menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!popup.contains(event.target) && !menu.contains(event.target)) {
        popup.classList.remove("show");
      }
    });
  });