let nav_dropdown_button = document.getElementById('nav_dropdown_button')
let nav_dropdown = document.getElementById('nav_dropdown_menu')
let nav_dropdown_toogle = false
nav_dropdown_button.addEventListener('click', ()=>{
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
    
})

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


function preload_all_images(){
    function preload_image(im_url) {
        let img = new Image();
        img.src = im_url;
    }
    let images = [
        '/images/man4.jpeg',
        '/images/man5.jpeg',
        '/images/man6.jpeg',
        '/images/man7.jpeg',
        '/images/man8.jpeg',
        '/images/astronaut3.jpeg',
        '/images/astronaut4.jpeg',
        '/images/astronaut5.jpeg',
        '/images/astronaut6.jpeg',
        '/images/astronaut7.jpeg',
        '/images/astronaut8.jpeg',
        '/images/astronaut9.jpeg',
    ]
    for (let img of images){
        preload_image(img)
    }

}
preload_all_images()

function image_slide(element1, element2, images=[]){
    let image_index = 0;
    let elem1 = document.getElementById(element1);
    let elem1_p = 0;
    let elem2 = document.getElementById(element2);
    let elem2_p = 100;
    let direction = 0
    let bb = setInterval(()=>{
        if (direction === 0){
            elem1_p -= 100;
            elem2_p -= 100;
            direction=1;
            elem2.src = images[image_index];
        }
        else if (direction === 1){
            elem1_p += 100; 
            elem2_p += 100;
            direction=0;
            elem1.src = images[image_index]
        }
        elem1.style.left = `${elem1_p}%`
        elem2.style.left = `${elem2_p}%`
        image_index++
        if (image_index > images.length - 1){
            image_index = 0
        }
    },5000)
}
let images = [
    '/images/man4.jpeg',
    '/images/man5.jpeg',
    '/images/man6.jpeg',
    '/images/man7.jpeg',
    '/images/man8.jpeg',
    '/images/astronaut3.jpeg',
    '/images/astronaut4.jpeg',
    '/images/astronaut5.jpeg',
    '/images/astronaut6.jpeg',
    '/images/astronaut7.jpeg',
    '/images/astronaut8.jpeg',
    '/images/astronaut9.jpeg',
]
image_slide('ai_images1', 'ai_images2', images)