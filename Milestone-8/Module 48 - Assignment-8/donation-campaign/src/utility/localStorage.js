const getStoredDonationItem = () =>{
    const storedDonationItem = localStorage.getItem('donation-item');
    if(storedDonationItem){
        return JSON.parse(storedDonationItem);
    }
    return [];
}


const saveDonationItem = id =>{
    const storedDonationItems = getStoredDonationItem();
    const exists = storedDonationItems.find(itemId => itemId === id);
    if(!exists){
        storedDonationItems.push(id);
        localStorage.setItem('donation-item', JSON.stringify(storedDonationItems))
    }
}

export { getStoredDonationItem, saveDonationItem}