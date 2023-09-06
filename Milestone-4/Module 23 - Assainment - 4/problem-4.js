function findAddress(obj) {
    const result = Object.values(obj).map(value => value || '__').join(',');
    return result;
}


const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
const address2 = { street: 10, house: "", society: "Earth Perfect" };
const address3 = { street: 10,  house: "", society: "" };

console.log(findAddress(address1));
console.log(findAddress(address2));
console.log(findAddress(address3)); 
