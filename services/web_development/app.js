let dialouge_box = document.getElementById('dialouge')
let options_box = document.getElementById('options')
let current_dialouge;
function dialouge_display(data){
    dialouge_box.innerHTML = ''
    options_box.innerHTML = ''
    if (data.dialouge){
        let p = document.createElement('p')
        p.className = 'dialouge'
        p.innerText = data.dialouge
        dialouge_box.appendChild(p)
    }
    if (data.subdialouge){
        let p = document.createElement('p')
        p.className = 'sub_dialouge'
        p.innerText = data.subdialouge
        dialouge_box.appendChild(p)
    }
    if (data.options){
        for (let elem of data.options){
            options_box.innerHTML += `<div class="option" onclick="dialouge('${elem[1]}')"><ion-icon name="radio-button-off"></ion-icon><p>${elem[0]}</p></div>`
        }
    }
    if (data.link){
        options_box.innerHTML += `<a href='${data.link_url}' class="option"><ion-icon name="desktop-outline"></ion-icon><p>${data.link}</p></a>`
    }
}

let dialouge_history = [0]
function dialouge(arg){
    if (arg === 'business'){
        current_dialouge = business_dialouge
        dialouge_display(current_dialouge[1])
        dialouge_history.push('1')
        return;
    }

    if (arg === -1){
        let last = dialouge_history.pop()
        last = dialouge_history.pop()
        if (last === undefined){
            dialouge_history = [0]
            last = 0
        }
        dialouge(last)
        return;
    }
    if (arg === 0){
        let data = {
            "dialouge": "Please Describe Yourself",
            "subdialouge": "Are you...",
            "options": [
                ['A Business', 'business'],
                ['A Non Profit Organization (NGO)', 'ngo'],
                ['A Company', 'company'],
                ['An Event', 'event'],
                ['A Content Creator', 'blogger']
            ]
        }
        dialouge_display(data)
        dialouge_history.push(0)
        return
    }


    dialouge_display(current_dialouge[arg])
    
    dialouge_history.push(arg)
    console.log(dialouge_history)

}

let business_dialouge = ''
fetch('/services/web_development/dialouge_files/business.json', {
    method : "GET"
}).then((res)=>{
    return res.json()
}).then((res)=>{
    business_dialouge = res
})