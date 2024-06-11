Paddle.Environment.set('sandbox')
Paddle.Initialize({
    token: "test_ab48982abd0119909c461dc73c7"
})

let goldPack = 'pro_01hzstqj8gj9652andsmynx70r'
let plusPack = 'pro_01hzstnnb4sxcgcmw90n79twzc'
let starterPack = 'pro_01hzstkksgnyfqc042mwgsfx8c'

let items  = [
    {
        quantity: 1,
        priceId: 'pri_01hzstrvnbzpfmhw6y1mqdxttx'
    },
    {
        quantity: 1,
        priceId: 'pri_01hzstpdexr8113bj88fw7s1m4'
    },
    {
        quantity: 1,
        priceId: 'pri_01hzstmr7ea0kq8n8216n0cgv1'
    }
]

function getPrices(){
    Paddle.PricePreview({items: items})
    .then(res=>{
        console.log(res)

        let items = res.data.details.lineItems
        for (let item of items){
            console.log(item.product.name, item.formattedTotals.subtotal)
        }
    })
    .catch(error=>{console.log(error)})
}



let pay = document.getElementsByClassName('pay')
for (let btn of pay){
    btn.addEventListener('click', ()=>{
        openCheckOut([items[0]])
    })
}


function openCheckOut(items, customer=false){
    Paddle.Checkout.open({
        items: items
    })
}