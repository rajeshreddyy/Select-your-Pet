let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let petImgEl = document.getElementById("petImg");
let petSelectEl = document.getElementById("petSelect");

petImgEl.setAttribute("src", petsImageUrls.dog);

petSelectEl.addEventListener("change", function(event){
    petImgEl.setAttribute("src", petsImageUrls[event.target.value]);
});



