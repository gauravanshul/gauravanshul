/**
 * Array:
in js array is powerfull data structure.
Array is object.
array is dynamic -
Array can hold any literal - string,number,boolean,object
Array can have lot of utility methods for array processing
In es 6 array,lot of new methods added to simplify array process

 */
//dont use this syntax
//const list = new Array(1, 2, 3, 5);//constructor pattern
//widly used pattern -literal pattern
const mylist = [1, 2, 3, 4];
//iteration apis
//for loop
for (let i = 1; i < mylist.length; i++) {
    console.log(i);
}
//string
const names = ["subramanian", "ram", "raja"];
//objects -customers information
//Each customer is object having basic customer property
const customers = [{
        id: 1,
        name: 'Subramanian',
        orders: [{
                orderid: 'AA0',
                product: 'Phone'
            },
            {
                orderid: 'AA1',
                product: 'TV'
            }
        ]
    },
    {
        id: 2,
        name: 'Ram',
        orders: [{
                orderid: 'BB0',
                product: 'Phone'
            },
            {
                orderid: 'BB1',
                product: 'TV'
            }
        ]
    },
    {
        id: 3,
        name: 'Raja',
        orders: [{
                orderid: 'CC0',
                product: 'Phone'
            },
            {
                orderid: 'CC1',
                product: 'TV'
            }
        ]
    }
];
//iterate customers
/* for (let index = 0; index < customers.length; index++) {
    let customer = customers[index];
    console.log(`${customer.id} ${customer.name}`);
    let orders = customer.orders;
    for (let oindex = 0; oindex < orders.length; oindex++){
        let order = orders[oindex];
        //console.log(order);
        console.log(`${order.orderid} ${order.product}`)
    }
} */

customers.forEach(customer => {
    console.log(`${customer.id} ${customer.name}`);
    customer.orders.forEach(order => {
        console.log(`${order.orderid} ${order.product}`)
    });
});

//use case:i have list of stock items,from the stock items
//i want to extract one item ,convert that item into a new array.
function getStockSymbols(stocks) {
    let symbols = [];

    stocks.forEach(stock => {
        symbols.push(stock.symbol);
    });

    return symbols;
}

var symbols = getStockSymbols([{
        symbol: "XFX",
        price: 240.22,
        volume: 23432
    },
    {
        symbol: "TNZ",
        price: 332.19,
        volume: 234
    },
    {
        symbol: "JXJ",
        price: 120.22,
        volume: 5323
    },
]);

console.log(symbols);
/**
 * map method:
  One very common operation in programming is to iterate
  through an Array's contents, apply a function to each item,
  and create a new array containing the results.
 */
//map vs for each - map returns new array and for each returns item

function getStockSymbols_02(stocks) {
  return stocks.map(stock=> {
    return stock.symbol;
  })
}

let symbols_01 = getStockSymbols_02([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
]);

console.log(JSON.stringify(symbols_01));

/**
 * filter method:
   One very common operation in programming is to iterate
    through an Array's contents, apply
    a test function to each item, and create
     a new array containing only those items the
     passed the test.
 */
function getStocksOver(stocks, minPrice) {
  return stocks.filter(stock => {
    return stock.price >= minPrice;
  })
}

let expensiveStocks = getStocksOver([
  { symbol: "XFX", price: 240.22, volume: 23432 },
  { symbol: "TNZ", price: 332.19, volume: 234 },
  { symbol: "JXJ", price: 120.22, volume: 5323 },
],
150.00);

console.log(expensiveStocks);


