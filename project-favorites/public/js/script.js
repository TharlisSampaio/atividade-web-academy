

function addLink(){
    const ul = document.querySelector('#ul')
    const input = document.querySelector('#input')
    const li = document.createElement('li')

    li.innerText = input.value
    console.log(li)
    ul.appendChild(li)
    console.log(ul)
   
}
