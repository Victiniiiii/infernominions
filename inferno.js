// inferno.js
function saveToggleStates() {
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

function loadToggleStates() {
    const savedToggleStates = localStorage.getItem('toggleStates');
    if (savedToggleStates) {
        toggleStates = JSON.parse(savedToggleStates);
    }
}

document.getElementById('settings-bar').addEventListener('click', function() {
    document.getElementById('settings').classList.toggle('expanded');
});

let toggleStates = [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true];

window.addEventListener('DOMContentLoaded', function() {
    loadToggleStates();
    updateToggleSwitches();
});

function updateToggleSwitches() {
    document.querySelectorAll('.toggle-switch').forEach(function(toggleSwitch, index) {
        if (toggleStates[index]) {
            toggleSwitch.classList.add('active');
        } else {
            toggleSwitch.classList.remove('active');
        }
    });
}

document.querySelectorAll('.toggle-switch').forEach(function(toggleSwitch, index) {
    toggleSwitch.addEventListener('click', function() {
        toggleSwitch.classList.toggle('active');
        toggleStates[index] = !toggleStates[index];
        console.log(`Toggle ${index + 1} is now ${toggleStates[index] ? 'ON' : 'OFF'}`);
        saveToggleStates(); 
        bazaarconnect();
    });
});


async function bazaarconnect() {
    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();

    // BASIC MATERIALS

    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status[toggleStates[4] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status[toggleStates[5] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status[toggleStates[6] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status[toggleStates[0] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);;
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status[toggleStates[1] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status[toggleStates[2] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const ceramicprice = data.products[`HYPERGOLIC_IONIZED_CERAMICS`]?.quick_status[toggleStates[7] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

    const vertexprice = data.products[`INFERNO_VERTEX`]?.quick_status[toggleStates[20] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const apexprice = data.products[`INFERNO_APEX`]?.quick_status[toggleStates[21] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const reaperprice = data.products[`REAPER_PEPPER`]?.quick_status[toggleStates[22] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

    const sulphuriccoalnopeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4).toFixed(0);
    const sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12).toFixed(0);

    let bestsulphuriccoal = [sulphuriccoalnopeppers > sulphuriccoalwithpeppers ? sulphuriccoalwithpeppers : sulphuriccoalnopeppers];
    let usedsulphuriccoal = [sulphuriccoalnopeppers > sulphuriccoalwithpeppers ? "With Peppers" : "No Peppers"];
    const fuelgabagoolwithcrude = (parseFloat(crudegabagoolprice) * 24 + parseFloat(bestsulphuriccoal)).toFixed(0);
    const fuelgabagoolwithverycrude = (parseFloat(verycrudegabagoolprice) / 8 + parseFloat(bestsulphuriccoal)).toFixed(0);    
    let bestfuelgabagool = [fuelgabagoolwithcrude > fuelgabagoolwithverycrude ? fuelgabagoolwithverycrude : fuelgabagoolwithcrude]; 
    let usedfuelgabagool = [fuelgabagoolwithcrude > fuelgabagoolwithverycrude ? "very crude" : "crude"];
    

    // FUELS 

    const infernofuelblockprice = data.products[`INFERNO_FUEL_BLOCK`]?.quick_status[toggleStates[13] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const eyedropbuy = data.products[`CAPSAICIN_EYEDROPS`]?.quick_status[toggleStates[3] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

    const gabagooldistillateprice = data.products[`CRUDE_GABAGOOL_DISTILLATE`]?.quick_status[toggleStates[8] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const blazeroddistillateprice = data.products[`BLAZE_ROD_DISTILLATE`]?.quick_status[toggleStates[9] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const glowstonedistillateprice = data.products[`GLOWSTONE_DISTILLATE`]?.quick_status[toggleStates[10] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const magmacreamdistillateprice = data.products[`MAGMA_CREAM_DISTILLATE`]?.quick_status[toggleStates[11] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const netherwartdistillateprice = data.products[`NETHER_WART_DISTILLATE`]?.quick_status[toggleStates[12] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

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
    
    const entropysurpressorprice = data.products[`ENTROPY_SUPPRESSOR`]?.quick_status[toggleStates[14] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const jalapenobookprice = data.products[`JALAPENO_BOOK`]?.quick_status[toggleStates[15] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const tabasco3price = data.products[`ENCHANTMENT_TABASCO_III`]?.quick_status[toggleStates[16] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const habanerotactics5price = data.products[`ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_V`]?.quick_status[toggleStates[17] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const stuffedchilipepperprice = data.products[`STUFFED_CHILI_PEPPER`]?.quick_status[toggleStates[18] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const cayenne5price = data.products[`ENCHANTMENT_CAYENNE_V`]?.quick_status[toggleStates[19] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const gummyprice = data.products[`ENCHANTMENREHEATED_GUMMY_POLAR_BEART_CAYENNE_V`]?.quick_status[toggleStates[23] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);

    const hypergoliccraft = (parseFloat(verycrudegabagoolprice) * 36 + parseFloat(bestsulphuriccoal) * 301).toFixed(0);    

    var hypergolicgabagoolDiv = document.getElementById("hypergolicgabagool");
    var hypergolicgabagoolText = 'Crafting hypergolic costs ' + hypergoliccraft + ' and  hypergolic gives ' + hypergolicgabagoolprice +' the crude gabagool costs ' + (verycrudegabagoolprice * 36) + ' sulphuric coal costs ' + (bestsulphuriccoal * 301).toFixed(0);
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
    let fuelquality = 1;
    let extraspeeds = 0;
    let apexcount;
    let usedsite; // Fandom or official wiki rates ?
    let miniondailyprofit;
    let ceramic = 0;
    
    extraspeeds += minioncount[minioncountt];
    extraspeeds += beaconlevels[beaconlevel];
    if (scorchedcrystal == true) { extraspeeds += 1;}
    if (minionexpander == true) { extraspeeds += 5;} // minionexpander true olunca html'de diğeri false olmalı
    if (flycatcher == true) {extraspeeds += 20;}
    if (mithrilinfusion == true) {extraspeeds += 10;}
    if (usedfuel == tier1) {fuelquality = 11;}
    else if (usedfuel == tier2) {fuelquality = 16;}
    else if (usedfuel == tier3) {fuelquality = 21;}
    if (minionlevel == 10 || minionlevel == 11) {apexcount = 2}
    else {apexcount = 1}
    if (usedfuel == tier1 || usedfuel == tier2 || usedfuel == tier3) {
        ceramic += ceramicprice;
    }

    let minionactualspeed = 86400 / (( minions[minionlevel] / fuelquality ) / extraspeeds); // this many actions per day
    if (usedsite == fandom) {
        miniondailyprofit = 0;
    } else if (usedsite == wiki) {
        miniondailyprofit = 0;
    }
}

bazaarconnect();



