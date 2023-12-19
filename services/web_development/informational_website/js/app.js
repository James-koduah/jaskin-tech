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

window.addEventListener('scroll', ()=>{
    scroll_translate_reset("web_inform_bronze")
    scroll_translate_reset("web_inform_silver")
    scroll_translate_reset("web_inform_gold")
})