let openRateBtn = document.getElementById("addRate") as HTMLButtonElement;
let closeBtn = document.getElementById("closeRateModel") as HTMLButtonElement;
let RateModel = document.querySelector(".addRateModel") as HTMLDivElement;
// 
let mainImg = document.querySelector(".main-img img") as HTMLImageElement;
let subImgs = document.querySelectorAll(".sub-img img") as NodeListOf<HTMLImageElement>
// 
let BookModel = document.querySelector(".BookNowModel ") as HTMLDivElement;
let bookBtnOpen = document.getElementById("BookNow") as HTMLButtonElement;
let bookBtnClose = document.getElementById("closeBookModel") as HTMLButtonElement;
//

//((((function))))
let openModel = (selectDiv:HTMLDivElement) => {
    selectDiv.style.display = "flex"
    setTimeout(() => {
        selectDiv.classList.add("open")
    }, 100)
}
let closeModel = (selectDiv:HTMLDivElement) => {
    selectDiv.classList.remove("open")
    setTimeout(() => {

        selectDiv.style.display = "none"
    }, 300)
}
//
let toggleActiveSrc = (selectImg: HTMLImageElement | any) => {
    document.querySelector(".active")?.classList.remove("active");
    selectImg.classList.add("active");
    mainImg.style.opacity = "0";
    setTimeout(() => {
        mainImg.style.opacity = "1";
        mainImg.src = selectImg.src
    }, 200)
}
let toggleImg = () => {
    // subImgs[0].classList.add("active")
    subImgs.forEach((img: HTMLImageElement)=> {
        img.addEventListener("click", () => toggleActiveSrc(img))
    }) 
}
toggleImg()
// 






//((((((((event))))))))
openRateBtn.addEventListener("click", ()=>openModel(RateModel));
closeBtn.addEventListener("click", ()=>closeModel(RateModel));
bookBtnOpen.addEventListener("click", ()=>openModel(BookModel));
bookBtnClose.addEventListener("click", ()=>closeModel(BookModel));
