// const body = document.querySelector('body')
// const ancora = document.createElement('a')
// ancora.setAttribute('href','https://www.ifro.edu.br')
// ancora.setAttribute ('target', 'blank')
// ancora.style.color = "#f00"
// ancora.style.textDecoration ="none"

// ancora.textContent = 'IFRO'
// body.appendChild(ancora)
// const h1 = document.querySelector('h1')
// h1.remove()

// const body = document.querySelector('body')
// const lista = document.createElement('ul')
// const item1 = document.createElement('li')
// const item2 = document.createElement('li')
// const item3= document.createElement('li')
// item1.textContent = 'vnkjv'
// item2.textContent = 'vnkjv'
// item3.textContent = 'vnkjv'
// lista.append(item1)
// lista.append(item2)
// lista.append(item3)
// body.append(lista)
// item1.style.color = '#458456'
// body.style.backgroundColor = '#000000'

const itensMenu = [

    {nome: 'Inicio', url: 'index.html'},
    {nome: 'Sobre', url: 'Sobre.html'},
    {nome: 'Contato', url: 'contato.html'}
];  
function menu (){

    const body = document.querySelector('body')
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    body.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(ul)
    ul.style.backgroundColor = 'black'
    ul.style.display = 'flex'
 
    return ul
    }


function percorer (ul){
   

    itensMenu.forEach(item =>{
        let ancora = document.createElement('a')
        let li =  document.createElement('li')
        ancora.setAttribute('href', item.url)
        ancora.textContent = item.nome.toUpperCase()
        ancora.style.color = 'white'
        ancora.style.textDecoration = 'none'
        li.style.marginLeft = '350px'
        
        ul.appendChild(li)
        li.appendChild(ancora)
        

    })
    
}

percorer(menu())

