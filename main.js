var totalBill = 0;
var totalBillBox = document.getElementById('total');

var greenTotal = 0;
var greenCost = 0;
var greenTotalBox = document.getElementById('green-total');
var blueTotal = 0;
var blueCost = 0;
var blueTotalBox = document.getElementById('blue-total');
var purpleTotal = 0;
var purpleCost = 0;
var purpleTotalBox = document.getElementById('purple-total');
var orangeTotal = 0;
var orangeCost = 0;
var orangeTotalBox = document.getElementById('orange-total');
var pinkTotal = 0;
var pinkCost = 0;
var pinkTotalBox = document.getElementById('pink-total');
var greyTotal = 0;
var greyCost = 0;
var greyTotalBox = document.getElementById('grey-total');
var yellowTotal = 0;
var yellowCost = 0;
var yellowTotalBox = document.getElementById('yellow-total');

    //green plate function
    function greenAdd(){
        greenTotal++;
        greenTotalBox.value = greenTotal;
        greenCost = greenTotal * 1.90;
        calculateTotal();
    }
    
    function greenMinus() {
        if (greenTotal > 0){
            greenTotal--;
            greenTotalBox.value = greenTotal;
            greenCost = greenTotal * 1.90;
            calculateTotal();
            }
    }

    //blue plate function
    function blueAdd(){
        blueTotal++;
        blueTotalBox.value = blueTotal;
        blueCost = blueTotal * 2.50;
        calculateTotal();
    }
    
    function blueMinus() {
        if (blueTotal > 0){
            blueTotal--;
            blueTotalBox.value = blueTotal;
            blueCost = blueTotal * 2.50;
            calculateTotal();
            }
    }

    //purple plate function
    function purpleAdd(){
        purpleTotal++;
        purpleTotalBox.value = purpleTotal;
        purpleCost = purpleTotal * 3.10;
        calculateTotal();
    }
    
    function purpleMinus() {
        if (purpleTotal > 0){
            purpleTotal--;
            purpleTotalBox.value = purpleTotal;
            purpleCost = purpleTotal * 3.10;
            calculateTotal();
            }
    }

    //orange plate function
    function orangeAdd(){
        orangeTotal++;
        orangeTotalBox.value = orangeTotal;
        orangeCost = orangeTotal * 3.60;
        calculateTotal();
    }
    
    function orangeMinus() {
        if (orangeTotal > 0){
            orangeTotal--;
            orangeTotalBox.value = orangeTotal;
            orangeCost = orangeTotal * 3.60;
            calculateTotal();
            }
    }

    //pink plate function
    function pinkAdd(){
        pinkTotal++;
        pinkTotalBox.value = pinkTotal;
        pinkCost = pinkTotal * 4.10;
        calculateTotal();
    }
    
    function pinkMinus() {
        if (pinkTotal > 0){
            pinkTotal--;
            pinkTotalBox.value = pinkTotal;
            pinkCost = pinkTotal * 4.10;
            calculateTotal();
            }
    }

    //grey plate function
    function greyAdd(){
        greyTotal++;
        greyTotalBox.value = greyTotal;
        greyCost = greyTotal * 5.00;
        calculateTotal();
    }
    
    function greyMinus() {
        if (greyTotal > 0){
            greyTotal--;
            greyTotalBox.value = greyTotal;
            greyCost = greyTotal * 5.00;
            calculateTotal();
            }
    }

    //yellow plate function
    function yellowAdd(){
        yellowTotal++;
        yellowTotalBox.value = yellowTotal;
        yellowCost = yellowTotal * 6.00;
        calculateTotal();
    }
    
    function yellowMinus() {
        if (yellowTotal > 0){
            yellowTotal--;
            yellowTotalBox.value = yellowTotal;
            yellowCost = yellowTotal * 6.00;
            calculateTotal();
            }
    }

   function calculateTotal() {
        totalBill = greenCost + blueCost + purpleCost + orangeCost + pinkCost + greyCost + yellowCost;
        totalBillBox.value = totalBill;
   }
