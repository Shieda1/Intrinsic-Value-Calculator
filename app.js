// https://www.omnicalculator.com/finance/inventory-turnover

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inventoryturnoverRadio = document.getElementById('inventoryturnoverRadio');
const costofGoodsSoldRadio = document.getElementById('costofGoodsSoldRadio');
const beginninginventoryRadio = document.getElementById('beginninginventoryRadio');
const endinginventoryRadio = document.getElementById('endinginventoryRadio');

let inventoryturnover;
let costofGoodsSold = v1;
let beginninginventory = v2;
let endinginventory = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

inventoryturnoverRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Sold';
  variable2.textContent = 'Beginning inventory';
  variable3.textContent = 'Ending inventory';
  costofGoodsSold = v1;
  beginninginventory = v2;
  endinginventory = v3;
  result.textContent = '';
});

costofGoodsSoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory turnover';
  variable2.textContent = 'Beginning inventory';
  variable3.textContent = 'Ending inventory';
  inventoryturnover = v1;
  beginninginventory = v2;
  endinginventory = v3;
  result.textContent = '';
});

beginninginventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory turnover';
  variable2.textContent = 'Cost of Goods Sold';
  variable3.textContent = 'Ending inventory';
  inventoryturnover = v1;
  costofGoodsSold = v2;
  endinginventory = v3;
  result.textContent = '';
});

endinginventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory turnover';
  variable2.textContent = 'Cost of Goods Sold';
  variable3.textContent = 'Beginning inventory';
  inventoryturnover = v1;
  costofGoodsSold = v2;
  beginninginventory = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inventoryturnoverRadio.checked)
    result.textContent = `Inventory turnover = ${computeinventoryturnover().toFixed(2)}`;

  else if(costofGoodsSoldRadio.checked)
    result.textContent = `Cost of Goods Sold = ${computecostofGoodsSold().toFixed(2)}`;

  else if(beginninginventoryRadio.checked)
    result.textContent = `Beginning inventory = ${computebeginninginventory().toFixed(2)}`;

  else if(endinginventoryRadio.checked)
    result.textContent = `Ending inventory = ${computeendinginventory().toFixed(2)}`;
})

// calculation

// Average inventory = (Beginning inventory + Ending inventory) / 2

// Inventory turnover = COGS / Average inventory

function computeinventoryturnover() {
  return Number(costofGoodsSold.value) / ((Number(beginninginventory.value) + Number(endinginventory.value)) / 2);
}

function computecostofGoodsSold() {
  return Number(inventoryturnover.value) * ((Number(beginninginventory.value) + Number(endinginventory.value)) / 2);
}

function computebeginninginventory() {
  return (((Number(costofGoodsSold.value) / Number(inventoryturnover.value))) * 2) - Number(endinginventory.value);
}

function computeendinginventory() {
  return (((Number(costofGoodsSold.value) / Number(inventoryturnover.value))) * 2) - Number(beginninginventory.value);
}