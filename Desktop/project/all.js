let data = [
    {
        Charge:'free',
        name:'charge1',
    },{
        Charge:'coin',
        name:'charge2',
    },{
        Charge:'coin',
        name:'charge3',
    },{
        Charge:'free',
        name:'charge4'
    }
];
const list = document.querySelector(".list");
let str = "";

data.forEach(function(item,index){
    let content = `<li>${item.name},${item.Charge}</li>`;
    str+=content;
    console.log(str)
})
list.innerHTML = str;