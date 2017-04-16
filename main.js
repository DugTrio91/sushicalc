var i = 0;
    
    var greenTotal = document.getElementById('green-total');
    var blueTotal = document.getElementById('blue-total');
    var purpleTotal = document.getElementById('purple-total');
    var orangeTotal = document.getElementById('orange-total');
    var pinkTotal = document.getElementById('pink-total');
    var greyTotal = document.getElementById('grey-total');
    var yellowTotal = document.getElementById('yellow-total');
    
    function greenAdd() {
        greenTotal.value = ++i;
        if (greenTotal.value > 0){
                document.getElementById('gMinus').style.visibility = 'visible';
                greenTotal.style.visibility = 'visible';
            }
    }
    function greenMinus() {
        greenTotal.value = --i;
        if (greenTotal.value <= 0){
                document.getElementById('gMinus').style.visibility = 'hidden';
                greenTotal.style.visibility = 'hidden';
            }
    }
    
    function blueAdd() {
        blueTotal.value = ++i;
        if (blueTotal.value > 0){
                document.getElementById('bMinus').style.visibility = 'visible';
                blueTotal.style.visibility = 'visible';
            }
    }
    function blueMinus() {
        blueTotal.value = --i;
        if (blueTotal.value <= 0){
                document.getElementById('bMinus').style.visibility = 'hidden';
                blueTotal.style.visibility = 'hidden';
            }
    }
    
    
    
    
    
    
    
    function totalSum() {
        var arr = document.getElementsByName('tally');
        
    }