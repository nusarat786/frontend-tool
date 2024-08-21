const AccessKey = "RuyndwucLvg84pcS0B7MsjHU25Om_rT4bJOq-xTeuSw";

let searchArea = document.querySelector(".search-area");
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let searchImage = document.querySelector(".search-images");
let moreImageBtn = document.getElementById("more-images");

let keyword = '';
let page = 1;

async function showImages() {
    keyword = search.value;
    const Url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=9`;
    
    const Resonse = await fetch(Url);
    const data = await Resonse.json();

    const searchResult = data.results;

    searchResult.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchImage.appendChild(imageLink);
    });

    if (searchResult.length > 0) {
        moreImageBtn.style.display = "block";
    } else {
        moreImageBtn.style.display = "none";
    }
}

searchArea.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage.innerHTML = '';
    showImages();
});

moreImageBtn.addEventListener("click", () => {
    page++;
    showImages();
});
