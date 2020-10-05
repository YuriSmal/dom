// 1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення.
// Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.

let CountryList = [
    {
     country: "Україна",
     capital:"Київ",
     count: 40000000
    },
    
    {
     country: "Грузія",
     capital:"Тбілісі",
     count: 10000000
    },
    
    {
     country: "Великобританія",
     capital:"Лондон",
     count: 100000000
    },
    
    {
     country: "США",
     capital:"Вашингтон",
     count: 300000000
    }
];

let baseContainer = document.getElementById("base");
let ol = document.createElement("ol");

for (let i = 0; i < CountryList.length; i++) {
        
        let p = document.createElement("p");
        p.classList.add("country-header");
        p.innerHTML = `Країна №${i+1}:`;
        ol.appendChild(p);
   
        let li = document.createElement("li");

        let liCountry = document.createElement("p");
        let liCapital = document.createElement("p");
        let liCount = document.createElement("p");
        liCountry.innerHTML = `Країна - ${CountryList[i].country}`;
        liCapital.innerHTML = `Столиця -${CountryList[i].capital}`;
        liCount.innerHTML = `Населення - ${CountryList[i].count/1000000} млн`;

        if (CountryList[i].country == "Україна") {
            liCountry.style.color = "blue";
        }
        if (CountryList[i].capital == "Київ") {
            liCapital.style.color = "yellow";
        }
            li.style.textTransform = "capitalize";
            li.appendChild(liCountry);
            li.appendChild(liCapital);
            li.appendChild(liCount);
            ol.appendChild(li);
            
    baseContainer.appendChild(ol);
}