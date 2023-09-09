const loadData = async (text) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
    const data = await res.json();
    const phones = data.data;
    showPhones(phones)
}

const showPhones = (phones) => {

    const phoneContainer = document.getElementById('phoneContainer');
    phoneContainer.textContent = '';

    phones = phones.slice(0, 12)

    phones.forEach(element => {
        const divCard = document.createElement('div');
        
        divCard.classList = (`card bg-gray-100 p-4 shadow-xl`);

        divCard.innerHTML = `
        <figure><img src=${element.image} alt="${element.phone_name}" /></figure>
        <div class="card-body">
            <h2 class="card-title">${element.phone_name}</h2>
            <p>If you like photography by now ${element.brand}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary block mx-auto mt-3">Buy Now</button>
            </div>
        </div>`

        phoneContainer.appendChild(divCard)
    });

}

const handleSearch = () => {
    const inputText = document.getElementById('inputText');
    let inputTextValue = inputText.value;
    loadData(inputTextValue);
}

loadData("a")