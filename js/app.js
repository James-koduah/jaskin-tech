function scroll_translate_reset(element_id, offset = 0, instant=false){
    let element = document.getElementById(element_id)
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > element.offsetTop - window.innerHeight + offset){
            element.style.transform = 'translate(0px, 0px)'
            element.style.opacity = 1
        }
    })
    if (instant){
        element.style.transform = 'translate(0px, 0px)'
        element.style.opacity = 1
    }
}
scroll_translate_reset('service_marketing', 1000)
scroll_translate_reset('portfolio_PC', 100)



function dialouge(text, box, callback=false, speed=70){
    let dialouge_text = document.getElementById(box)
    let text_index = 0
    let running_text = setInterval(()=>{
        let current = text[text_index]
        if (text_index >= text.length ){
            clearInterval(running_text)
            if (callback){
                callback()
            }
            return
        }
        if (current == '-'){//Make the next text Bigger than the rest
            text_index++
            dialouge_text.innerHTML += `<i>${text[text_index]}</i>`
        }
        else if(current == ']'){//Move to the next line
            dialouge_text.innerHTML += '<br>'
        }
        else if(current == '^'){//Delete the previous letter
            dialouge_text.innerHTML = dialouge_text.innerHTML.slice(0, -1)
        }
        else if(current == '*'){}//Do Nothing
        else if(current == '!'){
            dialouge_text.innerHTML = ''
        }
        else{
            dialouge_text.innerHTML += current
        }
        text_index++
    }, speed)
}




let display_flex_elems = []
function display_flex(element_id, nav_item=false, nav_class=false){
    let rolled = false
    let elem = document.getElementById(element_id)
    if (display_flex_elems.includes(element_id)){
        elem.style.setProperty('display', 'none', 'important');
        display_flex_elems.splice(display_flex_elems.indexOf(element_id), 1);
    }else{
        elem.style.setProperty('display', 'flex', 'important');
        display_flex_elems.push(element_id)
        rolled = true
    }

    if (nav_item && nav_class){
        if (rolled){
            nav_item.classList.add(nav_class)
        }else{
            nav_item.classList.remove(nav_class)
        }
    }

}





// let change_img_on_scroll_current = 0
// function change_img_on_scroll(img_frame, img_element, img_src, scroll_element,  num=0){
//     let img_div = document.getElementById(img_frame)
//     let scroll_div = document.getElementById(scroll_element)
//     let img = document.getElementById(img_element)
//     function action(){
//         if (change_img_on_scroll_current !== num){
//             let img_div_offset = img_div.offsetTop - img_div.clientHeight/2
//             let img_div_offset2 = img_div_offset + 100
//             let scroll_div_offset = scroll_div.offsetTop - scroll_div.clientHeight
//             if (img_div_offset < scroll_div_offset && img_div_offset2 > scroll_div_offset){
//                 change_img_on_scroll_current = num
//                 img.src = img_src
//             }
//             scroll_div_offset = scroll_div.offsetTop
//             if (img_div_offset < scroll_div_offset && img_div_offset2 > scroll_div_offset){
//                 change_img_on_scroll_current = num
//                 img.src = img_src
//             }
//         }
//     }
//     window.addEventListener('scroll', action)
// }

// change_img_on_scroll('strength_frame_img', 'strength_img', 'images/computer.jpeg', 'strength_choice', 1)
// change_img_on_scroll('strength_frame_img', 'strength_img', 'images/astronaut7.jpeg', 'strength_price', 2)
// change_img_on_scroll('strength_frame_img', 'strength_img', 'images/astronaut4.jpeg', 'strength_convinence', 3)
// change_img_on_scroll('strength_frame_img', 'strength_img', 'images/astronaut5.jpeg', 'strength_quality', 4)