function change_css() {
    var widthString = window.getComputedStyle(document.getElementById('progbar')).getPropertyValue('width');    
    //var widthString = document.getElementById('progbar').style.width;
    console.log('WidthString: ' + widthString);
    var widthNumber = widthString.match(/\d/g);
    widthNumber = widthNumber.join("");
    console.log("Width-Number: "  + widthNumber);
    increasedNumber = parseInt(widthNumber) + 50;
    document.getElementById('progbar').style.width = increasedNumber + "px";
    widthString = window.getComputedStyle(document.getElementById('progbar')).getPropertyValue('width');
    console.log("Wert nach dem klicken: " + increasedNumber);
    var button = document.getElementById('inc-button');
    button.style.display = 'block !important';
    var progressBar = document.getElementById('progbar');
    var progressBar2 = document.getElementById('progress-bar');
    var gayText = document.getElementById('gay-text');
    var barText = document.getElementById('bar-text')
    gayText.style.display = 'none';

    if (increasedNumber > 1100) {
        button.style.display = 'none';
        progressBar.style.height = "0";
        progressBar2.style.height = "0";
        gayText.style.display =  'block';
        barText.style.display = 'none';

    }

}