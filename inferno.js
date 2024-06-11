// inferno.js

// TODO: Compactors, Numbers cant be negative, T3 profit is very too much from vertexes, Nether wart dist t3 NaN, how much coins under the togglestates, every item in toggles, clear the code a bit
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

var htmlinfernoresulttext = document.getElementById("infernoprofitresults");
htmlinfernoresulttext.innerHTML = "Press the calculate button at the top right to start.";

async function bazaarconnect() {
    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();
            
    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status[toggleStates[0] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);;
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status[toggleStates[1] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status[toggleStates[4] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status[toggleStates[5] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status[toggleStates[2] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status[toggleStates[6] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const enchantedsnowprice = data.products[`ENCHANTED_SNOW_BLOCK`]?.quick_status.sellPrice.toFixed(0);
    const enchantedslimeballprice = data.products[`ENCHANTED_SLIME_BALL`]?.quick_status.sellPrice.toFixed(0); 
    var sulphuriccoalprice = data.products[`SULPHURIC_COAL`]?.quick_status.sellPrice.toFixed(0); 
    var kelvininventerprice = data.products[`KELVIN_INVERTER`]?.quick_status.sellPrice.toFixed(0); 
    var enchantedpaperprice = data.products[`ENCHANTED_PAPER`]?.quick_status.sellPrice.toFixed(0);     
    var woodsingularityprice = data.products[`WOOD_SINGULARITY`]?.quick_status.sellPrice.toFixed(0);  
    var enchantedironblockprice = data.products[`ENCHANTED_IRON_BLOCK`]?.quick_status.sellPrice.toFixed(0);     
    var enchantedbrownmushroomblockprice = data.products[`ENCHANTED_HUGE_MUSHROOM_1`]?.quick_status.sellPrice.toFixed(0);    
    var enchantedrabbithideprice = data.products[`ENCHANTED_RABBIT_HIDE`]?.quick_status.sellPrice.toFixed(0);     
    var voltaprice = data.products[`VOLTA`]?.quick_status.sellPrice.toFixed(0);     

    var entropysurpressorprice = data.products[`ENTROPY_SUPPRESSOR`]?.quick_status[toggleStates[14] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var jalapenobookprice = data.products[`JALAPENO_BOOK`]?.quick_status[toggleStates[15] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var habanerotactics4price = data.products[`ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_4`]?.quick_status[toggleStates[17] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var stuffedchilipepperprice = data.products[`STUFFED_CHILI_PEPPER`]?.quick_status[toggleStates[18] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var cayenne4price = data.products[`ENCHANTMENT_CAYENNE_4`]?.quick_status[toggleStates[19] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    console.log("cayenne4price",cayenne4price);
    var gummyprice = data.products[`REHEATED_GUMMY_POLAR_BEAR`]?.quick_status[toggleStates[23] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);   
    
    hypergoliccraftprice = 75.25 * parseFloat(enchantedsulphurprice) + 6912 * parseFloat(crudegabagoolprice) + 1204 * parseFloat(enchantedcoalprice); 
    hypergoliccraftprice = Math.round(hypergoliccraftprice).toLocaleString();
    hypergolicgabagoolprice = Math.round(hypergolicgabagoolprice).toLocaleString();
    hypergolicgabagoolcraft.innerHTML = `Crafting Hypergolic Gabagool costs ${hypergoliccraftprice} and buying it will cost ${hypergolicgabagoolprice} coins.`;

    var sulphuriccoalnopeppers = (parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4;
    var sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12);
    sulphuriccoalprice = Math.round(sulphuriccoalprice).toLocaleString();
    sulphuriccoalnopeppers = Math.round(sulphuriccoalnopeppers).toLocaleString();
    sulphuriccoalwithpeppers = Math.round(sulphuriccoalwithpeppers).toLocaleString();
    sulphuriccoalcraft.innerHTML = `Crafting Sulphuric Coal with no peppers costs ${sulphuriccoalnopeppers} coins, with peppers it costs ${sulphuriccoalwithpeppers} coins, and buying it will cost ${sulphuriccoalprice} coins.`;  

    var gummycraft = parseFloat(enchantedsnowprice) * 4 + parseFloat(enchantedslimeballprice) * 4 + parseFloat(chilipepperprice) * 4;
    gummycraft = Math.round(gummycraft).toLocaleString();
    gummyprice = Math.round(gummyprice).toLocaleString();
    gummybearcraft.innerHTML = `Crafting Re-heated Gummy Polar Bear costs ${gummycraft} coins and buying it costs ${gummyprice} coins.`;

    var entropycraft2 = parseFloat(crudegabagoolprice) * 9216 + parseFloat(enchantedsulphurprice) * 132 + parseFloat(enchantedcoalprice) * 2112 + parseFloat(chilipepperprice) * 32 + parseFloat(kelvininventerprice) * 4;
    entropycraft2 = Math.round(entropycraft2).toLocaleString();
    entropysurpressorprice = Math.round(entropysurpressorprice).toLocaleString();
    entropycraft.innerHTML = `Crafting Entropy Suppressor costs ${entropycraft2} coins and buying it costs ${entropysurpressorprice} coins.`;

    jalapenorecipe = parseFloat(chilipepperprice) * 160 + parseFloat(enchantedpaperprice) * 3 ;
    jalapenorecipe = Math.round(jalapenorecipe).toLocaleString();
    jalapenobookprice = Math.round(jalapenobookprice).toLocaleString();
    jalapenocraft.innerHTML = `Crafting Jalapeno Book costs ${jalapenorecipe} coins and buying it costs ${jalapenobookprice} coins.`;

    cayennerecipe = parseFloat(chilipepperprice) * 32 + parseFloat(enchantedironblockprice) * 4 + parseFloat(woodsingularityprice);
    cayenne4price = Math.round(cayenne4price).toLocaleString();
    cayennerecipe = Math.round(cayennerecipe).toLocaleString();
    cayennecraft.innerHTML = `Crafting Cayenne IV Book costs ${cayennerecipe} coins and buying it costs ${cayenne4price} coins.`;

    habanerorecipe = parseFloat(stuffedchilipepperprice) * 32 + parseFloat(enchantedbrownmushroomblockprice) * 16 + parseFloat(enchantedrabbithideprice) * 16 + parseFloat(voltaprice) * 8 ;
    habanerorecipe = Math.round(habanerorecipe).toLocaleString();
    habanerotactics4price = Math.round(habanerotactics4price).toLocaleString();
    habanerocraft.innerHTML = `Crafting Habanero Tactics IV Book costs ${habanerorecipe} coins and buying it costs ${habanerotactics4price} coins.`;

    stuffedrecipe = parseFloat(chilipepperprice) * 160;
    stuffedrecipe = Math.round(stuffedrecipe).toLocaleString();
    stuffedchilipepperprice = Math.round(stuffedchilipepperprice).toLocaleString();
    stuffedchilicraft.innerHTML = `Crafting Stuffed Chili Pepper costs ${stuffedrecipe} coins and buying it costs ${stuffedchilipepperprice} coins.`;
}

async function minionprofits() {

    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status[toggleStates[0] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);;
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status[toggleStates[1] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status[toggleStates[4] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status[toggleStates[5] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status[toggleStates[2] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const ceramicprice = data.products[`HYPERGOLIC_IONIZED_CERAMICS`]?.quick_status[toggleStates[7] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const vertexprice = data.products[`INFERNO_VERTEX`]?.quick_status[toggleStates[20] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const apexprice = data.products[`INFERNO_APEX`]?.quick_status[toggleStates[21] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const reaperprice = data.products[`REAPER_PEPPER`]?.quick_status[toggleStates[22] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const magmacreamprice = data.products[`MAGMA_CREAM`]?.quick_status.sellPrice.toFixed(0);
    const blazerodprice = data.products[`BLAZE_ROD`]?.quick_status.sellPrice.toFixed(0);
    const netherwartprice = data.products[`NETHER_STALK`]?.quick_status.sellPrice.toFixed(0);
    const glowstonedustprice = data.products[`GLOWSTONE_DUST`]?.quick_status.sellPrice.toFixed(0);

    const sulphuriccoalnopeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4).toFixed(0);
    const sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12).toFixed(0);
    let bestsulphuriccoal = [sulphuriccoalnopeppers > sulphuriccoalwithpeppers ? sulphuriccoalwithpeppers : sulphuriccoalnopeppers];
    const fuelgabagoolwithcrude = (parseFloat(crudegabagoolprice) * 24 + parseFloat(bestsulphuriccoal)).toFixed(0);
    const fuelgabagoolwithverycrude = (parseFloat(verycrudegabagoolprice) / 8 + parseFloat(bestsulphuriccoal)).toFixed(0);    
    let bestfuelgabagool = [fuelgabagoolwithcrude > fuelgabagoolwithverycrude ? fuelgabagoolwithverycrude : fuelgabagoolwithcrude]; 

    let extraspeeds = 0;

    var htmlminioncount = document.getElementById('minioncount').value;
    if (htmlminioncount < 1 || htmlminioncount > 31) {
        htmlinfernoresulttext.innerHTML = "You must enter a minion count value between 1 and 31.";
    } else if (htmlminioncount > 0 && htmlminioncount < 11) {extraspeeds += htmlminioncount * 18}
    else if (htmlminioncount > 10 && htmlminioncount < 33) {extraspeeds += 180}
    else {console.log("Minion count error.")}

    var htmlminiontier = document.getElementById('miniontier').value;
    var apexCount = 0;
    var minionwaitingtime = 0;
    if (htmlminiontier == "t1") {minionwaitingtime = 1013; apexCount = 1;}
    else if (htmlminiontier == "t2") {minionwaitingtime = 982; apexCount = 1;}
    else if (htmlminiontier == "t3") {minionwaitingtime = 950; apexCount = 1;}
    else if (htmlminiontier == "t4") {minionwaitingtime = 919; apexCount = 1;}
    else if (htmlminiontier == "t5") {minionwaitingtime = 886; apexCount = 1;}
    else if (htmlminiontier == "t6") {minionwaitingtime = 855; apexCount = 1;}
    else if (htmlminiontier == "t7") {minionwaitingtime = 823; apexCount = 1;}
    else if (htmlminiontier == "t8") {minionwaitingtime = 792; apexCount = 1;}
    else if (htmlminiontier == "t9") {minionwaitingtime = 760; apexCount = 1;}
    else if (htmlminiontier == "t10") {minionwaitingtime = 728; apexCount = 2;}
    else if (htmlminiontier == "t11") {minionwaitingtime = 697; apexCount = 2;}

    const infernofuelblockprice = data.products[`INFERNO_FUEL_BLOCK`]?.quick_status[toggleStates[13] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const gabagooldistillateprice = data.products[`CRUDE_GABAGOOL_DISTILLATE`]?.quick_status[toggleStates[8] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const blazeroddistillateprice = data.products[`BLAZE_ROD_DISTILLATE`]?.quick_status[toggleStates[9] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const glowstonedistillateprice = data.products[`GLOWSTONE_DISTILLATE`]?.quick_status[toggleStates[10] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const magmacreamdistillateprice = data.products[`MAGMA_CREAM_DISTILLATE`]?.quick_status[toggleStates[11] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    const netherwartdistillateprice = data.products[`NETHER_WART_DISTILLATE`]?.quick_status[toggleStates[12] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);       

    var htmlfueltype = document.getElementById("fueltype").value;
    var fuelmultiplier = 1;
    var specialproduction = 0; var specialfueloutput = 0;
    var checkifitst3 = 0;
    var expenses = 0;
    if (htmlfueltype == "nothing") {fuelmultiplier = 1; checkifitst3 = 0;}
    else if (htmlfueltype == "t1-gabagool") {fuelmultiplier = 11; checkifitst3 = 0; specialfueloutput+= parseFloat(crudegabagoolprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(gabagooldistillateprice) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t1-blazerod") {fuelmultiplier = 11; checkifitst3 = 0; specialfueloutput+= parseFloat(blazerodprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(blazeroddistillateprice) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t1-glowstone") {fuelmultiplier = 11; checkifitst3 = 0; specialfueloutput+= parseFloat(glowstonedustprice*2.5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(glowstonedistillateprice) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t1-magmacream") {fuelmultiplier = 11; checkifitst3 = 0; specialfueloutput+= parseFloat(magmacreamprice*2); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(magmacreamdistillateprice) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t1-netherwart") {fuelmultiplier = 11; checkifitst3 = 0; specialfueloutput+= parseFloat(netherwartprice*5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(netherwartdistillateprice) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t2-gabagool") {fuelmultiplier = 16; checkifitst3 = 0; specialfueloutput+= parseFloat(crudegabagoolprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(gabagooldistillateprice) + parseFloat(bestsulphuriccoal) + 24 * parseFloat(bestfuelgabagool) + parseFloat(bestfuelgabagool)+ 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t2-blazerod") {fuelmultiplier = 16; checkifitst3 = 0; specialfueloutput+= parseFloat(blazerodprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(blazeroddistillateprice) + parseFloat(bestsulphuriccoal) + 24 * parseFloat(bestfuelgabagool) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t2-glowstone") {fuelmultiplier = 16; checkifitst3 = 0; specialfueloutput+= parseFloat(glowstonedustprice*2.5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(glowstonedistillateprice) + parseFloat(bestsulphuriccoal) + 24 * parseFloat(bestfuelgabagool) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t2-magmacream") {fuelmultiplier = 16; checkifitst3 = 0; specialfueloutput+= parseFloat(magmacreamprice*2); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(magmacreamdistillateprice) + parseFloat(bestsulphuriccoal) + 24 * parseFloat(bestfuelgabagool) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t2-netherwart") {fuelmultiplier = 16; checkifitst3 = 0; specialfueloutput+= nparseFloat(etherwartprice*5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(netherwartdistillateprice) + parseFloat(bestsulphuriccoal) + 24 * parseFloat(bestfuelgabagool) + parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t3-gabagool") {fuelmultiplier = 21; checkifitst3 = 1; specialfueloutput+= parseFloat(crudegabagoolprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(gabagooldistillateprice) + 25 * parseFloat(bestsulphuriccoal) + 288 * parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t3-blazerod") {fuelmultiplier = 21; checkifitst3 = 1; specialfueloutput+= parseFloat(blazerodprice); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(blazeroddistillateprice) + 25 * parseFloat(bestsulphuriccoal) + 288 * parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t3-glowstone") {fuelmultiplier = 21; checkifitst3 = 1; specialfueloutput+= parseFloat(glowstonedustprice*2.5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(glowstonedistillateprice) + 25 * parseFloat(bestsulphuriccoal) + 288 * parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t3-magmacream") {fuelmultiplier = 21; checkifitst3 = 1; specialfueloutput+= parseFloat(magmacreamprice*2); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(magmacreamdistillateprice) + 25 * parseFloat(bestsulphuriccoal) + 288 * parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}
    else if (htmlfueltype == "t3-netherwart") {fuelmultiplier = 21; checkifitst3 = 1; specialfueloutput+= parseFloat(netherwartprice*5); specialproduction += 0.8; 
        expenses += htmlminioncount * ( 6 * parseFloat(netherwartdistillateprice) + 25 * parseFloat(bestsulphuriccoal) + 288 * parseFloat(bestfuelgabagool) + 2 * parseFloat(infernofuelblockprice));}

    const eyedropbuy = data.products[`CAPSAICIN_EYEDROPS_NO_CHARGES`]?.quick_status[toggleStates[3] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    var htmleyedrop = document.getElementById("eyedrops").value;
    console.log(eyedropbuy);
    if (checkifitst3 == 1 && htmleyedrop == "yes") { checkifitst3 += 0.3; expenses += parseFloat(eyedropbuy); }

    const powercrystalprice = data.products[`POWER_CRYSTAL`]?.quick_status.sellPrice.toFixed(0);
    const scorchedprice = data.products[`SCORCHED_POWER_CRYSTAL`]?.quick_status.sellPrice.toFixed(0);

    var htmlbeacontier = document.getElementById("beaconlevel").value;
    if (htmlbeacontier == "1") {extraspeeds += 2; expenses += parseFloat(powercrystalprice)/2;}
    else if (htmlbeacontier == "1s") {extraspeeds += 3; expenses += parseFloat(scorchedprice)/2}
    else if (htmlbeacontier == "2") {extraspeeds += 4; expenses += parseFloat(powercrystalprice)/2}
    else if (htmlbeacontier == "2s") {extraspeeds += 5; expenses += parseFloat(scorchedprice)/2}
    else if (htmlbeacontier == "3") {extraspeeds += 6; expenses += parseFloat(powercrystalprice)/2}
    else if (htmlbeacontier == "3s") {extraspeeds += 7; expenses += parseFloat(scorchedprice)/2}
    else if (htmlbeacontier == "4") {extraspeeds += 8; expenses += parseFloat(powercrystalprice)/2}
    else if (htmlbeacontier == "4s") {extraspeeds += 9; expenses += parseFloat(scorchedprice)/2}
    else if (htmlbeacontier == "5") {extraspeeds += 10; expenses += parseFloat(powercrystalprice)/2}    
    else if (htmlbeacontier == "5s") {extraspeeds += 11; expenses += parseFloat(scorchedprice)/2}

    var htmlinfusion = document.getElementById("infusion").value;
    if (htmlinfusion == "yes") {extraspeeds += 10}
    else {extraspeeds += 0}

    var htmlupgrades1 = document.getElementById("upgrades1").value;
    var htmlupgrades2 = document.getElementById("upgrades2").value;
    if (htmlupgrades1 == "super-compactor-3000" || htmlupgrades2 == "super-compactor-3000") {
        compactor = true;
    } else {compactor = false}
    if (htmlupgrades1 == "minion-expander") {extraspeeds += 5}
    if (htmlupgrades2 == "minion-expander") {extraspeeds += 5}
    if (htmlupgrades1 == "flycatcher") {extraspeeds += 20}
    if (htmlupgrades2 == "flycatcher") {extraspeeds += 20}      
    
    let miniondailyprofit;
    let dailytotalminionactions = 86400 / 2 / (( minionwaitingtime / fuelmultiplier ) / ((100+extraspeeds)/100)); // this many actions per day
    miniondailyprofit = htmlminioncount * dailytotalminionactions  * (((1-specialproduction)*parseFloat(crudegabagoolprice)) + (specialproduction)*(specialfueloutput) + checkifitst3*(parseFloat(chilipepperprice)/136
    + parseFloat(vertexprice)/5950 + parseFloat(apexprice) * apexCount / 1309091 + parseFloat(reaperprice) / 458182 + parseFloat(ceramicprice)));

    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status[toggleStates[6] === false ? 'sellPrice' : 'buyPrice'].toFixed(0);
    possiblehypergoliccraftingamount = dailytotalminionactions * htmlminioncount / 6912;
    console.log("possiblehypergoliccraftingamount",possiblehypergoliccraftingamount);
    profitfromcraftinghypergolicper = parseFloat(hypergolicgabagoolprice) - 75.25 * parseFloat(enchantedsulphurprice) - 6912 * parseFloat(crudegabagoolprice) - 1204 * parseFloat(enchantedcoalprice); 
    console.log("profitfromcraftinghypergolicper",profitfromcraftinghypergolicper);
    profitfromcraftinghypergolic = possiblehypergoliccraftingamount * profitfromcraftinghypergolicper
    var coinsleft = miniondailyprofit - expenses;
    totalaftereverything = profitfromcraftinghypergolic + coinsleft;
    
    
    minionhourlyprofit = miniondailyprofit / 24;
    oneminionhourlyprofit = Math.round(minionhourlyprofit / htmlminioncount).toLocaleString();
    minionhourlyprofit = Math.round(miniondailyprofit / 24).toLocaleString();

    oneminiondailyprofit = Math.round(miniondailyprofit / htmlminioncount).toLocaleString();    
    miniondailyprofit =  Math.round(miniondailyprofit).toLocaleString();     
    expenses = Math.round(expenses).toLocaleString();    
    coinsleft = Math.round(coinsleft).toLocaleString();    
    profitfromcraftinghypergolic = Math.round(profitfromcraftinghypergolic).toLocaleString();
    totalaftereverything = Math.round(totalaftereverything).toLocaleString();    

    htmlinfernoresulttext.innerHTML = `One minion makes ${oneminionhourlyprofit} coins per hour and ${oneminiondailyprofit} per day.
                                        <br> All the minions combined make ${minionhourlyprofit} coins per hour and ${miniondailyprofit} per day.
                                        <br> Using this fuel and beacon will cost you ${expenses} coins per day.
                                        <br> That will leave you with ${coinsleft} coins after your expenses.
                                        <br> However, if you craft your gains into Hypergolic Gabagool, you
                                        <br> can make ${profitfromcraftinghypergolic} coins more, coming to ${totalaftereverything} coins total.`;
}

bazaarconnect();


