let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }
];

parks.forEach(park => {
    if (park.name === "Riverside Park") {
        park.name = "Riverside Greenspace";
    }
});

parks.forEach(park => {
    if (park.name === "Central Park") {
        park.trees.forEach(tree => {
            if (tree.species === "Maple") {
                tree.species = "Sugar Maple";
            }
        });
    }
});

parks.forEach(park => {
    if (park.name === "Central Park") {
        park.trees.push({
            species: "Birch",
            age: 7,
            health: "Good",
            height: 18
        });
    }
});

let centralParkTrees = [];
parks.forEach(park => {
    if (park.name === "Central Park") {
        centralParkTrees = park.trees.map(tree => tree.species);
    }
});

let totalAge = 0;
let totalTrees = 0;
parks.forEach(park => {
    park.trees.forEach(tree => {
        totalAge += tree.age;
        totalTrees++;
    });
});
let averageTreeAge = totalAge / totalTrees;

let tallestTree = null;
let maxHeight = 0;
parks.forEach(park => {
    park.trees.forEach(tree => {
        if (tree.height > maxHeight) {
            maxHeight = tree.height;
            tallestTree = tree;
        }
    });
});

parks.forEach(park => {
    if (park.name === "Central Park") {
        const index = park.facilities.indexOf("playground");
        if (index !== -1) {
            park.facilities.splice(index, 1);
        }
    }
});

let parksJSON = JSON.stringify(parks);

console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(", ")}`);
console.log(`Species in third park: ${parks[2].trees.map(tree =>
