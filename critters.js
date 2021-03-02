let allFish = northFish;
let allBugs = northBugs;
let allDeep = northDeep;

var currentMonth = new Date().getMonth();
var currentHours = new Date().getHours();

var allCritters = [];
var monthOffset = 6;
var submitType = "fish";

const fishTable = document.getElementById("fishTable");
const bugTable = document.getElementById("bugTable");
const deepTable = document.getElementById("deepTable");
const monthMenu = document.getElementById("monthMenu");
const selectedColor = "lightgray";

var myCritters = [];
var neededCritters = [];

// Set the current month
makeSelectionTables();
document.getElementById("month").innerText = checkMonth(currentMonth);
generateMonthSelector();
bugMode();

// Collapsible Menus
var coll = document.getElementsByClassName("collapsible");
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function makeSelectionTables() {
    // Create fish selection table
    generateSelectionTable(fishTable, "fish", allFish.length);
    setBackgrounds("fish", allFish.length);
    addListeners("fish");

    // Create bug selection table
    generateSelectionTable(bugTable, "bug", allBugs.length);
    setBackgrounds("bug", allBugs.length);
    addListeners("bug");

    generateSelectionTable(deepTable, "deep", allDeep.length);
    setBackgrounds("deep", allDeep.length);
    addListeners("deep");

    checkLocalStorage();
}

function fishMode() {
    bugTable.hidden = true;
    fishTable.hidden = false;
    deepTable.hidden = true;
    submitType = "fish";
}

function bugMode() {
    fishTable.hidden = true;
    bugTable.hidden = false;
    deepTable.hidden = true;
    submitType = "bug";
}

function deepMode() {
    bugTable.hidden = true;
    fishTable.hidden = true;
    deepTable.hidden = false;
    submitType = "deep";
}

function checkMonth(month) {
    switch (month) {
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

function generateSelectionTable(table, type, limit) {
    if (type == "fish") allCritters = allFish;
    else if (type == "bug") allCritters = allBugs;
    else if (type == "deep") allCritters = allDeep;

    for (var row = 0; row < 5; row++) {
        let thisRow = table.insertRow();

        for (var col = row; col < limit; col = col + 5) {
            //console.log(allCritters[col][1])
            let td = thisRow.insertCell();
            let critterName = allCritters[col][0];
            let text = document.createTextNode(critterName);
            td.appendChild(text);
            td.id = type + col;
            td.classList.add(type);
        }
    }
}

function setBackgrounds(type, limit) {
    for (var i = 0; i < limit; i++) {
        // Get critter name
        let critterName = allCritters[i][0];

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

function addListeners(type) {
    let limit = 40;
    if (type != "deep") limit = 80;
    for (let i = 0; i < limit; i++) {
        document.querySelector(`#${type+i}`).onclick = bindClick(type, i);
    }
}

function bindClick(type, i) {
    return function () {
        console.log("you clicked " + type + i);
        let button = document.getElementById(type + i);

        if (button.style.backgroundColor == selectedColor) { // If button already selected
            button.style.backgroundColor = "black";
            for (rem = 0; rem < myCritters.length; rem++) {
                if (myCritters[rem] == type + i) {
                    myCritters.splice(rem, 1);
                    sortCritters();
                }
            }
        } else { // If button not selected
            button.style.backgroundColor = selectedColor;
            myCritters.push(type + i);
            console.log(myCritters);
            sortCritters();
        }

    };
}

function sortCritters() {
    myCritters.sort(function (a, b) {
        return a - b
    });
}


function checkLocalStorage() {
    if (!localStorage.getItem("myCritters")) {
        console.log("Nothing stored.");
    } else {
        console.log("Found stored critters.");
        let critters = localStorage.getItem("myCritters");
        parseStored(critters);
    }
}

function parseStored(critters) {
    // Splits loaded data into a temporary array
    let tempArray = critters.split(",");

    for (item in tempArray) {
        let critter = tempArray[item];
        let type;

        if (critter.includes("fish")) {
            type = "fish";
        } else if (critter.includes("bug")) {
            type = "bug";
        } else if (critter.includes("deep")) {
            type = "deep";
        }

        critter = critter.replace(type, "");
        myCritters.push(type + critter);
        sortCritters();

        // Colors the box
        let button = document.getElementById(type + critter);
        button.style.backgroundColor = selectedColor;
    }
    console.log(`Loaded ${myCritters}`);
}

// Run when user does some action
function clickBox() {
    getNeededCritters();
    saveChoices();
}

function saveChoices() {
    let str = myCritters.toString();
    localStorage.setItem("myCritters", str);
}

function getAll() {
    // Clear table and neededCritters array
    clearOutputTable();
    neededCritters = [];

    // Set arrays and monthOffset
    if (submitType == "fish") {
        allCritters = allFish;
        monthOffset = 5;
    } else if (submitType == "bug") {
        allCritters = allBugs;
        monthOffset = 4;
    } else if (submitType == "deep") {
        allCritters = allDeep;
        monthOffset = 5;
    }

    for (i = 0; i < allCritters.length; i++) {
        if (allCritters[i][currentMonth + monthOffset] == "(X)") {
            neededCritters.push(submitType + i);
        }
    }
    generateOutputTableHead();
    generateOutputTableBody();
}

function getNeededCritters() {
    // Clear table and neededCritters array
    clearOutputTable();
    neededCritters = [];

    // Set arrays and monthOffset
    if (submitType == "fish") {
        allCritters = allFish;
        monthOffset = 5;
    } else if (submitType == "bug") {
        allCritters = allBugs;
        monthOffset = 4;
    } else if (submitType == "deep") {
        allCritters = allDeep;
        monthOffset = 5;
    }

    for (i = 0; i < allCritters.length; i++) {
        if (myCritters.includes(submitType + i)) {
            console.log("Already have " + allCritters[i][0]);
        } // Checks the column associated with this month 
        else if (allCritters[i][currentMonth + monthOffset] == "(X)") {
            neededCritters.push(submitType + i);
        } else {
            //console.log(allCritters[i][1] + " needed, but not currently available.");
        }
    }
    //console.log(neededCritters);
    generateOutputTableHead();
    generateOutputTableBody();
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
    let deepHeaders = ["#", "Creature Name", "Image", "Value", "Shadow Size", "Swim Pattern", "Times", "Months"]

    let headers = [];
    if (submitType == "fish") {
        headers = fishHeaders;
    } else if (submitType == "bug") {
        headers = bugHeaders;
    } else if (submitType == "deep") {
        headers = deepHeaders;
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

    // Generates table
    for (var row = 0; row < neededCritters.length; row++) {
        // Makes Row
        let thisCritter = neededCritters[row];
        thisCritter = thisCritter.replace("fish", "");
        thisCritter = thisCritter.replace("bug", "");
        thisCritter = thisCritter.replace("deep", "");
        let thisRow = outputTable.insertRow();
        let number, name, image, value, loc, hours, months;
        let size = 0;

        number = parseInt(thisCritter) + 1;
        name = allCritters[thisCritter][0];
        image = "";
        value = allCritters[thisCritter][1];
        loc = allCritters[thisCritter][2];
        size = allCritters[thisCritter][3];
        hours = allCritters[thisCritter][monthOffset - 1];
        months = printMonths(number - 1);

        if (checkTime(name, hours) === true) {
            hours += "*";
        }

        let critData = [number, name, image, value, loc, hours, months];
        if (submitType != "bug") {
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

            // Check if times col
            let timeCol = false;
            if (submitType == "bug"){
                if (col == 5) timeCol = true;
                else timeCol = false
            } else if (col == 6) timeCol = true;

            // Color if hours ends in star, then delete the star
            if (timeCol && hours.endsWith("*")) {
                td.style.backgroundColor = "darkgreen";
                td.innerText = td.innerText.slice(0, -1)
            }

            // Check if months col
            let lastCol = false;
            if (submitType == "bug" && col == 6) lastCol = true;
            else if (col == 7) lastCol = true;

            if (lastCol && months.endsWith("month!")) {
                //console.log(allCritters[thisCritter][1] + " leaving soon.");
                td.style.backgroundColor = "darkred";
            } else if (lastCol && months.endsWith("month.")) {
                //console.log(allCritters[thisCritter][1] + " new.");
                td.style.backgroundColor = "darkblue";
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
            temp = temp.substring(0, 3);
            output += temp + ", ";
        }
    }
    // Remove last comma
    output = output.slice(0, -2);

    if (output == "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec") {
        return "All months";
    } else if ((allCritters[critter][currentMonth + monthOffset] == "(X)") &&
        (allCritters[critter][currentMonth + monthOffset + 1] == "-")) {
        output += ". This critter is leaving next month!";
        return output;
    } else if ((allCritters[critter][currentMonth + monthOffset] == "(X)") &&
        (allCritters[critter][currentMonth + monthOffset - 1] == "-")) {
        output += ". This critter is new for this month.";
        return output;
    } else {
        return output;
    }

}

function deleteFish() {
    console.log("Deleting" + localStorage.myFish);
    delete localStorage.myFish;
    console.log("Deleted");
    location.reload();
}

function generateMonthSelector() {
    let menu = document.getElementById("monthMenu");

    for (i = 0; i < 12; i++) {
        let month = checkMonth(i).substring(0, 3);

        var monthButton = document.createElement("div");
        monthButton.appendChild(document.createTextNode(month));
        monthButton.setAttribute("id", "month" + i);
        monthButton.setAttribute("class", "col btn btn-secondary");

        menu.appendChild(monthButton);
    }

    addMonthListeners();
}

// Time-related functions
function addMonthListeners() {
    for (let i = 0; i < 12; i++) {
        document.querySelector(`#month${i}`).onclick = setMonth(i);
    }
}

function setMonth(month) {
    return function () {
        console.log("you clicked " + checkMonth(month));
        currentMonth = month;
        let button = document.getElementById("month" + month);

        for (i = 0; i < 12; i++) {
            document.getElementById("month" + i).style.backgroundColor = "#6c757d";
        }

        button.style.backgroundColor = "#28a745";
    };
}

function checkTime(name, hours) {
    // TODO: Make this easier lol
    let startTime, endTime;

    // Temporary workaround - avoid &s in hours col
    if (hours.includes("&") || hours.includes(",")) {
        return false;
    } else if (hours.includes("All day")) {
        return true;
    }

    // Set start time
    if (hours.includes("9 AM -")) {
        startTime = 9;
    } else if (hours.includes("4 PM -")) {
        startTime = 16;
    } else if (hours.includes("4 AM -")) {
        startTime = 4;
    } else if (hours.includes("5 PM -")) {
        startTime = 17;
    } else if (hours.includes("7 PM -")) {
        startTime = 19;
    } else if (hours.includes("8 AM -")) {
        startTime = 8;
    } else if (hours.includes("9 PM -")) {
        startTime = 21;
    } else if (hours.includes("11 PM -")) {
        startTime = 23;
    }

    // Set end time
    if (hours.includes("- 4 PM")) {
        endTime = 16;
    } else if (hours.includes("- 9 AM")) {
        endTime = 33;
    } else if (hours.includes("- 9 PM")) {
        endTime = 21;
    } else if (hours.includes("- 7 PM")) {
        endTime = 19;
    } else if (hours.includes("- 8 AM")) {
        endTime = 32;
    } else if (hours.includes("- 4 AM")) {
        endTime = 28;
    } else if (hours.includes("- 5 PM")) {
        endTime = 17;
    } else if (hours.includes("- 11 PM")) {
        endTime = 23;
    }

    // Check if between correct hours
    if (startTime < currentHours && currentHours < endTime){
        //console.log(`O ${name}: ${startTime} ${currentHours} ${endTime}`)
        return true;
    } else if (currentHours < endTime-24){
        //console.log(`O ${name}: ${startTime} ${currentHours} ${endTime-24} (night)`)
        return true;
    } else if (name === "Pill bug"){ //Starts at weird time
        if (currentHours == 23 || currentHours < endTime){
            //console.log(`O ${name}: yes`)
            return true;
        }
    }

    //console.log(`X ${name}: ${startTime} ${currentHours} ${endTime}`)
    return false;
}

function setHemisphere(hemisphere) {
    if (hemisphere === "north") {
        allFish = northFish;
        allBugs = northBugs;
        allDeep = northDeep;
        document.querySelector("#north").style.backgroundColor = "#28a745";
        document.querySelector("#south").style.backgroundColor = "#6c757d";
    } else if (hemisphere === "south") {
        allFish = southFish;
        allBugs = southBugs;
        allDeep = southDeep;
        document.querySelector("#north").style.backgroundColor = "#6c757d";
        document.querySelector("#south").style.backgroundColor = "#28a745";
    }
    // Update span in header
    document.querySelector("#hemisphere").innerHTML = hemisphere + "ern";
}