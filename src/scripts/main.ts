let List = document.querySelector(".link-list") as HTMLUListElement;
let ListLi = document.querySelectorAll(
  ".link-list li"
) as NodeListOf<HTMLLIElement>;
let NavLink = document.querySelectorAll(".link-list li a") as NodeListOf<HTMLLinkElement>
let Header = document.querySelector("header") as HTMLHeadingElement
let menuBtn = document.querySelector(".icon-nav-base") as HTMLButtonElement;
//
let btnNow = document.querySelector(".btnFilters  #Now") as HTMLTableElement;
let btnPrev = document.querySelector(".btnFilters  #prev") as HTMLTableElement;
console.log(btnPrev)
let now = document.querySelector(".book .now") as HTMLTableElement;
let prev = document.querySelector(".book .prev") as HTMLTableElement;

let prevTab= ()=>{
  if(prev !== null ){
    prev.classList.add("active");
    prev.classList.add("prev");
  }
  now.classList.remove("active");
  now.classList.remove("now");
  btnNow.classList.remove("active");
  btnPrev.classList.add("active")


}
let nowTab= ()=>{
  if(now !== null ){
    now.classList.add("active");
    now.classList.add("now");

  }
  prev.classList.remove("active");
  prev.classList.remove("prev");
  btnNow.classList.add("active");
  btnPrev.classList.remove("active")


}
if(btnPrev !== null ){
  btnPrev.addEventListener("click" , prevTab)
}
if(btnNow !== null ){
  btnNow.addEventListener("click" , nowTab)
}

//function
// *****responsive header *********
let responsiveHeader = () => {
  const Width = window.innerWidth;
  if (Width < 992) {
    List.classList.add("Mobile");
    List.classList.remove("normalMenu");
  } else {
    List.classList.remove("Mobile");
    List.classList.add("normalMenu");
  }
};
responsiveHeader();

// // *****open and close *********
// (((((((((calc height)))))))))
function calcMaxHeight(items: NodeListOf<HTMLLIElement>): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  items.forEach((link: any) => {
    maxHeight += link.clientHeight
  })

  return maxHeight;
}

// (((((((((animation slide )))))))))
let Speed = (Height: number | any) => {

  let speed = (Height / (Height * 0.1));

  return speed
}
let animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {

  let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
  let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
  let startTime = performance.now();

  function animate() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    let speed = dir === 'down' ? Speed(targetHeight) : Speed(height);
    if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
      if (dir === 'up') {
        targetEL.style.height = "";
      }
      return; // Exit animation loop
    }
    height += dir === "down" ? (elapsedTime / speed) : -(elapsedTime / speed);
    if (height > targetHeight && dir === 'down') {
      height = targetHeight;
    }
    targetEL.style.height = `${height}px`;
    // Request next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
}


//(((((((((open responsive header )))))))))

let openMenu = () => {
  let offsetHeader = Header.clientHeight;
  List.classList.add("open")
  menuBtn?.classList.toggle("active");
  let isOpen = menuBtn.classList.contains("active");

  menuBtn.setAttribute("aria-expanded", isOpen.toString());
  menuBtn.setAttribute("aria-label", isOpen ? 'open menu' : 'close menu');
  isOpen ? animationSlide('down', ListLi, List) : animationSlide('up', ListLi, List)
  List.style.top = `${offsetHeader}px`
  if (!isOpen) {
    setTimeout(() => {
      List.classList.remove("open")
      List.style.removeProperty('top')
    }, 270);
  }

};

// active nav link
let NavActive = () => {
  
  NavLink.forEach((link: HTMLLinkElement) => {
    let pathLink = new URL(link.href).pathname
    if(window.location.pathname === pathLink){
      link.classList.add("active");
    }
    
  })
}
NavActive()
//

//(((((((((addEventListener )))))))))

window.addEventListener("resize", responsiveHeader);
menuBtn.addEventListener("click", openMenu);





// يخبر الأسلوب requestAnimationFrame() المتصفح أنك ترغب في تنفيذ رسم متحرك ويطلب من المتصفح استدعاء وظيفة محددة لتحديث الرسم المتحرك قبل إعادة الرسم التالية.
// يجب أن يقوم روتين رد الاتصال الخاص بك باستدعاء requestAnimationFrame() إذا كنت تريد تحريك إطار آخر في عملية إعادة الرسم التالية
// نصيحة: يجب عليك استدعاء هذه الطريقة عندما تكون مستعدًا لتحديث الرسوم المتحركة التي تظهر على الشاشة للأسباب التالية:

// يمكن للمتصفح تحسينه، لذلك ستكون الرسوم المتحركة أكثر سلاسة
// ستتوقف الرسوم المتحركة الموجودة في علامات التبويب غير النشطة، مما يسمح لوحدة المعالجة المركزية بالبرودة
// أكثر ملاءمة للبطارية

//باختصار، يوفر الأداء.now() دقة أعلى، واستقلالية عن تغييرات وقت النظام، والاتساق عبر المتصفحات، واستقلالية معدل الإطارات، مما يجعله الخيار المفضل للتوقيت الدقيق في وظائف الرسوم المتحركة.