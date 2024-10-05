

const allPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${searchText ? `?category=${searchText} ` : ''} `)
    const data = await res.json()
    displayAllPost(data.posts);



}
allPost();


const handleSearch = () => {
    const searchText = document.getElementById('search-input-field').value;
    const textSmall = searchText.toLowerCase();
    if (textSmall === 'coding' || textSmall === 'music' || textSmall === 'comedy') {
        allPost(textSmall);
        document.getElementById('search-input-field').value = '';

    }
    else {
        alert('There are just coding , comedy and music type are available')
    }




}





const displayAllPost = (data) => {
    const discussParentCard = document.getElementById('discuss-card-parent');
    discussParentCard.innerHTML = '';
    data.forEach(item => {
        const { author, category, comment_count, description, id, image, isActive, posted_time, title, view_count } = item;
        discussParentCard.innerHTML +=
            `
               <div
                    class="flex flex-col lg:flex-row gap-6 bg-[#797DFC]/[0.1] p-5 lg:p-10 rounded-3xl border border-solid border-[#797DFC]">
                    <div>
                        <div class="indicator">
                            <span class="indicator-item badge  ${isActive ? `bg-[#10B981]` : `bg-[#FF3434]`} "></span>
                            <div class="bg-base-300 grid h-[72px] w-[72px] place-items-center rounded-2xl">
                                <img src="${image}" class="w-full rounded-2xl" alt="">
                            </div>
                        </div>
                    </div>
                    <div class = "w-full">
                        <p class="text-xs lg:text-sm font-medium text-[#12132D]/[0.8] mb-3 space-x-3"><span>#
                                ${category}</span><span>Author : ${author.name}</span></p>
                        <h1 class="text-lg lg:text-xl font-bold text-[#12132D] mb-4">${title}</h1>
                        <p class="text-sm lg:text-base font-normal text-[#12132D]/[0.6]">${description}</p>
                        <div class="my-5 border border-dashed border-[#12132D40]/[0.25]"></div>
                        <div class="flex justify-between items-center">
                            <div class="text-sm lg:text-base font-normal text-[#12132D]/[0.6] flex gap-6">
                                <p class="space-x-2"><span><i
                                            class="fa-regular fa-comment-dots"></i></span><span>${comment_count}</span></p>
                                <p class="space-x-2"><span><i class="fa-regular fa-eye"></i></span><span>${view_count}</span>
                                </p>
                                <p class="space-x-2"><span><i class="fa-regular fa-clock"></i></span><span>${posted_time} min</span>
                                </p>
                            </div>
                            <div>
                                <button class="btn rounded-full bg-[#10B981]" onclick ='displayTitle(${JSON.stringify(description)},${view_count})'>
                                <i class="fa-solid fa-envelope-open text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `


    });


}

let count = 0;
const displayTitle = (description, views) => {
    count++;
    const titleCount = document.getElementById('title-count');
    titleCount.innerText = count;
    const titleParentDiv = document.getElementById('title-parent-div');
    titleParentDiv.innerHTML += 
    `
                      <div class="flex justify-between items-center p-4 bg-white rounded-2xl">
                            <p class="text-lg lg:text-xl font-semibold text-[#12132D]">${description} </p>
                            <p class="text-sm lg:text-base font-normal text-[#12132D]/[0.6] space-x-2 flex">
                                <span><i class="fa-regular fa-eye"></i></span><span>${views} </span>
                            </p>
                        </div>
    `
 console.log(count);
 
}


