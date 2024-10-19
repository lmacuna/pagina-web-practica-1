var data, metodo, url, tk;

const getLinksNavbar=async()=>{
    url = 'MOCK/navbar.json'
    metodo = 'GET'
    var linksNavbar = await peticiones(data, metodo, url, tk)
    await localStorage.setItem("linksNavbar", JSON.stringify(linksNavbar.linksNavbar))
    return (console.log(linksNavbar), vistaNavBar())
}
getLinksNavbar()
const vistaNavBar = () => {
    let linksNavbar = localStorage.getItem("linksNavbar")
    linksNavbar = JSON.parse(linksNavbar)

    linksNavbar.forEach( (item,index) => {
         document.querySelector("#navbar").innerHTML+=`
         
                 <li key=${index}>
                 <a href=${item.link}>${item.page}</a>
                 </li>
         `
    });
   
}



const getLinksFooter1 = async () => {
    url = 'MOCK/data.json'
    metodo = 'GET'
    var linksFooter1 = await peticiones(data, metodo, url, tk)
    await localStorage.setItem("linksFooter", JSON.stringify(linksFooter1.linksFooter1))
    return (console.log(linksFooter1), listarFooter1(), listarFooter2())
};
getLinksFooter1()

const listarFooter1 = () => {
    let linksFooter1 = localStorage.getItem("linksFooter")
    linksFooter1 = JSON.parse(linksFooter1)
    linksFooter1.forEach((item, index) => {
        console.log(index)
        document.querySelector("#footer-1").innerHTML += `
        <li key=${index}><a href=${item.link}>${item.red}</a></li>
        `
    });
}
const listarFooter2 = () => {
    let linksFooter1 = localStorage.getItem("linksFooter")
    linksFooter1 = JSON.parse(linksFooter1)
    linksFooter1.forEach((item, index) => {
        console.log(index)
        document.querySelector("#footer-2").innerHTML += `
        <li key=${index}><a href=${item.link}>${item.red}</a></li>
        `
    });
}


