var totalBill = 0;
var totalBillBox = document.getElementById('total');

var greenTotal = 0;
var greenCost = 0;
var greenTotalBox = document.getElementById('green-total');
greenCost.addEventListener("click", calculateTotal);
var blueTotal = 0;
var blueCost = 0;
var blueTotalBox = document.getElementById('blue-total');
var purpleTotal = 0;
var purpleTotalBox = document.getElementById('purple-total');
var orangeTotal = 0;
var orangeTotalBox = document.getElementById('orange-total');
var pinkTotal = 0;
var pinkTotalBox = document.getElementById('pink-total');
var greyTotal = 0;
var greyTotalBox = document.getElementById('grey-total');
var yellowTotal = 0;
var yellowTotalBox = document.getElementById('yellow-total');

    //green plate function
    function greenAdd(){
        greenTotal++;
        greenTotalBox.value = greenTotal;
        greenCost = greenTotal * 1.90;
    }
    
    function greenMinus() {
        if (greenTotal > 0){
            greenTotal--;
            greenTotalBox.value = greenTotal;
            greenCost = greenTotal * 1.90;
            }
    }

    //blue plate function
    function blueAdd(){
        blueTotal++;
        blueTotalBox.value = blueTotal;
        blueCost = blueTotal * 2.50;
    }
    
    function blueMinus() {
        if (blueTotal > 0){
            blueTotal--;
            blueTotalBox.value = blueTotal;
            blueCost = blueTotal * 2.50;
            }
    }

    //purple plate function
    function purpleAdd(){
        purpleTotal++;
        purpleTotalBox.value = purpleTotal;
    }
    
    function purpleMinus() {
        if (purpleTotal > 0){
            purpleTotal--;
            purpleTotalBox.value = purpleTotal;
            }
    }

    //orange plate function
    function orangeAdd(){
        orangeTotal++;
        orangeTotalBox.value = orangeTotal;
    }
    
    function orangeMinus() {
        if (orangeTotal > 0){
            orangeTotal--;
            orangeTotalBox.value = orangeTotal;
            }
    }

    //pink plate function
    function pinkAdd(){
        pinkTotal++;
        pinkTotalBox.value = pinkTotal;
    }
    
    function pinkMinus() {
        if (pinkTotal > 0){
            pinkTotal--;
            pinkTotalBox.value = pinkTotal;
            }
    }

    //grey plate function
    function greyAdd(){
        greyTotal++;
        greyTotalBox.value = greyTotal;
    }
    
    function greyMinus() {
        if (greyTotal > 0){
            greyTotal--;
            greyTotalBox.value = greyTotal;
            }
    }

    //yellow plate function
    function yellowAdd(){
        yellowTotal++;
        yellowTotalBox.value = yellowTotal;
    }
    
    function yellowMinus() {
        if (yellowTotal > 0){
            yellowTotal--;
            yellowTotalBox.value = yellowTotal;
            }
    }



   function calculateTotal() {
        totalBill = greenCost + blueCost;
        totalBillBox.vlaue = totalBill;
   }
