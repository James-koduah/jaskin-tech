
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
    '../images/man4.jpeg',
    '../images/man5.jpeg',
    '../images/man6.jpeg',
    '../images/man7.jpeg',
    '../images/man8.jpeg',
    '../images/astronaut3.jpeg',
    '../images/astronaut4.jpeg',
    '../images/astronaut5.jpeg',
    '../images/astronaut6.jpeg',
    '../images/astronaut7.jpeg',
    '../images/astronaut8.jpeg',
    '../images/astronaut9.jpeg',
]
image_slide('ai_images1', 'ai_images2', images)
















let p_projects = [
    ['images/mission12.jpeg', '#'],
    ['images/website_inspiration.jpeg', '#'],
    ['images/site4.png'],
    ['images/website_inspiration2.jpeg', '#'],
    ['images/website_inspiration3.jpeg', '#'],
    ['images/computer.jpeg', '#'],
    ['images/businesss_software.jpeg', '#']
]
let p_projects_index_r = 4
let p_projects_index_l = 0
let p_scroll = document.getElementById('portfolio_PC_track_left')
let p_scroll_right = document.getElementById('portfolio_PC_track_right')
let p_scroll_position = -75
let p_r_pos = 0
let p_r_pos_w = 100;
function portfolio_scroll(movement){
    let current = p_scroll.querySelector('.portfolio_PC_current')
    let img = document.createElement('img')
    if (movement == 0){
        p_projects_index_l--
        if (p_projects_index_l < 0){
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
    }
    if (movement == 1){
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length -1){
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
    }
    if (movement === 0){ //Moving right
        /* Move the portfolio div to the left */
        p_scroll_position += -50 
        p_scroll.style.left = `${p_scroll_position}vw`
        /* Add a new elemeent to the right */
        let new_p = document.createElement('div')
        new_p.className = 'portfolio_PC_item'
        new_p.appendChild(img)
        p_scroll.appendChild(new_p)
        /* Make the element on the right of the previous centered element the new center */
        let new_current = current.nextElementSibling
        current.className = 'portfolio_PC_item'
        new_current.className += ' portfolio_PC_current'
    }
    if (movement === 1){
        /* Move the portfolio div to the right */
        p_scroll_position += 50 
        p_scroll.style.left = `${p_scroll_position}vw`
        /* Move the cover div to the left 
           This is because when we move the main div to the right, we're going to get an empty
           space and so we need the cover div to move to the right to make up for the empty space
        */
        p_r_pos += -50
        p_r_pos_w += 50
        p_scroll_right.style.width = `${p_r_pos_w}vw`
        p_scroll_right.style.left = `${p_r_pos}vw`
        /* Add a new elemeent to the left */
        let new_p = document.createElement('div')
        new_p.className = 'portfolio_PC_item'
        new_p.appendChild(img)
        p_scroll.insertBefore(new_p, p_scroll.children[0])
        /* Make the element on the left of the previous centered element the new center */
        let new_current = current.previousElementSibling
        current.className = 'portfolio_PC_item'
        new_current.className += ' portfolio_PC_current'
    }
}




let portfolio_mobile_left = document.getElementById('portfolio_MOBILE_track_left')
let p_mobile_left_position = 0
let p_moveby = 0
let portfolio_mobile_right = document.getElementById('portfolio_MOBILE_track_right')
let p_mobile_right_width = 0
let p_mobile_right_position = 0
function portfolio_scroll_mobile(direction){
    if ((window.innerWidth - 80) !== p_moveby){
        p_moveby = window.innerWidth - 80;
        p_mobile_right_width += p_moveby
        p_mobile_left_position -= p_mobile_left_position % p_moveby
        console.log('ran')
    }
    let img = document.createElement('img')
    let header = document.createElement('header')
    header.innerText = 'CLEAN HANDS PAINTING AND ARTWORK COMPANY'
    let p = document.createElement('p')
    p.innerText = 'A compact business and portfolio site completed in a month'
    let new_p = document.createElement('div')
    new_p.className = 'portfolio_MOBILE_item'
    new_p.appendChild(img)
    new_p.appendChild(header)
    new_p.appendChild(p)
    if (direction == 0){
        p_projects_index_l--
        if (p_projects_index_l < 0){
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
        
        p_mobile_left_position -= p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        portfolio_mobile_left.appendChild(new_p)
    }
    if (direction == 1){
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length -1){
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
    }
    if (direction === 1){
        p_mobile_left_position += p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        p_mobile_right_width += p_moveby
        p_mobile_right_position += p_moveby
        portfolio_mobile_right.style.width = `${p_mobile_right_width}px`
        portfolio_mobile_right.style.left = `-${p_mobile_right_position}px`
        portfolio_mobile_left.insertBefore(new_p, portfolio_mobile_left.children[0])
    }
}