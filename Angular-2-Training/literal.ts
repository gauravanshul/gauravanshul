class CustomerNew {
    id: number;
    name: string;
}
function doStuffNew() {
    let customer:CustomerNew = {
        id: 10,
        name: 'Gaurav'
    }
    console.log(`customer id is ${customer.id}`);
    console.log(`customer name is ${customer.name}`)
}
doStuffNew();