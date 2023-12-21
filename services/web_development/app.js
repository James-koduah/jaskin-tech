let questions_box = document.getElementById('questions')
let options_box = document.getElementById('options')
function dialouge_display(data){
    questions_box.innerHTML = ''
    options_box.innerHTML = ''
    if (data.question){
        let p = document.createElement('p')
        p.className = 'question'
        p.innerText = data.question
        questions_box.appendChild(p)
    }
    if (data.subquestion){
        let p = document.createElement('p')
        p.className = 'sub_question'
        p.innerText = data.subquestion
        questions_box.appendChild(p)
    }
    if (data.options){
        for (let elem of data.options){
            options_box.innerHTML += `<div class="option" onclick="dialouge(${elem[0]})"><ion-icon name="radio-button-off"></ion-icon><p>${elem[1]}</p></div>`
        }
    }
    if (data.link){
        options_box.innerHTML += `<a href='${data.link[0]}' class="option"><ion-icon name="desktop-outline"></ion-icon><p>${data.link[1]}</p></a>`
    }
}

let dialouge_history = [0]
function dialouge(num){
    let data = {
        'question' : false,
        'subquestion': false,
        'options' : false,
        'link': false
    }
    if (num === 0){
        data.question = 'Please Describe Yourself'
        data.subquestion = 'Are you...'
        data.options = [
            [1, 'A Business'],
            [2, 'A Non Profit Organization (NGO)'],
            [3, 'A Company'],
            [4, 'An Event Or Ocassion'],
            [5, 'A Content Creator']
        ]
        dialouge_display(data)
    }
    if (num == 1){
        data.question = 'What do you need your Website for?'
        data.options = [
            [11, 'I want to put my information on the internet so people can find me online'],
            [12, 'I want to sell my products online'],
            [13, 'I want a database so I can manage my business processes with technology']
        ]
        dialouge_display(data)
    }
    if (num === 11){
        let data = {
            'question' : 'How big is your budget',
            
            'options' : [
                [111, 'GHC 0 - GHC 3,900'],
                [112, 'GHC 3,900 - GHC 6,000'],
                [113, 'GHC 6,000 and above']
            ]
        }
        dialouge_display(data)
    }
    if (num === 111){
        data.question = 'Informational Website'
        data.subquestion = 'Our Bronze package is well suited for your needs'
        data.link = ['/services/web_development/informational_website/#web_inform_bronze', 'Check Product']
        dialouge_display(data)
    }

    if (num === 112){
        data.question = 'Informational Website'
        data.subquestion = 'Our Silver package is well suited for your needs'
        data.link = ['/services/web_development/informational_website/#web_inform_silver', 'Check Product']
        dialouge_display(data)
    }
    if (num === 113){
        data.question = 'Informational Website'
        data.subquestion = 'Our Gold package is well suited for your needs'
        data.link = ['/services/web_development/informational_website/#web_inform_gold', 'Check Product']
        dialouge_display(data)
    }









    if (num === -1){
        let last = dialouge_history.pop()
        last = dialouge_history.pop()
        if (last === undefined){
            dialouge_history = [0]
            last = 0
        }
        dialouge(last)
        return;
    }
    dialouge_history.push(num)
}