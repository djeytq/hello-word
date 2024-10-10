const filterItem=document.querySelector(".items")
const filtering=document.querySelectorAll(".images")

window.onload=()=>{ //one window loaded
    filterItem.onclick=(selectedItem)=>{ //when user cilcked on div
        if(selectedItem.target.classList.contains('item')){
            filterItem.querySelector('.active').classList.remove('active')
            selectedItem.target.classList.add('active')
            let filterName=selectedItem.target.getAttribute('data-name')
            // console.log(filterName)
            filtering.forEach((image)=>{
                let filterImages=image.getAttribute('data-name')
                // console.log(filterImages)
                if((filterImages==filterName) || filterName == 'all'){
                    image.classList.add('show')
                }else{
                    image.classList.add('hide')
                    image.classList.remove('show')
                }
            })
        }
    }
    for(let index=0; index< filtering.length ; index++){
        filtering[index].setAttribute("onclick","preview(this)")
    }
}


const previewBox=document.querySelector(".preview-box"),
previewimg=previewBox.querySelector("img"),
categoryName=previewBox.querySelector(".title p"),
closeIcon=previewBox.querySelector(".icon"),
shadow=document.querySelector(".shadow");

function preview(element){
    document.querySelector("body").style.overflow="hidden";
    let selectedPrevImg=element.querySelector("img").src;
    let selectedImgCategory=element.getAttribute("data-name")
    categoryName.textContent=selectedImgCategory;
    previewimg.src=selectedPrevImg;
    previewBox.classList.add("show")
    shadow.classList.add("show")
    closeIcon.onclick=()=>{
        previewBox.classList.remove("show")
        shadow.classList.remove("show")
        document.querySelector("body").style.overflow="scroll";
    }
}