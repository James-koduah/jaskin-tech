function preload_all_images(images){
    function preload_image(im_url) {
        let img = new Image();
        img.src = im_url;
    }
    for (let img of images){
        preload_image(img)
    }
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
preload_all_images(images)
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

image_slide('ai_images1', 'ai_images2', images)