const templateCard = document.querySelector("[data-template]");
const containerCard = document.getElementById("container");
const searchInput = document.getElementById("input");

const pagina = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
const targeta = document.getElementById("card");
const all = document.getElementsByClassName("body");
const linea = document.getElementById("linea");

const country = document.getElementsByClassName("pais");
const Back = document.getElementById("Back");

const black = document.getElementById("black");
const white = document.getElementById("white");
//Variables de la Nueva ventana

const pimg = document.getElementById("pImg")
const pname = document.getElementById("Pname");
const pnative = document.getElementById("Pnative");
const pPopulation = document.getElementById("pPopulation");
const pRegion = document.getElementById("Pregion");
const pSub = document.getElementById("pSub");
const pCapital = document.getElementById("pCapital");
const borderCountries = document.getElementById("borderCountries");
const pLevel = document.getElementById("pLevel");
const pCurrencies = document.getElementById("pCurrencies");
const languages = document.getElementById("Languages");

//region

const Europe = document.getElementById("Europe");
const Asia = document.getElementById("Asia");
const America = document.getElementById("America");
const Africa = document.getElementById("Africa");
const Oceania = document.getElementById("Oceania");

let paises = []

searchInput.addEventListener("input", e =>{
    let value = e.target.value.toLowerCase();
    paises.forEach(pais=>{
        const isVisible = pais.name.toLowerCase().includes(value);
        if(isVisible){
            pais.element.style.display = "flex";
        }else{
            pais.element.style.display = "none";
        }

        if(value.varchar < 500){
            if(pais.name == "United States of America"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Brazil"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Iceland"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Afghanistan"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Aland Islands"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Albania"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Algeria"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "El Salvador"){
                pais.element.style.display = "flex";
            }
            if(pais.name == "Russian Federation"){
                pais.element.style.display = "flex";
            }
        }
    })
})


fetch("https://restcountries.com/v2/all")
.then(res=> res.json())
.then(data=>{
    paises = data.map(pais=>{
        const card = templateCard.content.cloneNode(true).children[0];
        const name = card.querySelector("[data-name]");
        const population = card.querySelector("[data-population]");
        const capital = card.querySelector("[data-capital]");
        const region = card.querySelector("[data-region]");
        const img = card.querySelector("[data-img]");

        img.src = pais.flag;
        capital.textContent = `Capital: ${pais.capital}`;
        name.textContent = pais.name;
        population.textContent = `Population: ${pais.population}`;
        region.textContent = `Region: ${pais.region}`;
        card.style.display = "none";
        if(pais.name == "Germany"){
            card.style.display = "flex";
        }
        if(pais.name == "United States of America"){
            card.style.display = "flex";
        }
        if(pais.name == "Brazil"){
            card.style.display = "flex";
        }
        if(pais.name == "Iceland"){
            card.style.display = "flex";
        }
        if(pais.name == "Afghanistan"){
            card.style.display = "flex";
        }
        if(pais.name == "Aland Islands"){
            card.style.display = "flex";
        }
        if(pais.name == "Albania"){
            card.style.display = "flex";
        }
        if(pais.name == "Algeria"){
            card.style.display = "flex";
        }
        if(pais.name == "El Salvador"){
            card.style.display = "flex";
        }
        if(pais.name == "Russian Federation"){
            card.style.display = "flex";
        }
        card.style.cursor = "pointer";
        card.onclick = () =>{
            all[0].style.display= "none";
            country[0].style.display = "flex";

            pimg.src= pais.flag;
            pname.children[0].textContent = pais.name ;
            pnative.textContent = `Native Name: ${pais.nativeName}`;
            pPopulation.textContent = `Population : ${pais.population}`;
            pRegion.textContent = "Region: " + pais.region;
            pSub.textContent = `Sub Region: ${pais.subregion}`;
            pCapital.textContent = `Capital: ${pais.capital}`;
            borderCountries.children[0].textContent = `Border Countries:`;
            borderCountries.children[1].textContent = pais.borders;
            pLevel.textContent = `Top Level Domain: ${pais.topLevelDomain}`;
            pCurrencies.textContent = `Currencies: ${pais.currencies.map(e=>{
                return e.name + '  '+ e.symbol  ;
            })}`;
            languages.textContent = `Languages: ${pais.languages.map(e=>{
              
                return e.name + "("+ e.nativeName + ")";
                })}`

        }
        Europe.onclick = () =>{
            card.style.display = "flex";
        }

        containerCard.appendChild(card);

     
        return {name: pais.name, population:pais.population, region: pais.region, element: card}
    })
})


localStorage.setItem("mode", "white");

var mode = localStorage.getItem('mode')

let ChangeMode = () =>{
    paises.forEach(pais =>{
        pais.element.style.backgroundColor = "hsl(209, 23%, 22%)";
        pais.element.style.boxShadow = "0px 0px 0px 3px hsl(210, 30%, 20%)";
        pais.element.style.color = "hsl(0, 0%, 100%)"
    })
    pagina[0].style.backgroundColor = " hsl(207, 26%, 17%)";
    pagina[0].style.color = "hsl(0, 0%, 100%)";

    containerCard.style.backgroundColor = " hsl(207, 26%, 17%)";
    header[0].style.backgroundColor = "  hsl(209, 23%, 22%)";
    header[0].style.color = "hsl(0, 0%, 100%)";
    all[0].style.backgroundColor = "hsl(207, 26%, 17%)";

    mode ="black";
    linea.style.border = "1px solid hsl(210, 30%, 20%)";
    searchInput.style.backgroundColor ="hsl(209, 23%, 22%) ";
    searchInput.style.border = "0.5px solid hsl(210, 30%, 20%)";
    searchInput.style.color ="hsl(0, 0%, 100%)";
    Back.style.backgroundColor =" hsl(209, 23%, 22%)";
    Back.style.color = "white";
    Back.style.boxShadow = "0px 0px 3px 1px gray";
    Back.style.border = "1px solid hsl(210, 30%, 20%)";
    borderCountries.children[1].style.backgroundColor = "hsl(209, 23%, 22%)";
    borderCountries.children[1].style.border = "1px solid hsl(210, 30%, 20%)";
    borderCountries.children[1].style.boxShadow = "0px 0px 3px 1px gray";
    white.style.display = "flex";
    black.style.display = "none";
}
white.onclick = () =>{
    paises.forEach(pais =>{
        pais.element.style.backgroundColor = "hsl(0, 0%, 100%)";
        pais.element.style.boxShadow = "0px 0px 5px 2px rgb(231, 231, 231)";
        pais.element.style.color = "Black"
    })
    pagina[0].style.backgroundColor = " hsl(0, 0%, 98%)";
    pagina[0].style.color = "Black";

    containerCard.style.backgroundColor = " hsl(0, 0%, 98%)";
    header[0].style.backgroundColor = " hsl(0, 0%, 100%)";
    header[0].style.color = "Black";
    all[0].style.backgroundColor = "hsl(0, 0%, 98%)";

    mode ="white";
    linea.style.border = "1px solid rgb(221, 221, 221)";
    searchInput.style.backgroundColor ="hsl(0, 0%, 100%) ";
    searchInput.style.border = "1px solid rgb(218, 218, 218)";
    searchInput.style.color ="Black";
    Back.style.backgroundColor =" hsl(0, 0%, 100%)";
    Back.style.color = "Black";
    Back.style.boxShadow = "0px 0px 3px 1px gray";
    Back.style.border = "1px solid hsl(210, 30%, 20%)";
    borderCountries.children[1].style.backgroundColor = "hsl(0, 0%, 100%)";
    borderCountries.children[1].style.border = "1px solid hsl(210, 30%, 20%)";
    borderCountries.children[1].style.boxShadow = " 0px 0px 2px 1px hsl(0, 0%, 88%) ";
    white.style.display = "none";
    black.style.display = "flex";
}
if(mode == "black"){
    ChangeMode();
}
Back.onclick = () =>{
    all[0].style.display= "flex";
    country[0].style.display = "none";
}