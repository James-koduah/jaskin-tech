let back_buttons = '#fff'
function contact_app(app, e){
    let screen = document.getElementById('contact_phone_app')
    if (app == 'close'){
        screen.style.display = 'none'
        screen.innerHTML = ''
        document.getElementById('contact_phone_buttons').style.color = back_buttons
        return
    }

    let img = e.querySelector('img')

    let loading_img = document.createElement('img')
    loading_img.src = img.src
    loading_img.style.width = '40px'
    loading_img.style.height = '40px'
    loading_img.className = 'bob'
    screen.appendChild(loading_img)

    setTimeout(() => {
        if (app == 'gmail'){
            gmail()
        }
        if (app == 'whatsapp'){
            whatsapp()
        }
        if (app == 'phone'){
            phone()
        }
        if (app == 'linkedin'){
            linkedin()
        }
        if (app == 'x'){
            x()
        }
        if (app == 'facebook'){
            facebook()
        }
    }, 1500);

    function gmail(){
        screen.style.color = 'var(--ma-bg)'
        loading_img.className = ''
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'You can talk to us on this email address'
        let div2 = document.createElement('div')
        div2.className = 'pop'
        let p2 = document.createElement('p')
        p2.innerHTML = 'jaskintechsolutions@gmail.com'
        let button = document.createElement('button')
        button.className = 'action_button'
        button.innerHTML = 'Click to copy'
        button.addEventListener('click', (e)=>{
            navigator.clipboard.writeText('jaskintechsolutions@gmail.com')
            alert('Copied to clipboard: "jaskintechsolutions@gmail.com"')
        })
        div.appendChild(p)
        div2.appendChild(p2)
        screen.appendChild(div)
        screen.appendChild(div2)
        screen.appendChild(button)
    }

    function phone(){
        screen.style.color = 'var(--ma-bg)'
        loading_img.className = ''
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Call us on this number'
        let div2 = document.createElement('div')
        div2.className = 'pop'
        let p2 = document.createElement('p')
        p2.innerHTML = '+233204655978'
        let button = document.createElement('button')
        button.className = 'action_button'
        button.innerHTML = 'Click to copy'
        button.addEventListener('click', (e)=>{
            navigator.clipboard.writeText('+233204655978')
            alert('Copied to clipboard: "+233204655978"')
        })
        div.appendChild(p)
        div2.appendChild(p2)
        screen.appendChild(div)
        screen.appendChild(div2)
        screen.appendChild(button)
    }

    function whatsapp(){
        screen.style.color = 'var(--ma-bg)'
        loading_img.className = ''
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Start your conversation with us'
        let a = document.createElement('a')
        a.className = 'action_button'
        a.innerHTML = 'Open WhatsApp'
        a.href = 'https://wa.me/+233539697314'
        div.appendChild(p)
        screen.appendChild(div)
        screen.appendChild(a)
    }

    function linkedin(){
        screen.style.color = 'var(--ma-bg)'
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Comming Soon'
        div.appendChild(p)
        screen.appendChild(div)
    }
    function x(){
        screen.style.color = 'var(--ma-bg)'
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Comming Soon'
        div.appendChild(p)
        screen.appendChild(div)
    }
    function facebook(){
        screen.style.color = 'var(--ma-bg)'
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.innerHTML = 'Comming Soon'
        div.appendChild(p)
        screen.appendChild(div)
    }


    screen.style.display = 'flex'





}
