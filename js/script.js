// 
const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset//Tính tọa độ chiều dọc Y
        if(x>0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })

    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer  = document.querySelector('.aspect-ratio-169')//tự động trược
    const dotItem = document.querySelectorAll(".dot")//nhấp vào dot
    let imgNumber = imgPosition.length
    let index = 0 //bắt đầu = 0 sau 3s sẽ trược
    imgPosition.forEach(function(image,index){
        image.style.left = index*100 + "%"//ảnh dịch sang trái
        dotItem[index].addEventListener("click",function(){
            slider(index)//nhấp vào dot
        })
    })
    function imgSlide(){
        index++;
        console.log(index)
        if(index>=imgNumber){index=0}
        slider(index)//nhấp vào dot
    }
    function slider(index) {//nhấp vào dot
        imgContainer.style.left = "-" +index*100+ "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
    setInterval(imgSlide,3000)

// Menu-SLIDEBAR-CARTEGORY
const itemsliderber = document.querySelectorAll(".cartegory-left-li")
itemsliderber.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})


// Product
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if (baoquan) {
    baoquan.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if (chitiet) {
    chitiet.addEventListener("click", function () {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}
// Product-big-small
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})