const dataLoader = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;

    cardDataShow(videos)

    sortView(videos)
}


const categoryLoaded = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const categoryList = data.data;

    const categoryBtn = document.getElementById('categoryBtn');

    categoryList.forEach(element => {
        const btn = document.createElement('button');
        btn.classList = `btnEl btn md:px-6 py-1 px-4 mx-1 md:mx-3 bg-neutral-300 font-medium text-black hover:text-black text-lg normal-case transition-all`;
        btn.innerText = element.category;
        btn.setAttribute('id', element.category_id)
        categoryBtn.appendChild(btn);
        const btnId = btn.getAttribute("id")
        btn.setAttribute('onclick', `eventId(${btnId})`)
    });

    // Default Value
    eventId(1000)

};
categoryLoaded()

const eventId = (catId) => {
    let btn = document.getElementsByClassName("btnEl");
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace("bg-red-600", "");
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].className = btn[i].className.replace("text-white", "");
    }

    const category = document.getElementById(catId);
    category.classList.add('bg-red-600')
    category.classList.add('text-white')
    dataLoader(catId)
}


const cardDataShow = (param) => {

    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.textContent = '';

    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = '';

    const noDataDiv = document.createElement('div');
    noDataDiv.classList = `my-20 flex justify-center items-center flex-col`;
    noDataDiv.innerHTML = `<img src="/img/Icon.png" alt="Error" class="w-30 md:w-52">
    <h2 class="text-3xl lg:text-4xl font-semibold text-black text-center mt-5 w-full lg:w-2/5">Oops!!
        Sorry, There is no content here</h2>`;


    if (param.length > 0) {

        param.forEach(e => {
            const cardDiv = document.createElement('div');
            cardDiv.classList = `card bg-base-100 shadow-xl cursor-pointer`;

            const timeNum = e.others.posted_date;
            const {hours, minutes} = secondsToHoursAndMinutes(timeNum);

            cardDiv.innerHTML = `
            <figure class="relative">
                <img src=${e.thumbnail}  alt=${e.title}  class="lg:h-48 lg:w-72 h-56 w-full"/>
                ${
                    timeNum > 0 ? `<div class="bg-zinc-800 text-white px-2 py-1 rounded-md absolute bottom-3 right-3">
                    ${hours}hrs ${minutes} min ago
                    </div>` : ''
                }
            </figure>
            <div class="flex py-5">
                <img src=${e.authors[0].profile_picture} alt=${e.authors[0].profile_name}
                    class="w-10 h-10 mr-3 rounded-full">
                <div>
                    <h2 class="card-title mb-2">${e.title}</h2>
                    <div class="flex">
                        <p class="mr-2 text-zinc-500">${e.authors[0].profile_name} </p>
                        ${e.authors[0].verified ? `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_11_38)">
                                <path
                                    d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
                                    fill="#2568EF" />
                                <path
                                    d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
                                    fill="#FFFCEE" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_38">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>` : ""}
                    </div>
                    <p class="mt-2 text-zinc-500">${e.others.views}  views</p>
                </div>
            </div>`;

            cardsContainer.appendChild(cardDiv);
        });

    } else {
        errorContainer.appendChild(noDataDiv);
    }

}

function secondsToHoursAndMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    return {
        hours,
        minutes
    };
}

const sortView = (e) => {
    const sortView = e.sort((a, b) => parseFloat(b.others.views) - parseFloat(a.others.views))
    const sortBtn = document.getElementById('sortBtn');
    sortBtn.addEventListener('click', () => {
        cardDataShow(sortView)
    })
}