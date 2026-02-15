let order = prompt("Please enter your desired froyo flavors - separated by commas");

let orderArray = order.split(",");
    console.log(orderArray)

let flavorCount = {};
    console.log(flavorCount)

for (let i = 0; i < orderArray.length; ++i) {
    let currentFlavor = orderArray[i];

    if (!flavorCount[currentFlavor]) {
        flavorCount[currentFlavor] = 1;
    }
    else {
        ++flavorCount[currentFlavor];
    }
    console.log(flavorCount);
}