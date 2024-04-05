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
        p.innerHTML = data.subdialouge
        dialouge_box.appendChild(p)
    }
    if (data.options){
        for (let elem of data.options){
            options_box.innerHTML += `<div class="option" onclick="dialouge('${elem[1]}')"><ion-icon name="radio-button-on"></ion-icon><p>${elem[0]}</p></div>`
        }
    }
    if (data.link){
        options_box.innerHTML += `<a href='${data.link_url}' class="option"><ion-icon name="desktop-outline"></ion-icon><p>${data.link}</p></a>`
    }
    if (data.defer){
        let options = current_dialouge[data.defer]
        for (let elem of options){
            options_box.innerHTML += `<div class="option" onclick="dialouge('${elem[1]}')"><ion-icon name="radio-button-on"></ion-icon><p>${elem[0]}</p></div>`
        }
    }
}

let dialouge_history = []
function dialouge(arg){
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
    return;
    dialouge_display(current_dialouge[arg])
    dialouge_history.push(arg)

}

fetch('/services/web_development/dialouge.json', {
    method : "GET"
}).then((res)=>{
    return res.json()
}).then((res)=>{
    current_dialouge = res
    dialouge(0)
})