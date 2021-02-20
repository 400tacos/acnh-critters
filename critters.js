/* allFish indexes
0 - number
1 - name
2 - value
3 - location
4 - size
5 - time
6-16 - months
*/
var allFish = [
    [1, "Bitterling", "900", "River", "1", "All day", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [2, "Pale chub", "200", "River", "1", "9 AM - 4 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [3, "Crucian carp", "160", "River", "2", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [4, "Dace", "192", "River", "3", "4 PM - 9 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [5, "Carp", "300", "Pond", "4", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [6, "Koi", "4000", "Pond", "4", "4 PM - 9 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [7, "Goldfish", "1300", "Pond", "1", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [8, "Pop-eyed goldfish", "1300", "Pond", "1", "9 AM - 4 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [9, "Ranchu goldfish", "4500", "Pond", "2", "9 AM - 4 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [10, "Killifish", "300", "Pond", "1", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [11, "Crawfish", "200", "Pond", "2", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [12, "Soft-shelled turtle", "3750", "River", "4", "4 PM - 9 AM", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-"],
    [13, "Snapping Turtle", "5000", "River", "5", "9 PM - 4 AM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [14, "Tadpole", "100", "Pond", "1", "All day", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-"],
    [15, "Frog", "120", "Pond", "2", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [16, "Freshwater goby", "400", "River", "2", "4 PM - 9 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [17, "Loach", "400", "River", "2", "All day", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-"],
    [18, "Catfish", "800", "Pond", "4", "4 PM - 9 AM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [19, "Giant snakehead", "5500", "Pond", "5", "9 AM - 4 PM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [20, "Bluegill", "180", "River", "2", "9 AM - 4 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [21, "Yellow perch", "300", "River", "3", "All day", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)"],
    [22, "Black bass", "320", "River", "4", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [23, "Tilapia", "800", "River", "3", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [24, "Pike", "1800", "River", "5", "All day", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [25, "Pond smelt", "500", "River", "2", "All day", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "-", "(X)"],
    [26, "Sweetfish", "900", "River", "3", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [27, "Cherry salmon", "800", "River (Clifftop)", "3", "4 PM - 9 AM", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "-"],
    [28, "Char", "3800", "River (Clifftop) and Pond", "3", "4 PM - 9 AM", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "-"],
    [29, "Golden trout", "15000", "River (Clifftop)", "3", "4 PM - 9 AM", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "(X)", "(X)", "(X)", "-"],
    [30, "Stringfish", "15000", "River (Clifftop)", "5", "4 PM - 9 AM", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "(X)"],
    [31, "Salmon", "700", "River (Mouth)", "4", "All day", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "-", "-", "-"],
    [32, "King salmon", "1800", "River (Mouth)", "6", "All day", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "-", "-", "-"],
    [33, "Mitten crab", "2000", "River", "2", "4 PM - 9 AM", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-"],
    [34, "Guppy", "1300", "River", "1", "9 AM - 4 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [35, "Nibble fish", "1500", "River", "1", "9 AM - 4 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [36, "Angelfish", "3000", "River", "2", "4 PM - 9 AM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [37, "Betta", "2500", "River", "2", "9 AM - 4 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [38, "Neon tetra", "500", "River", "1", "9 AM - 4 PM", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [39, "Rainbowfish", "800", "River", "1", "9 AM - 4 PM", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [40, "Piranha", "2500", "River", "2", "9 AM - 4 PM & 9 PM - 4 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [41, "Arowana", "10000", "River", "4", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [42, "Dorado", "15000", "River", "5", "4 AM - 9 PM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [43, "Gar", "6000", "Pond", "6", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [44, "Arapaima", "10000", "River", "6", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [45, "Saddled bichir", "4000", "River", "4", "9 PM - 4 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [46, "Sturgeon", "10000", "River (Mouth)", "6", "All day", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [47, "Sea butterfly", "1000", "Sea", "1", "All day", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "(X)"],
    [48, "Sea horse", "1100", "Sea", "1", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [49, "Clown fish", "650", "Sea", "1", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [50, "Surgeonfish", "1000", "Sea", "2", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [51, "Butterfly fish", "1000", "Sea", "2", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [52, "Napoleonfish", "10000", "Sea", "6", "4 AM - 9 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-", "-"],
    [53, "Zebra turkeyfish", "500", "Sea", "3", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [54, "Blowfish", "5000", "Sea", "3", "9 PM - 4 AM", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [55, "Puffer fish", "250", "Sea", "3", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [56, "Anchovy", "200", "Sea", "2", "4 AM - 9 PM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [57, "Horse mackerel", "150", "Sea", "2", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [58, "Barred knifejaw", "5000", "Sea", "3", "All day", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [59, "Sea bass", "400", "Sea", "5", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [60, "Red snapper", "3000", "Sea", "4", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [61, "Dab", "300", "Sea", "3", "All day", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)"],
    [62, "Olive flounder", "800", "Sea", "5", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [63, "Squid", "500", "Sea", "3", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "(X)"],
    [64, "Moray eel", "2000", "Sea", "Narrow", "All day", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-"],
    [65, "Ribbon eel", "600", "Sea", "Narrow", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [66, "Tuna", "7000", "Pier", "6", "All day", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [67, "Blue marlin", "10000", "Pier", "6", "All day", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "-", "(X)", "(X)"],
    [68, "Giant trevally", "4500", "Pier", "5", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [69, "Mahi-mahi", "6000", "Pier", "5", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [70, "Ocean sunfish", "4000", "Sea", "6 (Fin)", "4 AM - 9 PM", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [71, "Ray", "3000", "Sea", "5", "4 AM - 9 PM", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-"],
    [72, "Saw shark", "12000", "Sea", "6 (Fin)", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [73, "Hammerhead shark", "8000", "Sea", "6 (Fin)", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [74, "Great white shark", "15000", "Sea", "6 (Fin)", "4 PM - 9 AM", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [75, "Whale shark", "13000", "Sea", "6 (Fin)", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [76, "Suckerfish", "1500", "Sea", "4 (Fin)", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [77, "Football fish", "2500", "Sea", "4", "4 PM - 9 AM", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [78, "Oarfish", "9000", "Sea", "6", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)"],
    [79, "Barreleye", "15000", "Sea", "2", "9 PM - 4 AM", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [80, "Coelacanth", "15000", "Sea (Rainy Days)", "6", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"]
];

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

var allDeep = [
    [1, "Seaweed", "NH-Icon-seaweed.png", "600", "Large", "Stationary", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)"],
    [2, "Sea grapes", "NH-Icon-seagrapes.png", "900", "Small", "Stationary", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [3, "Sea cucumber", "NH-Icon-seacucumber.png", "500", "Medium", "Slow consistent movement", "All day", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [4, "Sea pig", "NH-Icon-seapig.png", "10,000", "Small", "Quick long lunges", "4pm - 9am", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [5, "Sea star", "NH-Icon-seastar.png", "500", "Small", "Slow short lunges", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [6, "Sea urchin", "NH-Icon-seaurchin.png", "1,700", "Small", "Slow consistent movement", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [7, "Slate pencil urchin", "NH-Icon-slatepencilurchin.png", "2,000", "Medium", "Moderate consistent movement", "4pm - 9am", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [8, "Sea anemone", "NH-Icon-seaanemone.png", "500", "Large", "Stationary", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [9, "Moon jellyfish", "NH-Icon-moonjellyfish.png", "600", "Small", "Slow consistent movement", "All day", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [10, "Sea slug", "NH-Icon-seaslug.png", "600", "Tiny", "Slow consistent movement", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [11, "Pearl oyster", "NH-Icon-pearloyster.png", "2,800", "Small", "Moderate long lunges", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [12, "Mussel", "NH-Icon-mussel.png", "1,500", "Small", "Slow consistent movement", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [13, "Oyster", "NH-Icon-oyster.png", "1,100", "Small", "Moderate short lunges", "All day", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [14, "Scallop", "NH-Icon-scallop.png", "1,200", "Medium", "Slow long lunges", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [15, "Whelk", "NH-Icon-whelk.png", "1,000", "Small", "Slow consistent movement", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [16, "Turban shell", "NH-Icon-turbanshell.png", "1,000", "Small", "Slow", "All day", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [17, "Abalone", "NH-Icon-abalone.png", "2,000", "Medium", "Moderate consistent movement", "4pm - 9am", "(X)", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [18, "Gigas giant clam", "NH-Icon-gigasgiantclam.png", "15,000", "Huge", "Quick long lunges", "All day", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [19, "Chambered nautilus", "NH-Icon-chamberednautilus.png", "1,800", "Medium", "Slow", "4pm - 9am", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "(X)", "(X)", "(X)", "-"],
    [20, "Octopus", "NH-Icon-octopus.png", "1,200", "Medium", "Moderate long lunges", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [21, "Umbrella octopus", "NH-Icon-umbrellaoctopus.png", "6,000", "Small", "Quick long lunges", "All day", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "(X)", "(X)", "(X)", "-"],
    [22, "Vampire squid", "NH-Icon-vampiresquid.png", "10,000", "Medium", "Quick long lunges", "5pm - 9am", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [23, "Firefly squid", "NH-Icon-fireflysquid.png", "1,400", "Tiny", "Slow", "9pm - 4am", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-"],
    [24, "Gazami crab", "NH-Icon-gazamicrab.png", "2,200", "Medium", "Moderate long lunges", "All day", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-"],
    [25, "Dungeness crab", "NH-Icon-dungenesscrab.png", "1,900", "Medium", "Moderate consistent movement", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [26, "Snow crab", "NH-Icon-snowcrab.png", "6,000", "Large", "Quick short lunges", "All day", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [27, "Red king crab", "NH-Icon-redkingcrab.png", "8,000", "Large", "Quick", "All day", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)"],
    [28, "Acorn barnacle", "NH-Icon-acornbarnacle.png", "600", "Tiny", "Stationary", "All day", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [29, "Spider crab", "NH-Icon-spidercrab.png", "12,000", "Huge", "Quick", "All day", "-", "-", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "-"],
    [30, "Tiger prawn", "NH-Icon-tigerprawn.png", "3,000", "Small", "Moderate consistent movement", "4pm - 9am", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-", "-"],
    [31, "Sweet shrimp", "NH-Icon-sweetshrimp.png", "1,400", "Small", "Slow", "4pm - 9am", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)"],
    [32, "Mantis shrimp", "NH-Icon-mantisshrimp.png", "2,500", "Small", "Quick short lunges", "4pm - 9am", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)"],
    [33, "Spiny lobster", "NH-Icon-spinylobster.png", "5,000", "Large", "Fast", "9pm - 4am", "-", "-", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)"],
    [34, "Lobster", "NH-Icon-lobster.png", "4,500", "Large", "Quick", "All day", "(X)", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-", "-", "-", "(X)"],
    [35, "Giant isopod", "NH-Icon-giantisopod.png", "12,000", "Medium", "Quick long lunges", "9am - 4pm & 9pm - 4am", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [36, "Horseshoe Crab", "NH-Icon-horseshoecrab.png", "2,500", "Medium", "Quick short lunges", "9pm - 4am", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)", "-", "-", "-"],
    [37, "Sea pineapple", "NH-Icon-seapineapple.png", "1,500", "Small", "Slow long lunges", "All day", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-", "-", "-"],
    [38, "Spotted garden eel", "NH-Icon-spottedgardeneel.png", "1,100", "Small", "Slow consistent movement", "4am - 9pm", "-", "-", "-", "-", "(X)", "(X)", "(X)", "(X)", "(X)", "(X)", "-", "-"],
    [39, "Flatworm", "NH-Icon-flatworm.png", "700", "Tiny", "Slow short movement", "4pm - 9am", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "-", "-", "-"],
    [40, "Venus flower basket", "NH-Icon-venusflowerbasket.png", "5,000", "Medium", "Quick long lunges", "All day", "(X)", "(X)", "-", "-", "-", "-", "-", "-", "-", "(X)", "(X)", "(X)"]
];

var allCritters = [];
var monthOffset = 6;
var currentMonth = new Date().getMonth();
var submitType = "fish";

var fishTable = document.getElementById("fishTable");
var bugTable = document.getElementById("bugTable");
var deepTable = document.getElementById("deepTable");
var monthMenu = document.getElementById("monthMenu");

var selectedColor = "lightgray";
var currentHours = new Date().getHours();

var myCritters = [];
var neededCritters = [];

// Set the current month
makeSelectionTables();
document.getElementById("month").innerText = checkMonth(currentMonth);
generateMonthSelector();
fishMode();

function makeSelectionTables() {
    // Create fish selection table
    generateSelectionTable(fishTable, "fish", allFish.length);
    setBackgrounds("fish", allFish.length);
    addListeners("fish");

    // Load fish selections from localstorage
    //checkIfFishStored();

    // Create bug selection table
    generateSelectionTable(bugTable, "bug", allBugs.length);
    setBackgrounds("bug", allBugs.length);
    addListeners("bug");

    // Load bug selections from localstorage
    //checkIfBugsStored();

    generateSelectionTable(deepTable, "deep", allDeep.length);
    setBackgrounds("deep", allDeep.length);
    addListeners("deep");
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
    else if (type == "deep") {allCritters = allDeep;}

    for (var row = 0; row < 5; row++) {
        let thisRow = table.insertRow();

        for (var col = row; col < limit; col = col + 5) {
            //console.log(allCritters[col][1])
            let td = thisRow.insertCell();
            let critterName = allCritters[col][1];
            let text = document.createTextNode(critterName);
            td.appendChild(text);
            td.id = type + col;
        }
    }
}

function setBackgrounds(type, limit) {

    for (var i = 0; i < limit; i++) {
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

function addListeners(type) {
    document.getElementById(type + 0).addEventListener('click', bindClick(type,0));
    document.getElementById(type + 1).addEventListener('click', bindClick(type,1));
    document.getElementById(type + 2).addEventListener('click', bindClick(type,2));
    document.getElementById(type + 3).addEventListener('click', bindClick(type,3));
    document.getElementById(type + 4).addEventListener('click', bindClick(type,4));
    document.getElementById(type + 5).addEventListener('click', bindClick(type,5));
    document.getElementById(type + 6).addEventListener('click', bindClick(type,6));
    document.getElementById(type + 7).addEventListener('click', bindClick(type,7));
    document.getElementById(type + 8).addEventListener('click', bindClick(type,8));
    document.getElementById(type + 9).addEventListener('click', bindClick(type,9));
    document.getElementById(type + 10).addEventListener('click', bindClick(type,10));
    document.getElementById(type + 11).addEventListener('click', bindClick(type,11));
    document.getElementById(type + 12).addEventListener('click', bindClick(type,12));
    document.getElementById(type + 13).addEventListener('click', bindClick(type,13));
    document.getElementById(type + 14).addEventListener('click', bindClick(type,14));
    document.getElementById(type + 15).addEventListener('click', bindClick(type,15));
    document.getElementById(type + 16).addEventListener('click', bindClick(type,16));
    document.getElementById(type + 17).addEventListener('click', bindClick(type,17));
    document.getElementById(type + 18).addEventListener('click', bindClick(type,18));
    document.getElementById(type + 19).addEventListener('click', bindClick(type,19));
    document.getElementById(type + 20).addEventListener('click', bindClick(type,20));
    document.getElementById(type + 21).addEventListener('click', bindClick(type,21));
    document.getElementById(type + 22).addEventListener('click', bindClick(type,22));
    document.getElementById(type + 23).addEventListener('click', bindClick(type,23));
    document.getElementById(type + 24).addEventListener('click', bindClick(type,24));
    document.getElementById(type + 25).addEventListener('click', bindClick(type,25));
    document.getElementById(type + 26).addEventListener('click', bindClick(type,26));
    document.getElementById(type + 27).addEventListener('click', bindClick(type,27));
    document.getElementById(type + 28).addEventListener('click', bindClick(type,28));
    document.getElementById(type + 29).addEventListener('click', bindClick(type,29));
    document.getElementById(type + 30).addEventListener('click', bindClick(type,30));
    document.getElementById(type + 31).addEventListener('click', bindClick(type,31));
    document.getElementById(type + 32).addEventListener('click', bindClick(type,32));
    document.getElementById(type + 33).addEventListener('click', bindClick(type,33));
    document.getElementById(type + 34).addEventListener('click', bindClick(type,34));
    document.getElementById(type + 35).addEventListener('click', bindClick(type,35));
    document.getElementById(type + 36).addEventListener('click', bindClick(type,36));
    document.getElementById(type + 37).addEventListener('click', bindClick(type,37));
    document.getElementById(type + 38).addEventListener('click', bindClick(type,38));
    document.getElementById(type + 39).addEventListener('click', bindClick(type,39));
    if (type == "deep") return; // Exit if deep sea
    document.getElementById(type + 40).addEventListener('click', bindClick(type,40));
    document.getElementById(type + 41).addEventListener('click', bindClick(type,41));
    document.getElementById(type + 42).addEventListener('click', bindClick(type,42));
    document.getElementById(type + 43).addEventListener('click', bindClick(type,43));
    document.getElementById(type + 44).addEventListener('click', bindClick(type,44));
    document.getElementById(type + 45).addEventListener('click', bindClick(type,45));
    document.getElementById(type + 46).addEventListener('click', bindClick(type,46));
    document.getElementById(type + 47).addEventListener('click', bindClick(type,47));
    document.getElementById(type + 48).addEventListener('click', bindClick(type,48));
    document.getElementById(type + 49).addEventListener('click', bindClick(type,49));
    document.getElementById(type + 50).addEventListener('click', bindClick(type,50));
    document.getElementById(type + 51).addEventListener('click', bindClick(type,51));
    document.getElementById(type + 52).addEventListener('click', bindClick(type,52));
    document.getElementById(type + 53).addEventListener('click', bindClick(type,53));
    document.getElementById(type + 54).addEventListener('click', bindClick(type,54));
    document.getElementById(type + 55).addEventListener('click', bindClick(type,55));
    document.getElementById(type + 56).addEventListener('click', bindClick(type,56));
    document.getElementById(type + 57).addEventListener('click', bindClick(type,57));
    document.getElementById(type + 58).addEventListener('click', bindClick(type,58));
    document.getElementById(type + 59).addEventListener('click', bindClick(type,59));
    document.getElementById(type + 60).addEventListener('click', bindClick(type,60));
    document.getElementById(type + 61).addEventListener('click', bindClick(type,61));
    document.getElementById(type + 62).addEventListener('click', bindClick(type,62));
    document.getElementById(type + 63).addEventListener('click', bindClick(type,63));
    document.getElementById(type + 64).addEventListener('click', bindClick(type,64));
    document.getElementById(type + 65).addEventListener('click', bindClick(type,65));
    document.getElementById(type + 66).addEventListener('click', bindClick(type,66));
    document.getElementById(type + 67).addEventListener('click', bindClick(type,67));
    document.getElementById(type + 68).addEventListener('click', bindClick(type,68));
    document.getElementById(type + 69).addEventListener('click', bindClick(type,69));
    document.getElementById(type + 70).addEventListener('click', bindClick(type,70));
    document.getElementById(type + 71).addEventListener('click', bindClick(type,71));
    document.getElementById(type + 72).addEventListener('click', bindClick(type,72));
    document.getElementById(type + 73).addEventListener('click', bindClick(type,73));
    document.getElementById(type + 74).addEventListener('click', bindClick(type,74));
    document.getElementById(type + 75).addEventListener('click', bindClick(type,75));
    document.getElementById(type + 76).addEventListener('click', bindClick(type,76));
    document.getElementById(type + 77).addEventListener('click', bindClick(type,77));
    document.getElementById(type + 78).addEventListener('click', bindClick(type,78));
    document.getElementById(type + 79).addEventListener('click', bindClick(type,79));
}

function bindClick(type, i) {
    return function () {
        console.log("you clicked " + type + i);
        let button = document.getElementById(type + i);

        if (button.style.backgroundColor == selectedColor) { // If button already selected
            button.style.backgroundColor = "black";
            for (rem = 0; rem < myCritters.length; rem++) {
                if (myCritters[rem] == type+i) {
                    myCritters.splice(rem, 1);
                    sortCritters();
                }
            }
        } else { // If button not selected
            button.style.backgroundColor = selectedColor;
            myCritters.push(type+i);
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


function checkIfFishStored() {
    if (localStorage.getItem("myFish") === null) {
        console.log("No fish stored.");
    } else {
        console.log("Found fish...");
        parseStored(localStorage.myFish, "fish");
    }
}

function checkIfBugsStored() {
    if (localStorage.getItem("myBugs") === null) {
        console.log("No bugs stored.");
    } else {
        console.log("Found bugs...");
        parseStored(localStorage.myBugs, "bug");
    }
}

function parseStored(crittersString, type) {
    // Splits loaded data into a temporary array
    console.log(crittersString);
    let tempArray = crittersString.split(",");

    // Pushes everything from the temporary array
    for (i = 0; i < tempArray.length; i++) {
        let newCritter = parseInt(tempArray[i]);
        if (isNaN(newCritter) == false) {
            myCritters.push(type+newCritter);
        }
    }

    // Colors the boxes
    for (i = 0; i < myCritters.length; i++) {
        let button = document.getElementById(myCritters[i]);
        if (myCritters[i] !== "") {
            button.style.backgroundColor = selectedColor;
        }
    }
}

// Run when user does some action
function clickBox() {
    getNeededCritters();
    saveChoices();
}

function saveChoices(type) {
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

    // Set arrays and monthOffset
    if (submitType == "fish") {allCritters = allFish; monthOffset = 6;}
    else if (submitType == "bug")  {allCritters = allBugs; monthOffset = 5;}
    else if (submitType == "deep")  {allCritters = allDeep; monthOffset = 7;}

    for (i = 0; i < allCritters.length; i++) {
        if (myCritters.includes(submitType + i)) {
            console.log("Already have " + allCritters[i][1]);
        } // Checks the column associated with this month 
        else if (allCritters[i][currentMonth + monthOffset] == "(X)") {
            neededCritters.push(submitType+i);
        } else {
            //console.log(allCritters[i][1] + " needed, but not currently available.");
        }
    }
    console.log(neededCritters);
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
        thisCritter = thisCritter.replace("fish","");
        thisCritter = thisCritter.replace("bug","");
        thisCritter = thisCritter.replace("deep","");
        let thisRow = outputTable.insertRow();
        let number, name, image, value, loc, hours, months;
        let size = 0;

        // Sets critter info
        if (submitType == "fish") {
            number = allCritters[thisCritter][0];
            name = allCritters[thisCritter][1];
            image = "";
            value = allCritters[thisCritter][2];
            loc = allCritters[thisCritter][3];
            size = allCritters[thisCritter][4];
            hours = allCritters[thisCritter][5];
            months = printMonths(number - 1);
        } else if (submitType == "bug") {
            number = allCritters[thisCritter][0];
            name = allCritters[thisCritter][1];
            image = "";
            value = allCritters[thisCritter][2];
            loc = allCritters[thisCritter][3];
            hours = allCritters[thisCritter][monthOffset - 1];
            months = printMonths(number - 1);
        } else if (submitType == "deep") {
            number = allCritters[thisCritter][0];
            name = allCritters[thisCritter][1];
            image = "";
            value = allCritters[thisCritter][3];
            loc = allCritters[thisCritter][4];
            size = allCritters[thisCritter][5];
            hours = allCritters[thisCritter][monthOffset - 1];
            months = printMonths(number - 1);
        }

        hours = checkTime(name, hours);

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

            // Check if col to highlight
            let lastCol = false;
            if (submitType == "bug" && col == 6) lastCol = true;
            else if (col == 7) lastCol = true;

            // Highlights
            if (lastCol && months.endsWith("month!")) {
                //console.log(allCritters[thisCritter][1] + " leaving soon.");
                td.style.backgroundColor = "darkred";
            } else if (lastCol && months.endsWith("month.")) {
                //console.log(allCritters[thisCritter][1] + " new.");
                td.style.backgroundColor = "darkblue";
            } else if (lastCol && hours.endsWith("*")) {
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
            temp = temp.substring(0, 3);
            output += temp + ", ";
        }
    }
    // Remove last comma
    output = output.slice(0, -2);

    if (output == "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec") {
        return "All months";
    }
    
    
    else if ((allCritters[critter][currentMonth + monthOffset] == "(X)") &&
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
    let ul = document.getElementById("monthMenu");

    for (i = 0; i < 12; i++) {
        let month = checkMonth(i).substring(0, 3);

        var li = document.createElement("div");
        li.appendChild(document.createTextNode(month));
        li.setAttribute("id", "month" + i);
        li.setAttribute("class", "col btn btn-info");

        ul.appendChild(li);
    }

    addMonthListeners();
}

// Time-related functions
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
    return function () {
        console.log("you clicked " + checkMonth(month));
        currentMonth = month;
        let button = document.getElementById("month" + month);

        for (i = 0; i < 12; i++) {
            document.getElementById("month" + i).style.backgroundColor = "#17a2b8";
        }

        button.style.backgroundColor = "#28a745";
    };
}

function checkTime(name, hours) {
    if (hours == "All day") {
        return hours + "*";
        // Fish
    } else if (hours == "9 AM - 4 PM" && (9 <= currentHours && currentHours < 16)) {
        return hours + "*";
    } else if (hours == "9 PM - 4 AM" && (21 <= currentHours || currentHours < 4)) {
        return hours + "*";
    } else if (hours == "4 PM - 9 AM" && (16 <= currentHours || currentHours < 9)) {
        return hours + "*";
        // Bugs
    } else if (hours == "4 AM - 7 PM" && (4 <= currentHours && currentHours < 19)) {
        return hours + "*";
    } else if (hours == "8 AM - 4 PM" && (8 <= currentHours && currentHours < 16)) {
        return hours + "*";
    } else if (hours == "8 AM - 5 PM" && (8 <= currentHours && currentHours < 17)) {
        return hours + "*";
    } else if (hours == "8 AM - 7 PM" && (8 <= currentHours && currentHours < 19)) {
        return hours + "*";
    } else if (hours == "5 PM - 8 AM" && (17 <= currentHours || currentHours < 8)) {
        return hours + "*";
    } else if (hours == "7 PM - 4 AM" && (19 <= currentHours || currentHours < 4)) {
        return hours + "*";
    } else if (hours == "4 PM - 11 PM" && (16 <= currentHours && currentHours < 23)) {
        return hours + "*";
    } else if (hours == "7 PM - 8 AM" && (19 <= currentHours || currentHours < 8)) {
        return hours + "*";
    } else if (hours == "4 AM - 8 AM & 4 PM - 7 PM" && (4 <= currentHours < 8 || 16 <= currentHours < 19)) {
        return hours + "*";
    } else {
        console.log(name + " NA " + hours);
        return hours;
    }
}