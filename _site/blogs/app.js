let search_input = document.getElementById('search_box').querySelector('input')
let blogs = []
for (let elem of document.getElementById('hidden').querySelectorAll('p')){
    let item = {}
    item.title = elem.dataset.title
    item.url = elem.dataset.url
    item.summary = elem.dataset.summary
    item.author = elem.dataset.author
    item.image = elem.dataset.img
    blogs.push(item)
}
search_input.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        search()
    }
})
function search(){
    let results_page = document.getElementById('results')
    results_page.innerHTML = `
    <div id='loading'>
        <header>Searching</header>
        <div id='loading_slider'></div>
    </div>
    `
    let match = false
    let search_query = search_input.value.toLowerCase()
    for (let item of blogs){
        let title = item.title
        title = title.toLowerCase()
        let author = item.author
        author = author.toLowerCase()

        if (title.includes(search_query) || author.includes(search_query)){
            let html = `
                <div class="results_item">
                    <div class="results_item_img"><img src="/images/${item.image}" alt=""></div>
                    <div class="results_item_text">
                        <header>${item.title}</header>
                        <p>${item.summary}</p>
                    </div>
                    <a href="${item.url}" class="action_button">Read</a>
                </div>
            `
            if (!match){
                results_page.innerHTML = ''; match = true
            }
            results_page.innerHTML += html
            
        }
    }
    if (!match){
        results_page.innerHTML = `<div id='no_match'>No Match.<br>Try a different keyword</div>`
        for (let item of blogs){
            let html = `
                <div class="results_item">
                    <div class="results_item_img"><img src="/images/${item.image}" alt=""></div>
                    <div class="results_item_text">
                        <header>${item.title}</header>
                        <p>${item.summary}</p>
                    </div>
                    <a href="${item.url}" class="action_button">Read</a>
                </div>
            `
            results_page.innerHTML += html
            setTimeout(() => {
                document.getElementById('no_match').remove()
            }, 5000);
        }
    }

}
