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
    const fuelgabagoolprice = data.products[`FUEL_GABAGOOL`]?.quick_status.buyPrice.toFixed(0); // TODO kaldır
    const heavygabagoolprice = data.products[`HEAVY_GABAGOOL`]?.quick_status.buyPrice.toFixed(0); // TODO kaldır
    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolsellprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status.sellPrice.toFixed(0);
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status.sellPrice.toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status.sellPrice.toFixed(0);
    // const ceramicprice =

    // FUELS 

    const infernofuelblockprice = data.products[`INFERNO_FUEL_BLOCK`]?.quick_status.sellPrice.toFixed(0);

    const gabagooldistillateprice = data.products[`CRUDE_GABAGOOL_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const blazeroddistillateprice = data.products[`BLAZE_ROD_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const glowstonedistillateprice = data.products[`GLOWSTONE_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const magmacreamdistillateprice = data.products[`MAGMA_CREAM_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);
    const netherwartdistillateprice = data.products[`NETHER_WART_DISTILLATE`]?.quick_status.sellPrice.toFixed(0);

    // const t1gabagool =
    // const t2gabagool =
    // const t3gabagool =

    // const t1blazerod =
    // const t2blazerod =
    // const t3blazerod =

    // const t1glowstone =
    // const t2glowstone =
    // const t3glowstone =

    // const t1magmacream =
    // const t2magmacream =
    // const t3magmacream =

    // const t1netherwart =
    // const t2netherwart =
    // const t3netherwart =

    // const eyedropcraft = 

    // CRAFTABLE STUFF
    
    const entropysurpressorprice = data.products[`ENTROPY_SUPPRESSOR`]?.quick_status.buyPrice.toFixed(0);
    const capsaicineyedropsprice = data.products[`CAPSAICIN_EYEDROPS`]?.quick_status.buyPrice.toFixed(0);
    const jalapenobookprice = data.products[`JALAPENO_BOOK`]?.quick_status.buyPrice.toFixed(0);
    const tabasco3price = data.products[`ENCHANTMENT_TABASCO_III`]?.quick_status.buyPrice.toFixed(0);
    const habanerotactics5price = data.products[`ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_V`]?.quick_status.buyPrice.toFixed(0);
    const stuffedchilipepperprice = data.products[`STUFFED_CHILI_PEPPER`]?.quick_status.buyPrice.toFixed(0);
    const cayenne5price = data.products[`ENCHANTMENT_CAYENNE_V`]?.quick_status.buyPrice .toFixed(0);

    const sulphuriccoalnopeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4).toFixed(0); // TODO üste çıkar
    const sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12).toFixed(0);

    let bestsulphuriccoal;
    let usedsulphuriccoal;

    if (sulphuriccoalnopeppers>sulphuriccoalwithpeppers) {
        bestsulphuriccoal = sulphuriccoalwithpeppers;
        usedsulphuriccoal = "With Peppers";
    }
    else {
        bestsulphuriccoal = sulphuriccoalnopeppers;
        usedsulphuriccoal = "No Peppers";
    }

    const fuelgabagoolwithcrude = (parseFloat(crudegabagoolprice) * 24 + parseFloat(bestsulphuriccoal)).toFixed(0);
    const fuelgabagoolwithverycrude = (parseFloat(verycrudegabagoolprice) / 8 + parseFloat(bestsulphuriccoal)).toFixed(0);
    
    let bestfuelgabagool; 
    let usedfuelgabagool;
    
    if (fuelgabagoolwithcrude > fuelgabagoolwithverycrude && fuelgabagoolprice > fuelgabagoolwithverycrude) {
        bestfuelgabagool = fuelgabagoolwithverycrude;
        usedfuelgabagool = "very crude";
    } else if (fuelgabagoolwithcrude < fuelgabagoolwithverycrude && fuelgabagoolprice > fuelgabagoolwithcrude) {
        bestfuelgabagool = fuelgabagoolwithcrude;
        usedfuelgabagool = "crude";
    } else {
        bestfuelgabagool = fuelgabagoolprice;
        usedfuelgabagool = "buy order";
    }

    const heavygabagoolwithcrude = 24 * parseFloat(bestfuelgabagool) + parseFloat(bestsulphuriccoal);

    const hypergoliccraft = (parseFloat(verycrudegabagoolprice) * 36 + parseFloat(bestsulphuriccoal) * 301).toFixed(0);
    
    console.log("Crafting fuel gabagool with crude gabagool cost",fuelgabagoolwithcrude,"coins and crafting it with very crude gabagool cost",fuelgabagoolwithverycrude,"coins");
    console.log("heavy gabagool with crude",heavygabagoolwithcrude,"heavy gabagool buy order",heavygabagoolprice,"used",usedfuelgabagool);

    var hypergolicgabagoolDiv = document.getElementById("hypergolicgabagool");
    var hypergolicgabagoolText = 'Crafting hypergolic costs ' + hypergoliccraft + ' and sell order hypergolic gives ' + hypergolicgabagoolprice + " and the buy order gives " + hypergolicgabagoolsellprice +' the crude gabagool costs ' + (verycrudegabagoolprice * 36) + ' sulphuric coal costs ' + (bestsulphuriccoal * 301).toFixed(0);
    hypergolicgabagoolDiv.innerHTML = hypergolicgabagoolText;
    var bestsulphuriccoalDiv = document.getElementById("bestsulphuriccoal");
    var bestsulphuriccoalText = " Best sulphuric coal is " + usedsulphuriccoal + ' with the price of ' + bestsulphuriccoal + " chili peppered coal cost "+sulphuriccoalwithpeppers+" and with no peppers it costs "+sulphuriccoalnopeppers;
    bestsulphuriccoalDiv.innerHTML = bestsulphuriccoalText;
}

bazaarconnect();



