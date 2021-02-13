var currentMonth = new Date().getMonth();
var allCritters = [];
var type = "";
var monthOffset; // 6 for fish, 5 for bugs. (related to arrays)
var currentHours = new Date().getHours();

var myCritters = [];
var neededCritters = [];

// Set the current month
document.getElementById("month").innerText = checkMonth(currentMonth);
generateMonthSelector();

var coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
}

function checkMonth(month) {
    switch(month) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September"
            break;
        case 9:
            return "October"
            break;
        case 10:
            return "November"
            break;
        case 11:
            return "December";
    }
}

function setArrays(inputArray, inputType, inputOffset){
    allCritters = inputArray;
    type = inputType;
    monthOffset = inputOffset;
}

function generateSelectionTable(table) {
    for (var row = 0; row < 5; row++) {
        let thisRow = table.insertRow();

        for (var col = row; col < 80; col = col + 5) {
            let td = thisRow.insertCell();
            let critterName = allCritters[col][1];
            let text = document.createTextNode(critterName);
            td.appendChild(text);
            td.id = type + col;
        }
    }
}

function setBackgrounds() {
    for (var i = 0; i < 80; i++){
        // Get critter name
        let critterName = allCritters[i][1];

        // Get critter's cell
        let thisCritter = document.getElementById(type + i);

        // Set critter's cell's background to image
        thisCritter.style.backgroundImage = imgOf(critterName);

        // Set mouseover text
        thisCritter.title = critterName;
        thisCritter.innerText = '';
    }
}

function imgOf(critter) {
    // Takes critter name, removes all symbols and spaces, then returns image URL
    let critterName = critter.toLowerCase();
    critterName = critterName.replace(/\s/g, '');
    critterName = critterName.replace('-', '');
    let imgPath = 'acnh-img/NH-Icon-' + critterName + '.png';
    return 'url(' + imgPath + ')';
}

function addListeners() {
    document.getElementById(type + 0).addEventListener('click', bindClick(0));
    document.getElementById(type + 1).addEventListener('click', bindClick(1));
    document.getElementById(type + 2).addEventListener('click', bindClick(2));
    document.getElementById(type + 3).addEventListener('click', bindClick(3));
    document.getElementById(type + 4).addEventListener('click', bindClick(4));
    document.getElementById(type + 5).addEventListener('click', bindClick(5));
    document.getElementById(type + 6).addEventListener('click', bindClick(6));
    document.getElementById(type + 7).addEventListener('click', bindClick(7)); 
    document.getElementById(type + 8).addEventListener('click', bindClick(8));
    document.getElementById(type + 9).addEventListener('click', bindClick(9));
    document.getElementById(type + 10).addEventListener('click', bindClick(10));
    document.getElementById(type + 11).addEventListener('click', bindClick(11));
    document.getElementById(type + 12).addEventListener('click', bindClick(12));
    document.getElementById(type + 13).addEventListener('click', bindClick(13));
    document.getElementById(type + 14).addEventListener('click', bindClick(14));
    document.getElementById(type + 15).addEventListener('click', bindClick(15));
    document.getElementById(type + 16).addEventListener('click', bindClick(16));
    document.getElementById(type + 17).addEventListener('click', bindClick(17));
    document.getElementById(type + 18).addEventListener('click', bindClick(18));
    document.getElementById(type + 19).addEventListener('click', bindClick(19));
    document.getElementById(type + 20).addEventListener('click', bindClick(20));
    document.getElementById(type + 21).addEventListener('click', bindClick(21));
    document.getElementById(type + 22).addEventListener('click', bindClick(22));
    document.getElementById(type + 23).addEventListener('click', bindClick(23));
    document.getElementById(type + 24).addEventListener('click', bindClick(24));
    document.getElementById(type + 25).addEventListener('click', bindClick(25));
    document.getElementById(type + 26).addEventListener('click', bindClick(26));
    document.getElementById(type + 27).addEventListener('click', bindClick(27));
    document.getElementById(type + 28).addEventListener('click', bindClick(28));
    document.getElementById(type + 29).addEventListener('click', bindClick(29));
    document.getElementById(type + 30).addEventListener('click', bindClick(30));
    document.getElementById(type + 31).addEventListener('click', bindClick(31));
    document.getElementById(type + 32).addEventListener('click', bindClick(32));
    document.getElementById(type + 33).addEventListener('click', bindClick(33));
    document.getElementById(type + 34).addEventListener('click', bindClick(34));
    document.getElementById(type + 35).addEventListener('click', bindClick(35));
    document.getElementById(type + 36).addEventListener('click', bindClick(36));
    document.getElementById(type + 37).addEventListener('click', bindClick(37));
    document.getElementById(type + 38).addEventListener('click', bindClick(38));
    document.getElementById(type + 39).addEventListener('click', bindClick(39));
    document.getElementById(type + 40).addEventListener('click', bindClick(40));
    document.getElementById(type + 41).addEventListener('click', bindClick(41));
    document.getElementById(type + 42).addEventListener('click', bindClick(42));
    document.getElementById(type + 43).addEventListener('click', bindClick(43));
    document.getElementById(type + 44).addEventListener('click', bindClick(44));
    document.getElementById(type + 45).addEventListener('click', bindClick(45));
    document.getElementById(type + 46).addEventListener('click', bindClick(46));
    document.getElementById(type + 47).addEventListener('click', bindClick(47));
    document.getElementById(type + 48).addEventListener('click', bindClick(48));
    document.getElementById(type + 49).addEventListener('click', bindClick(49));
    document.getElementById(type + 50).addEventListener('click', bindClick(50));
    document.getElementById(type + 51).addEventListener('click', bindClick(51));
    document.getElementById(type + 52).addEventListener('click', bindClick(52));
    document.getElementById(type + 53).addEventListener('click', bindClick(53));
    document.getElementById(type + 54).addEventListener('click', bindClick(54));
    document.getElementById(type + 55).addEventListener('click', bindClick(55));
    document.getElementById(type + 56).addEventListener('click', bindClick(56));
    document.getElementById(type + 57).addEventListener('click', bindClick(57));
    document.getElementById(type + 58).addEventListener('click', bindClick(58));
    document.getElementById(type + 59).addEventListener('click', bindClick(59));
    document.getElementById(type + 60).addEventListener('click', bindClick(60));
    document.getElementById(type + 61).addEventListener('click', bindClick(61));
    document.getElementById(type + 62).addEventListener('click', bindClick(62));
    document.getElementById(type + 63).addEventListener('click', bindClick(63));
    document.getElementById(type + 64).addEventListener('click', bindClick(64));
    document.getElementById(type + 65).addEventListener('click', bindClick(65));
    document.getElementById(type + 66).addEventListener('click', bindClick(66));
    document.getElementById(type + 67).addEventListener('click', bindClick(67));
    document.getElementById(type + 68).addEventListener('click', bindClick(68));
    document.getElementById(type + 69).addEventListener('click', bindClick(69));
    document.getElementById(type + 70).addEventListener('click', bindClick(70));
    document.getElementById(type + 71).addEventListener('click', bindClick(71));
    document.getElementById(type + 72).addEventListener('click', bindClick(72));
    document.getElementById(type + 73).addEventListener('click', bindClick(73));
    document.getElementById(type + 74).addEventListener('click', bindClick(74));
    document.getElementById(type + 75).addEventListener('click', bindClick(75));
    document.getElementById(type + 76).addEventListener('click', bindClick(76));
    document.getElementById(type + 77).addEventListener('click', bindClick(77));
    document.getElementById(type + 78).addEventListener('click', bindClick(78));
    document.getElementById(type + 79).addEventListener('click', bindClick(79));
}

function bindClick(i) {
    return function() {
        console.log("you clicked " + type + i);
        let button = document.getElementById(type + i);
   
        if (button.style.backgroundColor == selectedColor) { // If button already selected
           button.style.backgroundColor = "black";
           for (rem = 0; rem < myCritters.length; rem ++) {
               if (myCritters[rem] == i) {
                   myCritters.splice(rem, 1);
                   sortCritters();
               }
           }
        } else { // If button not selected
           button.style.backgroundColor = selectedColor;
           myCritters.push(i);
           console.log(myCritters);
           sortCritters();
        }

    };
}

function sortCritters() {
    myCritters.sort(function(a, b){return a-b});

    // Sometimes a blank space gets pushed into the array by accident, this removes it
    if (Number.isInteger(myCritters[0]) == false){
        myCritters.splice(0,1);
    }
}

function checkIfFishStored() {
    if (localStorage.getItem("myFish") === null){
        console.log("No fish stored.");
    } else {
        console.log("Found fish...");
        parseStored(localStorage.myFish);
    }
}

function checkIfBugsStored() {
    if (localStorage.getItem("myBugs") === null){
        console.log("No bugs stored.");
    } else {
        console.log("Found bugs...");
        parseStored(localStorage.myBugs);
    }
}

function parseStored(crittersString) {
    // Splits loaded data into a temporary array
    console.log(crittersString);
    let tempArray = crittersString.split(",");

    // Pushes everything from the temporary array
    for (i = 0; i < tempArray.length; i ++){
        let newCritter = parseInt(tempArray[i]);
        if (isNaN(newCritter) == false) {
            myCritters.push(newCritter);
        }
    }

    // Colors the boxes
    for (i = 0; i < myCritters.length; i++) {
        let button = document.getElementById(type + myCritters[i]);
        if (myCritters[i] !== ""){
            button.style.backgroundColor = selectedColor;
        }
    }
} 

// Run when user does some action
function clickBox() {
    getNeededCritters();
    saveChoices();
}

function saveChoices() {
    let str = myCritters.toString();

    // Logs submitted fish and saves them to local storage
    if (type == "fish") {
        localStorage.myFish = str;
        console.log("Submitted: " + str);
    } else {
        localStorage.myBugs = str;
        console.log("Submitted: " + str);
    }
}

function getNeededCritters() {
    // Clear table and neededCritters array
    clearOutputTable();
    neededCritters = [];

    for (i = 0; i < allCritters.length; i++) {
        if (myCritters.includes(i)) {
            //console.log("Already have " + allCritters[i][1]);
        } // Checks the column associated with this month 
        else if (allCritters[i][currentMonth + monthOffset] == "(X)") {
            neededCritters.push(i);
        } else {
            //console.log(allCritters[i][1] + " needed, but not currently available.");
        }
    }
    generateOutputTableBody();
    generateOutputTableHead();
}

function clearOutputTable() {
    let outputTable = document.getElementById("outputTable");

    // Clears entire table
    for (i = outputTable.rows.length - 1; i > -1; i--) {
        outputTable.deleteRow(i);
    }
}

function generateOutputTableHead() {
    let outputTable = document.getElementById("outputTable");
    
    let fishHeaders = ["#", "Fish Name", "Image", "Value", "Location", "Shadow Size", "Times", "Months"]
    let bugHeaders = ["#", "Bug Name", "Image", "Value", "Location", "Times", "Months"]

    let headers = [];
    if (type == "fish") {
        headers = fishHeaders;
    } else {
        headers = bugHeaders;
    }

    let thead = outputTable.createTHead();
    let row = thead.insertRow();
    for (i = 0; i < headers.length; i++) {
        let th = document.createElement("th");
        let text = document.createTextNode(headers[i]);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateOutputTableBody() {
    let outputTable = document.getElementById("outputTable");
    console.log(neededCritters);

    // Generates table
    for (var row = 0; row < neededCritters.length; row++) {
        // Makes Row
        let thisCritter = neededCritters[row];
        let thisRow = outputTable.insertRow();
        let number, name, image, value, loc, hours, months;
        let size = 0;

        // Sets critter info
        if (type == "fish") {
            number = allCritters[thisCritter][0];
            name = allCritters[thisCritter][1];
            image = "";
            value = allCritters[thisCritter][2];
            loc = allCritters[thisCritter][3];
            size = allCritters[thisCritter][4];
            hours = allCritters[thisCritter][5];
            months = printMonths(number - 1);
        } else {
            number = allCritters[thisCritter][0];
            name = allCritters[thisCritter][1];
            image = "";
            value = allCritters[thisCritter][2];
            loc = allCritters[thisCritter][3];
            hours = allCritters[thisCritter][monthOffset - 1];
            months = printMonths(number - 1);
        }

        hours = checkTime(name, hours);
        
        let critData = [number, name, image, value, loc, hours, months];
        if (type == "fish") {
            critData.splice(5, 0, size);
        }

        for (var col = 0; col < critData.length; col++) {
            let td = thisRow.insertCell();
            let text = document.createTextNode(critData[col]);
            td.appendChild(text);
            td.classList.add("output" + col);

            // Loads BG image if third column
            if (col == 2) { 
                td.style.backgroundImage = imgOf(name);
            }

            // Highlights
            if ((col == monthOffset + 1) && months.endsWith("month!")){
                //console.log(allCritters[thisCritter][1] + " leaving soon.");
                td.style.backgroundColor = "darkred";
            } else if ((col == monthOffset + 1) && months.endsWith("month.")) {
                //console.log(allCritters[thisCritter][1] + " new.");
                td.style.backgroundColor = "darkblue";
            } else if ((col == monthOffset) && hours.endsWith("*")){
                td.style.backgroundColor = "darkgreen";
            }
        }
    }
}

function printMonths(critter) {
    let output = "";

    // 6 thru 17 are the columns representing Jan thru Dec
    // 5 thru 16 if bugs
    for (i = monthOffset; i < monthOffset + 12; i++) {
        if (allCritters[critter][i] == "(X)") {
            let temp = checkMonth(i - monthOffset);
            temp = temp.substring(0,3);
            output += temp + ", ";
        }
    }
    // Remove last comma
    output = output.slice(0, -2);

    if (output == "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"){
        return "All months";
    } else if ((allCritters[critter][currentMonth + monthOffset] == "(X)") && 
        (allCritters[critter][currentMonth + monthOffset + 1] == "-")){
            output += ". This critter is leaving next month!";
            return output;
    } else if ((allCritters[critter][currentMonth + monthOffset] == "(X)") && 
    (allCritters[critter][currentMonth + monthOffset - 1] == "-")){
        output += ". This critter is new for this month.";
        return output;
    } else {
        return output;
    }
}

function deleteFish(){
    console.log("Deleting" + localStorage.myFish);
    delete localStorage.myFish;
    console.log("Deleted");
    location.reload();
}

function generateMonthSelector() {
    var ul = document.getElementById("monthMenu");

    for (i = 0; i < 12; i++) {
        let month = checkMonth(i).substring(0,3);

        var node = document.createElement("li");
        var textnode = document.createTextNode(month);
        node.appendChild(textnode);
        node.setAttribute("id", "month"+i);
        ul.appendChild(node);
    }

    addMonthListeners();
}

function addMonthListeners() {
    document.getElementById("month" + 0).addEventListener('click', setMonth(0));
    document.getElementById("month" + 1).addEventListener('click', setMonth(1));
    document.getElementById("month" + 2).addEventListener('click', setMonth(2));
    document.getElementById("month" + 3).addEventListener('click', setMonth(3));
    document.getElementById("month" + 4).addEventListener('click', setMonth(4));
    document.getElementById("month" + 5).addEventListener('click', setMonth(5));
    document.getElementById("month" + 6).addEventListener('click', setMonth(6));
    document.getElementById("month" + 7).addEventListener('click', setMonth(7));
    document.getElementById("month" + 8).addEventListener('click', setMonth(8));
    document.getElementById("month" + 9).addEventListener('click', setMonth(9));
    document.getElementById("month" + 10).addEventListener('click', setMonth(10));
    document.getElementById("month" + 11).addEventListener('click', setMonth(11));
}

function setMonth(month) {
    return function() {
        console.log("you clicked " + checkMonth(month));
        currentMonth = month;
        let button = document.getElementById("month" + month);

        for (i = 0; i < 12; i++ ) {
            document.getElementById("month" + i).style.backgroundColor = "#ccc";
        }

        button.style.backgroundColor = "lightgreen";
    };
}

function checkTime(name, hours) {
    console.log(currentHours);
    if (hours == "All day"){
        return hours + "*";
    // Fish
    } else if (hours == "9 AM - 4 PM" && (9 <= currentHours < 16)){
        return hours + "*";
    } else if (hours == "9 PM - 4 AM" && (21 <= currentHours || currentHours < 4)){
        return hours + "*";
    } else if (hours == "4 PM - 9 AM" && (16 <= currentHours || currentHours < 9)){
        return hours + "*";
    // Bugs
    } else if (hours == "4 AM - 7 PM" && (4 <= currentHours < 19)){
        return hours + "*";
    } else if (hours == "8 AM - 4 PM" && (8 < currentHours < 16)){
        return hours + "*";
    } else if (hours == "8 AM - 5 PM" && (8 < currentHours < 17)){
        return hours + "*";
    } else if (hours == "8 AM - 7 PM" && (8 <= currentHours < 19)){
        return hours + "*";
    } else if (hours == "5 PM - 8 AM" && (17 <= currentHours || currentHours < 8)) {
        return hours + "*";
    } else if (hours == "7 PM - 4 AM" && (19 <= currentHours || currentHours < 4)) {
        return hours + "*";
    } else if (hours == "4 AM - 8 AM & 4 PM - 7 PM" && (4 <= currentHours < 8 || 16 <= currentHours < 19)){
        return hours + "*";
    }
    else {
        console.log(name + " NA " + hours);
        return hours;
    }
}