
















let p_projects = [
    ['images/parma.jpg', ''],
    ['images/afrispark.jpg', 'https://sparkworld.jaskintech.com/'],
    ['images/cleanhands.jpg', 'https://cleanhands.jaskintech.com/'],
    ['images/glory_metal_works.jpg', 'https://glorymetal.jaskintech.com/'],
    ['images/pointOfSale.jpg', ''],
    ['images/pointOfSaleTransactions.jpg', ''],
    ['images/teemboomhero.jpg', 'https://teemboom.com'],
    ['images/classcentralteachersmanagement.jpg', ''],
]
let p_projects_index_r = 4
let p_projects_index_l = 0
let p_scroll = document.getElementById('portfolio_PC_track_left')
let p_scroll_right = document.getElementById('portfolio_PC_track_right')
let p_scroll_position = -75
let p_r_pos = 0
let p_r_pos_w = 100;
function portfolio_scroll(movement) {
    let current = p_scroll.querySelector('.portfolio_PC_current')
    let img = document.createElement('img')
    if (movement == 0) {
        p_projects_index_l--
        if (p_projects_index_l < 0) {
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
    }
    if (movement == 1) {
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length - 1) {
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
    }
    if (movement === 0) { //Moving right
        /* Move the portfolio div to the left */
        p_scroll_position += -50
        p_scroll.style.left = `${p_scroll_position}vw`
        /* Add a new elemeent to the right */
        let new_p = document.createElement('a')
        new_p.className = 'portfolio_PC_item'
        new_p.target = '_blank'
        new_p.href = p_projects[p_projects_index_l][1]
        new_p.appendChild(img)
        p_scroll.appendChild(new_p)
        /* Make the element on the right of the previous centered element the new center */
        let new_current = current.nextElementSibling
        current.className = 'portfolio_PC_item'
        new_current.className += ' portfolio_PC_current'
    }
    if (movement === 1) {
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
        let new_p = document.createElement('a')
        new_p.className = 'portfolio_PC_item'
        new_p.target = '_blank'
        new_p.href = p_projects[p_projects_index_r][1]
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
function portfolio_scroll_mobile(direction) {
    if ((window.innerWidth - 80) !== p_moveby) {
        p_moveby = window.innerWidth - 80;
        p_mobile_right_width += p_moveby
        p_mobile_left_position -= p_mobile_left_position % p_moveby
        console.log('ran')
    }
    let img = document.createElement('img')
    let new_p = document.createElement('a')
    new_p.target = '_blank'
    new_p.className = 'portfolio_MOBILE_item'
    new_p.appendChild(img)
    if (direction == 0) {
        p_projects_index_l--
        if (p_projects_index_l < 0) {
            p_projects_index_l = p_projects.length - 1;
        }
        img.src = p_projects[p_projects_index_l][0]
        new_p.href = p_projects[p_projects_index_l][1]

        p_mobile_left_position -= p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        portfolio_mobile_left.appendChild(new_p)
    }
    if (direction == 1) {
        p_projects_index_r++
        if (p_projects_index_r > p_projects.length - 1) {
            p_projects_index_r = 0
        }
        img.src = p_projects[p_projects_index_r][0]
        new_p.href = p_projects[p_projects_index_r][1]
    }
    if (direction === 1) {
        p_mobile_left_position += p_moveby
        portfolio_mobile_left.style.left = `${p_mobile_left_position}px`
        p_mobile_right_width += p_moveby
        p_mobile_right_position += p_moveby
        portfolio_mobile_right.style.width = `${p_mobile_right_width}px`
        portfolio_mobile_right.style.left = `-${p_mobile_right_position}px`
        portfolio_mobile_left.insertBefore(new_p, portfolio_mobile_left.children[0])
    }
}





let contactPopupState = false
function contactPopup(header) {
    let container = document.getElementById('contactPopup')
    if (!contactPopupState) {
        container.style.display = 'flex'
        container.innerHTML = `
            <div class="contactPCover fadein" onclick="contactPopup()" ></div>
            <div class="contactPContent slideup">
                <button class="contactPClose" onclick="contactPopup()">X</button>
                <header class="contactPHeader">${header}</header>
                <div class="contactPSocials">
                    <header>Don't Delay - Reach out on your preferred platform and let's get started!</header>
                    <div class="cpsItems">
                        <div class="cpsItem"><img src="images/facebook_icon.png" alt="Fackbook icon"></div>
                        <div class="cpsItem"><img src="images/linkedin_icon.png" alt="Linkedin icon"></div>
                        <div class="cpsItem"><img src="images/gmail_icon.png" alt="Gmail icon"></div>
                        <div class="cpsItem"><img src="images/whatsapp_icon.png" alt="Whatsapp icon"></div>
                    </div>
                </div>
                <div class="contactPInputBox">
                    <header>Even better, share your email, social handle, or phone number, and we’ll reach out to you!</header>
                    
                    <form action="https://api.web3forms.com/submit" onsubmit="clear_form(this)" method="POST">
                        <input type="hidden" name="access_key" value="db46ff7f-97ca-47c2-acc2-f64146099bc7">
                        <input type="hidden" name="from_name" value="Jaskin Tech Contact Popup">
                        <input type="hidden" name="redirect" value="https://jaskintech.com/contact/success-thank_you">
                        <input name="user social media contact" type="text">
                        <div>
                            <button class='action_button' type="submit" >Send, We'll Answer!</button>
                        </div>
                    </form>
                </div>
            </div>`
        contactPopupState = true
    } else {
        document.getElementsByClassName('contactPCover')[0].classList.add('fadeout')
        document.getElementsByClassName('contactPContent')[0].classList.add('slideDown')
        setTimeout(() => {
            container.style.display = 'none'
            container.innerHTML = ''
        }, 200);
        contactPopupState = false
    }
}