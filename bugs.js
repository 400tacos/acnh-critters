/* allBugs indexes
0 - number
1 - name
2 - value
3 - location
4 - time
5-16 - months
*/

var allBugs = [
    [1, "Common butterfly", "160", "Flying", "4 AM - 7 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [2, "Yellow butterfly", "160", "Flying", "4 AM - 7 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "-", "-"],
    [3, "Tiger butterfly", "240", "Flying", "4 AM - 7 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [4, "Peacock butterfly", "2500", "Flying by Hybrid Flowers", "4 AM - 7 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-"],
    [5, "Common bluebottle", "300", "Flying", "4 AM - 7 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [6, "Paper kite butterfly", "1000", "Flying", "8 AM - 7 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [7, "Great purple emperor", "3000", "Flying", "4 AM - 7 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [8, "Monarch butterfly", "140", "Flying", "4 AM - 5 PM", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-"],
    [9, "Emperor butterfly", "4000", "Flying", "5 PM - 8 AM", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)"],
    [10, "Agrias butterfly", "3000", "Flying", "8 AM - 5 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [11, "Rajah Brookes birdwing", "2500", "Flying", "8 AM - 5 PM", "(X)", "(X)", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)"],
    [12, "Queen Alexandras birdwing", "4000", "Flying", "8 AM - 4 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [13, "Moth", "130", "Flying by Light", "7 PM - 4 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [14, "Atlas moth", "3000", "On Trees", "7 PM - 4 AM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [15, "Madagascan sunset moth", "2500", "Flying", "8 AM - 4 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [16, "Long locust", "200", "On the Ground", "8 AM - 7 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [17, "Migratory locust", "600", "On the Ground", "8 AM - 7 PM", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-"],
    [18, "Rice grasshopper", "160", "On the Ground", "8 AM - 7 PM", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-"],
    [19, "Grasshopper", "160", "On the Ground", "8 AM - 5 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [20, "Cricket", "130", "On the Ground", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-"],
    [21, "Bell cricket", "430", "On the Ground", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-"],
    [22, "Mantis", "430", "On Flowers", "8 AM - 5 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [23, "Orchid mantis", "2400", "On Flowers (White)", "8 AM - 5 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [24, "Honeybee", "200", "Flying", "8 AM - 5 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-"],
    [25, "Wasp", "2500", "Shaking Trees", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [26, "Brown cicada", "250", "On Trees", "8 AM - 5 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [27, "Robust cicada", "300", "On Trees", "8 AM - 5 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [28, "Giant cicada", "500", "On Trees", "8 AM - 5 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [29, "Walker cicada", "400", "On Trees", "8 AM - 5 PM", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-"],
    [30, "Evening cicada", "550", "On Trees", "4 AM - 8 AM & 4 PM - 7 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [31, "Cicada shell", "10", "On Trees", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [32, "Red dragonfly", "180", "Flying", "8 AM - 7 PM", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-"],
    [33, "Darner dragonfly", "230", "Flying", "8 AM - 5 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [34, "Banded dragonfly", "4500", "Flying", "8 AM - 5 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [35, "Damselfly", "500", "Flying", "All day", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [36, "Firefly", "300", "Flying", "7 PM - 4 AM", "-", "-", "-", "-", "-", "(X)", "-", "-", "-", "-", "-", "-"],
    [37, "Mole cricket", "500", "Underground", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [38, "Pondskater", "130", "On Ponds and Rivers", "8 AM - 7 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [39, "Diving beetle", "800", "On Ponds and Rivers", "8 AM - 7 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [40, "Giant water bug", "2000", "On Ponds and Rivers", "7 PM - 8 AM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [41, "Stinkbug", "120", "On Flowers", "All day", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [42, "Man-faced stink bug", "1000", "On Flowers", "7 PM - 8 AM", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [43, "Ladybug", "200", "On Flowers", "8 AM - 5 PM", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "(X)", "-", "-"],
    [44, "Tiger beetle", "1500", "On the Ground", "All day", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [45, "Jewel beetle", "2400", "On Tree Stumps", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [46, "Violin beetle", "450", "On Tree Stumps", "All day", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "-"],
    [47, "Citrus long-horned beetle", "350", "On Tree Stumps", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [48, "Rosalia batesi beetle", "3000", "On Tree Stumps", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [49, "Blue weevil beetle", "800", "On Trees (Coconut?)", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [50, "Dung beetle", "3000", "On the Ground (rolling snowballs)", "All day", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "-", "(X)"],
    [51, "Earth-boring dung beetle", "300", "On the Ground", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [52, "Scarab beetle", "10000", "On Trees", "11 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [53, "Drone beetle", "200", "On Trees", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [54, "Goliath beetle", "8000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [55, "Saw stag", "2000", "On Trees", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [56, "Miyama stag", "1000", "On Trees", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [57, "Giant stag", "10000", "On Trees", "11 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [58, "Rainbow stag", "6000", "On Trees", "7 PM - 8 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [59, "Cyclommatus stag", "8000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [60, "Golden stag", "12000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [61, "Giraffe stag", "12000", "On Trees (Coconut?)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [62, "Horned dynastid", "1350", "On Trees", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [63, "Horned atlas", "8000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [64, "Horned elephant", "8000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [65, "Horned hercules", "12000", "On Trees (Coconut)", "5 PM - 8 AM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [66, "Walking stick", "600", "On Trees", "4 AM - 8 AM & 5 PM - 7 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [67, "Walking leaf", "600", "Under Trees Disguised as Leafs", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [68, "Bagworm", "600", "Shaking Trees", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [69, "Ant", "80", "On rotten food", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [70, "Hermit crab", "1000", "Beach disguised as Shells", "7 PM - 8 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [71, "Wharf roach", "200", "On Beach Rocks", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [72, "Fly", "60", "On Trash Items", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [73, "Mosquito", "130", "Flying", "5 PM - 4 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [74, "Flea", "70", "Villager's Heads", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [75, "Snail", "250", "On Rocks (Rain)", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [76, "Pill bug", "250", "Hitting Rocks", "11 PM - 4 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [77, "Centipede", "300", "Hitting Rocks", "4 PM - 11 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [78, "Spider", "480", "Shaking Trees", "7 PM - 8 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [79, "Tarantula", "8000", "On the Ground", "7 PM - 4 AM", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [80, "Scorpion", "8000", "On the Ground", "7 PM - 4 AM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"]
];

var table = document.getElementById("bugTable");
var selectedColor = "lightgreen";

// Sends allFish array to critters.setArrays
setArrays(allBugs, "bugs", 5);

// Create fish selection table
generateSelectionTable(table);
setBackgrounds();
addListeners();

// Load bug selections from localstorage
checkIfBugsStored();