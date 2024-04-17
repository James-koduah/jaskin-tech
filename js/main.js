let nav_dropdown_button = document.getElementById('nav_dropdown_button')
let nav_dropdown = document.getElementById('nav_dropdown_menu')
let nav_dropdown_toogle = false
nav_dropdown_button.addEventListener('click', nav_dropdown_func)

function nav_dropdown_func(){
    let button = nav_dropdown_button.querySelector('ion-icon')
    if (!nav_dropdown_toogle){
        nav_dropdown.style.display = 'flex'
        setTimeout(() => {
            nav_dropdown.style.top = '100%'
        }, 100);
        button.name = 'close'
        nav_dropdown_toogle = true
    }else{
        nav_dropdown.style.top = '-1000%'
        setTimeout(() => {
            nav_dropdown.style.display = 'none'
        }, 500);
        button.name = 'menu'
        nav_dropdown_toogle = false
    }
}

swipe_event({
    'element_id': 'nav_dropdown_menu',
    'minimumDistance': 80,
    'allowedTime': 800,
    'callback': nav_swipe
})


function nav_swipe(swipe){
    if (swipe.top){
        nav_dropdown_func()
    }
}

function clear_form(e){
    /**
     * Clearing the forms after submission.
     * When the user has typed their message, we may not want to clear what they have painstakingly written
     * So we clear everything but the value of the textareas.
     * This way we don't get multiple mistake submissions because they would have to refill the other fields to submit again
     */
    let textarea_element = e.querySelectorAll('textarea')
    let textarea_values = []
    for (let elem of textarea_element){
        textarea_values.push(elem.value)
    }
    e.submit();
    setTimeout(() => {
        e.reset()  
        for (let i = 0; i < textarea_element.length; i++){
            textarea_element[i].value = textarea_values[i]
        }
    }, 1000);
}

function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
}



function swipe_event(args){
    let surface = document.getElementById(args.element_id)
    let startX, startY, startTime,
    minimumDistance = args.minimumDistance || 200,
    allowedTime = args.allowedTime || 500
    surface.addEventListener('touchstart', (e)=>{
        let touchObject = e.changedTouches[0]
        startX = touchObject.pageX
        startY = touchObject.pageY
        startTime = new Date().getTime()
        // e.preventDefault()
    }, false)

    surface.addEventListener('touchmove', (e)=>{
        e.preventDefault()
    })

    surface.addEventListener('touchend', (e)=>{
        let touchObject = e.changedTouches[0]
        let distanceTraveledX = touchObject.pageX - startX
        let distanceTraveledY = touchObject.pageY - startY
        let elapsedTime = new Date().getTime() - startTime
        let data = {
            top: false,
            right: false,
            bottom: false,
            left: false
        }
        if (Math.abs(distanceTraveledX) >= minimumDistance){
            if (elapsedTime <= allowedTime){
                if (distanceTraveledX < 0) data.left = true
                else data.right = true
            }
        }
        if (Math.abs(distanceTraveledY) >= minimumDistance){
            if (elapsedTime <= allowedTime){
                if (distanceTraveledY < 0) data.top = true
                else data.bottom = true 
            }
        }
        args.callback(data)
    })
}
