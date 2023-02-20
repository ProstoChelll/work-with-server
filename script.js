const btn = document.querySelector(".btn")
let a = 0;

async function getRespons(){
    let respons = await fetch("https://jsonplaceholder.typicode.com/posts")
    let htmlContent = document.querySelector(".content")
    let content = await respons.json()
    btn.addEventListener("click", () =>{
            htmlContent.innerHTML +=
            `<div class = "content">
                <p>${content[a].id}</p>
                <p>${content[a].title}</p>
            </div>`
        a++
    })
}
getRespons()