var totalBill = 0;
var totalBillBox = document.getElementById('total');

var greenTotal = 0
    , greenCost = 0
    , blueTotal = 0
    , blueCost = 0
    , purpleTotal = 0
    , purpleCost = 0
    , orangeTotal = 0
    , orangeCost = 0
    , pinkTotal = 0
    , pinkCost = 0
    , greyTotal = 0
    , greyCost = 0
    , yellowTotal = 0
    , yellowCost = 0;

var greenTotalBox = document.getElementById('green-total');
var blueTotalBox = document.getElementById('blue-total');
var purpleTotalBox = document.getElementById('purple-total');
var orangeTotalBox = document.getElementById('orange-total');
var pinkTotalBox = document.getElementById('pink-total');
var greyTotalBox = document.getElementById('grey-total');
var yellowTotalBox = document.getElementById('yellow-total');

    //green plate function
    function greenAdd(){
        greenTotal++;
        greenTotalBox.value = greenTotal;
        greenCost = greenTotal * 1.90;
        calculateTotal();
        if (greenTotal > 0){
            document.getElementById('green-minus').style.visibility = 'visible';
            greenTotalBox.style.visibility = 'visible';
        }
    }
    
    function greenMinus() {
        if (greenTotal > 0){
            greenTotal--;
            greenTotalBox.value = greenTotal;
            greenCost = greenTotal * 1.90;
            calculateTotal();
            } 
        if (greenTotal == 0){
                document.getElementById('green-minus').style.visibility = 'hidden';
                greenTotalBox.style.visibility = 'hidden';
            }
    }

    //blue plate function
    function blueAdd(){
        blueTotal++;
        blueTotalBox.value = blueTotal;
        blueCost = blueTotal * 2.50;
        calculateTotal();
        if (blueTotal > 0){
            document.getElementById('blue-minus').style.visibility = 'visible';
            blueTotalBox.style.visibility = 'visible';
        }
    }
    
    function blueMinus() {
        if (blueTotal > 0){
            blueTotal--;
            blueTotalBox.value = blueTotal;
            blueCost = blueTotal * 2.50;
            calculateTotal();
            }
        if (blueTotal == 0){
                document.getElementById('blue-minus').style.visibility = 'hidden';
                blueTotalBox.style.visibility = 'hidden';
            }
    }

    //purple plate function
    function purpleAdd(){
        purpleTotal++;
        purpleTotalBox.value = purpleTotal;
        purpleCost = purpleTotal * 3.10;
        calculateTotal();
        if (purpleTotal > 0){
            document.getElementById('purple-minus').style.visibility = 'visible';
            purpleTotalBox.style.visibility = 'visible';
        }
    }
    
    function purpleMinus() {
        if (purpleTotal > 0){
            purpleTotal--;
            purpleTotalBox.value = purpleTotal;
            purpleCost = purpleTotal * 3.10;
            calculateTotal();
            }
        if (purpleTotal == 0){
                document.getElementById('purple-minus').style.visibility = 'hidden';
                purpleTotalBox.style.visibility = 'hidden';
            }
    }

    //orange plate function
    function orangeAdd(){
        orangeTotal++;
        orangeTotalBox.value = orangeTotal;
        orangeCost = orangeTotal * 3.60;
        calculateTotal();
        if (orangeTotal > 0){
            document.getElementById('orange-minus').style.visibility = 'visible';
            orangeTotalBox.style.visibility = 'visible';
        }
    }
    
    function orangeMinus() {
        if (orangeTotal > 0){
            orangeTotal--;
            orangeTotalBox.value = orangeTotal;
            orangeCost = orangeTotal * 3.60;
            calculateTotal();
            }
        if (orangeTotal == 0){
                document.getElementById('orange-minus').style.visibility = 'hidden';
                orangeTotalBox.style.visibility = 'hidden';
            }
    }

    //pink plate function
    function pinkAdd(){
        pinkTotal++;
        pinkTotalBox.value = pinkTotal;
        pinkCost = pinkTotal * 4.10;
        calculateTotal();
        if (pinkTotal > 0){
            document.getElementById('pink-minus').style.visibility = 'visible';
            pinkTotalBox.style.visibility = 'visible';
        }
    }
    
    function pinkMinus() {
        if (pinkTotal > 0){
            pinkTotal--;
            pinkTotalBox.value = pinkTotal;
            pinkCost = pinkTotal * 4.10;
            calculateTotal();
            }
        if (pinkTotal == 0){
                document.getElementById('pink-minus').style.visibility = 'hidden';
                pinkTotalBox.style.visibility = 'hidden';
            }
    }

    //grey plate function
    function greyAdd(){
        greyTotal++;
        greyTotalBox.value = greyTotal;
        greyCost = greyTotal * 5.00;
        calculateTotal();
        if (greyTotal > 0){
            document.getElementById('grey-minus').style.visibility = 'visible';
            greyTotalBox.style.visibility = 'visible';
        }
    }
    
    function greyMinus() {
        if (greyTotal > 0){
            greyTotal--;
            greyTotalBox.value = greyTotal;
            greyCost = greyTotal * 5.00;
            calculateTotal();
            }
        if (greyTotal == 0){
                document.getElementById('grey-minus').style.visibility = 'hidden';
                greyTotalBox.style.visibility = 'hidden';
            }
    }

    //yellow plate function
    function yellowAdd(){
        yellowTotal++;
        yellowTotalBox.value = yellowTotal;
        yellowCost = yellowTotal * 6.00;
        calculateTotal();
        if (yellowTotal > 0){
            document.getElementById('yellow-minus').style.visibility = 'visible';
            yellowTotalBox.style.visibility = 'visible';
        }
    }
    
    function yellowMinus() {
        if (yellowTotal > 0){
            yellowTotal--;
            yellowTotalBox.value = yellowTotal;
            yellowCost = yellowTotal * 6.00;
            calculateTotal();
            }
        if (yellowTotal == 0){
                document.getElementById('yellow-minus').style.visibility = 'hidden';
                yellowTotalBox.style.visibility = 'hidden';
            }
    }

   function calculateTotal() {
        totalBill = greenCost + blueCost + purpleCost + orangeCost + pinkCost + greyCost + yellowCost;
        totalBillBox.value = '£' + totalBill.toFixed(2);
   }
