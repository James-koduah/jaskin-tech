let current_section = document.getElementById('getting_started')

function display_faq_section(id, nav_elem){
    let section = document.getElementById(id)
    current_section.classList.remove('faq_current')
    section.classList.add('faq_current')
    current_section = section
    if (window.innerWidth < 600){
        document.getElementById('last_nav').scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    let nav_items = document.getElementById('faq_nav').getElementsByClassName('item')
    for (let item of nav_items){
        item.classList.remove('faq_nav_current')
    }
    nav_elem.classList.add('faq_nav_current')
}