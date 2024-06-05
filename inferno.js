// inferno.js

document.getElementById('settings-bar').addEventListener('click', function() {
    document.getElementById('settings').classList.toggle('expanded');
});

const toggleStates = [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, true, true, true, true];

document.querySelectorAll('.toggle-switch').forEach(function(toggleSwitch, index) {
    // Set initial state
    if (toggleStates[index]) {
        toggleSwitch.classList.add('active');
    }

    toggleSwitch.addEventListener('click', function() {
        this.classList.toggle('active');
        toggleStates[index] = !toggleStates[index];
        console.log(`Toggle ${index + 1} is now ${toggleStates[index] ? 'ON' : 'OFF'}`);
    });
});

async function bazaarconnect() {
    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();

    // BASIC MATERIALS

    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolsellprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status.sellPrice.toFixed(0);
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status.sellPrice.toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status.sellPrice.toFixed(0);
    const ceramicprice = data.products[`HYPERGOLIC_IONIZED_CERAMICS`]?.quick_status.sellPrice.toFixed(0);

    const sulphuriccoalnopeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4).toFixed(0); // TODO üste çıkar
    const sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12).toFixed(0);

    let bestsulphuriccoal;
    let usedsulphuriccoal;

    if (sulphuriccoalnopeppers>sulphuriccoalwithpeppers) {
        bestsulphuriccoal = sulphuriccoalwithpeppers;
        usedsulphuriccoal = "With Peppers";
    } else {
        bestsulphuriccoal = sulphuriccoalnopeppers;
        usedsulphuriccoal = "No Peppers";
    }

    const fuelgabagoolwithcrude = (parseFloat(crudegabagoolprice) * 24 + parseFloat(bestsulphuriccoal)).toFixed(0);
    const fuelgabagoolwithverycrude = (parseFloat(verycrudegabagoolprice) / 8 + parseFloat(bestsulphuriccoal)).toFixed(0);
    
    let bestfuelgabagool; 
    let usedfuelgabagool;
    
    if (fuelgabagoolwithcrude > fuelgabagoolwithverycrude) {
        bestfuelgabagool = fuelgabagoolwithverycrude;
        usedfuelgabagool = "very crude";
    } else {
        bestfuelgabagool = fuelgabagoolwithcrude;
        usedfuelgabagool = "crude";
    } 

    // FUELS 

    const infernofuelblockprice = data.products[`INFERNO_FUEL_BLOCK`]?.quick_status.sellPrice.toFixed(0);
    const eyedropbuy = data.products[`CAPSAICIN_EYEDROPS`]?.quick_status.sellPrice.toFixed(0);

    const gabagooldistillateprice = data.products[`CRUDE_GABAGOOL_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const blazeroddistillateprice = data.products[`BLAZE_ROD_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const glowstonedistillateprice = data.products[`GLOWSTONE_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const magmacreamdistillateprice = data.products[`MAGMA_CREAM_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const netherwartdistillateprice = data.products[`NETHER_WART_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);

    const t1gabagool = 6 * gabagooldistillateprice + bestfuelgabagool + 2 * infernofuelblockprice;
    const t2gabagool = 6 * gabagooldistillateprice + bestsulphuriccoal + 24 * bestfuelgabagool + 2 * infernofuelblockprice;
    const t3gabagool = 6 * gabagooldistillateprice + 2 * bestsulphuriccoal + 288 * bestfuelgabagool + 2 * infernofuelblockprice;

    const t1blazerod = 6 * blazeroddistillateprice + bestfuelgabagool + 2 * infernofuelblockprice;
    const t2blazerod = 6 * blazeroddistillateprice + bestsulphuriccoal + 24 * bestfuelgabagool + bestfuelgabagool + 2 * infernofuelblockprice;
    const t3blazerod = 6 * blazeroddistillateprice + 2 * bestsulphuriccoal + 288 * bestfuelgabagool + 2 * infernofuelblockprice;

    const t1glowstone = 6 * glowstonedistillateprice + bestfuelgabagool + 2 * infernofuelblockprice;
    const t2glowstone = 6 * glowstonedistillateprice + bestsulphuriccoal + 24 * bestfuelgabagool + bestfuelgabagool + 2 * infernofuelblockprice;
    const t3glowstone = 6 * glowstonedistillateprice + 2 * bestsulphuriccoal + 288 * bestfuelgabagool + 2 * infernofuelblockprice;

    const t1magmacream = 6 * magmacreamdistillateprice + bestfuelgabagool + 2 * infernofuelblockprice;
    const t2magmacream = 6 * magmacreamdistillateprice + bestsulphuriccoal + 24 * bestfuelgabagool + bestfuelgabagool + 2 * infernofuelblockprice;
    const t3magmacream = 6 * magmacreamdistillateprice + 2 * bestsulphuriccoal + 288 * bestfuelgabagool + 2 * infernofuelblockprice;

    const t1netherwart = 6 * netherwartdistillateprice + bestfuelgabagool + 2 * infernofuelblockprice;
    const t2netherwart = 6 * netherwartdistillateprice + bestsulphuriccoal + 24 * bestfuelgabagool + bestfuelgabagool + 2 * infernofuelblockprice;
    const t3netherwart = 6 * netherwartdistillateprice + 2 * bestsulphuriccoal + 288 * bestfuelgabagool + 2 * infernofuelblockprice;

    // CRAFTABLE STUFF
    
    const entropysurpressorprice = data.products[`ENTROPY_SUPPRESSOR`]?.quick_status.buyPrice.toFixed(0);
    const jalapenobookprice = data.products[`JALAPENO_BOOK`]?.quick_status.buyPrice.toFixed(0);
    const tabasco3price = data.products[`ENCHANTMENT_TABASCO_III`]?.quick_status.buyPrice.toFixed(0);
    const habanerotactics5price = data.products[`ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_V`]?.quick_status.buyPrice.toFixed(0);
    const stuffedchilipepperprice = data.products[`STUFFED_CHILI_PEPPER`]?.quick_status.buyPrice.toFixed(0);
    const cayenne5price = data.products[`ENCHANTMENT_CAYENNE_V`]?.quick_status.buyPrice .toFixed(0);



    const hypergoliccraft = (parseFloat(verycrudegabagoolprice) * 36 + parseFloat(bestsulphuriccoal) * 301).toFixed(0);    

    var hypergolicgabagoolDiv = document.getElementById("hypergolicgabagool");
    var hypergolicgabagoolText = 'Crafting hypergolic costs ' + hypergoliccraft + ' and sell order hypergolic gives ' + hypergolicgabagoolprice + " and the buy order gives " + hypergolicgabagoolsellprice +' the crude gabagool costs ' + (verycrudegabagoolprice * 36) + ' sulphuric coal costs ' + (bestsulphuriccoal * 301).toFixed(0);
    hypergolicgabagoolDiv.innerHTML = hypergolicgabagoolText;
    var bestsulphuriccoalDiv = document.getElementById("bestsulphuriccoal");
    var bestsulphuriccoalText = " Best sulphuric coal is " + usedsulphuriccoal + ' with the price of ' + bestsulphuriccoal + " chili peppered coal cost "+sulphuriccoalwithpeppers+" and with no peppers it costs "+sulphuriccoalnopeppers;
    bestsulphuriccoalDiv.innerHTML = bestsulphuriccoalText;
}

function minionprofits() {
    const minions = [1013, 982, 950, 919, 886, 855, 823, 792, 760, 728, 697];
    const minioncount = [18, 36, 54, 72, 90, 108, 126, 144, 162, 180];
    const beaconlevels = [0, 1, 2, 3, 4, 5];
    let scorchedcrystal = false;
    let minionexpander = false;
    let flycatcher = false;
    let mithrilinfusion = false;
    let beaconlevel;
    let minionlevel;
    let minioncountt;
    let fuelquality;
    let extraspeeds;
    let apexcount;
    let usedsite; // Fandom or official wiki rates ?
    let miniondailyprofit;
    
    extraspeeds += minioncount[minioncountt];
    extraspeeds += beaconlevels[beaconlevel];
    if (scorchedcrystal == true) { extraspeeds += 1;}
    if (minionexpander == true) { extraspeeds += 5;} // minionexpander true olunca html'de diğeri false olmalı
    if (flycatcher == true) {extraspeeds += 20;}
    if (mithrilinfusion == true) {extraspeeds += 10;}
    if (usedfuel == tier1) {fuelquality = 11;}
    else if (usedfuel == tier2) {fuelquality = 16;}
    else if (usedfuel == tier3) {fuelquality = 21;}
    else {fuelquality = 1;}
    if (minionlevel == 10 || minionlevel == 11) {apexcount = 2}
    else {apexcount = 1}

    let minionactualspeed = 86400 / (( minions[minionlevel] / fuelquality ) / extraspeeds); // this many actions per day
    if (usedsite == fandom) {
        miniondailyprofit = 0;
    } else if (usedsite == wiki) {
        miniondailyprofit = 0;
    }
}

bazaarconnect();



