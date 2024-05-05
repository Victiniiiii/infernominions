// inferno.js

async function bazaarconnect() {
    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();

    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const fuelgabagoolprice = data.products[`FUEL_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const heavygabagoolprice = data.products[`HEAVY_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolsellprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status.sellPrice.toFixed(0);
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status.sellPrice.toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status.sellPrice.toFixed(0);

    // const infernofuelblockprice =
    // const gabagooldistillateprice =
    // const tier1fuel =
    // const tier2fuel =
    // const tier3fuel =
    // const eyedropcraft = 
    // const eyedropbuyprice =
    // const eyedropbest =
    // const tier3andeyedrop =
    
    const entropysurpressorprice = data.products[`ENTROPY_SUPPRESSOR`]?.quick_status.buyPrice.toFixed(0);
    const capsaicineyedropsprice = data.products[`CAPSAICIN_EYEDROPS`]?.quick_status.buyPrice.toFixed(0);
    const jalapenobookprice = data.products[`JALAPENO_BOOK`]?.quick_status.buyPrice.toFixed(0);
    const tabasco3price = data.products[`ENCHANTMENT_TABASCO_III`]?.quick_status.buyPrice.toFixed(0);
    const habanerotactics5price = data.products[`ENCHANTMENT_ULTIMATE_HABANERO_TACTICS_V`]?.quick_status.buyPrice.toFixed(0);
    const stuffedchilipepperprice = data.products[`STUFFED_CHILI_PEPPER`]?.quick_status.buyPrice.toFixed(0);
    const cayenne5price = data.products[`ENCHANTMENT_CAYENNE_V`]?.quick_status.buyPrice .toFixed(0);

    const sulphuriccoalnopeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice)) / 4).toFixed(0);
    const sulphuriccoalwithpeppers = ((parseFloat(enchantedcoalprice) * 16 + parseFloat(enchantedsulphurprice) + parseFloat(chilipepperprice) * 4) / 12).toFixed(0);

    let bestsulphuriccoal;
    let usedsulphuriccoal;

    if (sulphuriccoalnopeppers>sulphuriccoalwithpeppers){
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

    console.log(hypergoliccraft)
    console.log(verycrudegabagoolprice)
    
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



