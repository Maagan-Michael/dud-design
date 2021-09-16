
const $ = document.querySelector.bind(document);

document.addEventListener('DOMContentLoaded', (event) => {
    //const usageField = $('#current_measure');
    const toggleSwitch = $('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}
else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    }    
}

//usageField.addEventListener('keyup', checkInput, false);



    toggleSwitch.addEventListener('change', switchTheme, false);
}
);

usageField.addEventListener('keyup', checkInput, false);


function checkInput(e) {
    //only alpha-numeric characters
    var ok = /[0-9]/.test(String.fromCharCode(e.charCode));
    if (!ok)
        e.preventDefault();

    var difference = e.target.value - 20000;
    $('.usage').innerHTML = "הפרש מקריאה קודמת: " + difference;
    if ( difference > 100 ) {
        $('.high_usage').innerHTML = "ההפרש מהקריאה הנוכחית גדול מדי.";
        $('.high_usage').style.display = "block";
    }
    else {
        $('.high_usage').style.display = "none";
    }
      

};