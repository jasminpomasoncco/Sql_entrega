const socket = io()
loadFirstData()


const createproduct_form = document.getElementById('create_product')
createproduct_form.onclick = e => {
    e.preventDefault();
    const title = document.getElementById('title').value 
    const price = document.getElementById('price').value 
    const thumbnail = document.getElementById('thumbnail').value 
    socket.emit('listproduct-in', {title, price, thumbnail});
   // createproduct_form.reset()
    
}

const createmessage_bttn = document.getElementById('send')
createmessage_bttn.onclick = e => {
    e.preventDefault();
    const email = document.getElementById('email').value 
    const message = document.getElementById('message').value 
    socket.emit('messagess-in', {email, message})
}

socket.on('listproduct-in', products =>{
    addDataToDiv(products);
})

socket.on('messagess-in', messages =>{
    addSMSToDiv(messages);
})

function addDataToDiv(products){
        const listproducts = document.getElementById('listproducts');
        listproducts.innerHTML += `<tr>
        <td>${products.title}</td>
        <td>${products.price}</td>
        <td><img src="${products.thumbnail}" width="50px" height="50px"></td>
        </tr>
                            `;
}


function addSMSToDiv(messages){
    const messagess = document.getElementById('messagess');
    messagess.innerHTML += `
    <br> <b style="color:blue"> ${messages.email} </b> <b style="color:maroon">${messages.date}</b>: <i style="color:green">${messages.message}</i>
    `;
}

function loadDataToDiv(products) {
    console.log(products);
    products.forEach(p => addDataToDiv(p));
}


function loadSMSToDiv(messages) {
    console.log(messages);
    messages.forEach(m => addSMSToDiv(m));
}

function loadFirstData() {
    fetch('/api/products')
    .then(products => products.json())
    .then(p=> {
        loadDataToDiv(p.products)
    })
        .catch(e => alert(e))

        
    fetch('/api/messages')
    .then(messages => messages.json())
    .then(m=> {
        loadSMSToDiv(m.messages)
    })
        .catch(e => alert(e))
        
}