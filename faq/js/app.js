let current_section = document.getElementById('getting_started')

function display_faq_section(id, nav_elem){
    let section = document.getElementById(id)
    current_section.classList.remove('faq_current')
    section.classList.add('faq_current')
    current_section = section
    if (window.innerWidth < 850){
        document.getElementById('last_nav').scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

    let nav_items = document.getElementById('faq_nav').getElementsByClassName('item')
    for (let item of nav_items){
        item.classList.remove('faq_nav_current')
    }
    nav_elem.classList.add('faq_nav_current')
}




function display_question_answer(){
    let faq_topics = document.querySelectorAll('.faq_topic')
    for (let topic of faq_topics){
        let header = topic.getElementsByClassName('faq_topic_header')[0]
        let content = topic.getElementsByClassName('faq_topic_content')[0]
        header.addEventListener('click', ()=>{
            let header_icon = header.querySelector('ion-icon')
            if (content.style.display === 'none' || !content.style.display){
                content.style.display = 'block'
                header_icon.name = "remove-circle-outline"
            }else{
                content.style.display = 'none'
                header_icon.name = "add-circle-outline"
            }
        })
    }
}


window.onload = ()=>{
    display_question_answer()
}