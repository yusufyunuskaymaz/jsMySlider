// const previous = document.querySelector("#previous")
const next = document.querySelector("#next")
const boxes = document.querySelectorAll(".box")

next.addEventListener("click", () => nextClick(1))

// previous.addEventListener("click", () => nextClick(-1))



let index = 3
let firstIndex = 3
slides(index)

function nextClick(number){
    slides(index = index + number)
}


function slides(n){
    const boxes2 = Array.from(boxes)

    if (n > boxes.length) {index = 3}
    // if (n<3) {index = boxes.length} 

    for(let i =0;i<boxes.length;i++){
        boxes[i].style.display = "none"
    }
    if(index==3){
        for(let i =0;i<3;i++){
            boxes[i].style.display = "block"
        }
    }
    if(n>firstIndex){
        console.log("bura çalıştı")
            for(let i = 1; i<4;i++){
                boxes[index-i].style.display = "block"
            }
    }
    // Previous Button
    // if(n<firstIndex){
    //     for(let i = 3; i<6;i++){
    //         console.log(index+i)
    //         boxes[index+i].style.display = "block"
    //     }
    // }
}


























