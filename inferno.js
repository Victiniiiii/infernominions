//inferno.js

async function bazaarconnect() {
    const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
    const data = await response.json();

    const crudegabagoolprice = data.products[`CRUDE_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const fuelgabagoolprice = data.products[`FUEL_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const heavygabagoolprice = data.products[`HEAVY_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.buyPrice.toFixed(0);
    const hypergolicgabagoolsellprice = data.products[`HYPERGOLIC_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);
    const verycrudegabagoolprice = data.products[`VERY_CRUDE_GABAGOOL`]?.quick_status.sellPrice.toFixed(0);

    const enchantedcoalprice = data.products[`ENCHANTED_COAL`]?.quick_status.sellPrice.toFixed(0);
    const enchantedsulphurprice = data.products[`ENCHANTED_SULPHUR`]?.quick_status.sellPrice.toFixed(0);
    const chilipepperprice = data.products[`CHILI_PEPPER`]?.quick_status.sellPrice.toFixed(0);

    const sulphuriccoalnopeppers = enchantedcoalprice*16+enchantedsulphurprice/4;
    const sulphuriccoalwithpeppers = chilipepperprice*4+enchantedcoalprice*16+enchantedsulphurprice/12;

    const fuelgabagoolwithcrude = crudegabagoolprice*24 + sulphuriccoalnopeppers;
    const fuelgabagoolwithverycrude = verycrudegabagoolprice/8 + sulphuriccoalnopeppers;

    const hypergoliccraft =  verycrudegabagoolprice * 36 + enchantedcoalprice * 1204 + enchantedsulphurprice * 75.25

    console.log("Sulphuric coal recipe without peppers cost",sulphuriccoalnopeppers.toFixed(0),"coins and with peppers it costs",sulphuriccoalwithpeppers.toFixed(0),"coins");
    console.log("Crafting fuel gabagool with crude gabagool cost",fuelgabagoolwithcrude.toFixed(0),"coins and crafting it with very crude gabagool cost",fuelgabagoolwithverycrude.toFixed(0),"coins");
    console.log("buy price",hypergolicgabagoolprice,"sell price",hypergolicgabagoolsellprice);
    console.log("crafting hypergolic costs",hypergoliccraft,"and sell order hypergolic gives",hypergolicgabagoolprice,"the crude gabagool costs",verycrudegabagoolprice*36,"coal costs",enchantedcoalprice*1204,"sulphur costs",enchantedsulphurprice*75.25);
}

bazaarconnect();

