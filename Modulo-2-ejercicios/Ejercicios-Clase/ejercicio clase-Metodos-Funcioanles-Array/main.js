"use strict";
////MAP//////
const prices = [12, 25, 36, 98, 70, 55, 66];

const precios = prices.map((price) => {
  return price + "$";
});

const ulPrice = document.querySelector(".js-prices");

for (const price of prices) {
  ulPrice.innerHTML += `<li>${price}</li>`;
}

////FIND////

const data = [
  { name: "ana", promo: "x", city: "Valencia", skills: ["HTML", "Grid"] },
  { name: "silvia", promo: "x", city: "Madrid", skills: ["JS"] },
  { name: "sara", promo: "x", city: "Barcelona", skills: ["React"] },
  { name: "rebeca", promo: "x", city: "Sevilla", skills: ["HTML", "JS"] },
  { name: "raquel", promo: "x", city: "Lugo", skills: ["Scrum", "Backend"] },
  { name: "dolores", promo: "x", city: "Bilbao", skills: ["Backend", "MySQL"] },
];

function findPerson(eachPerson) {
  return eachPerson.name === "dolores";
}

const dataDolores = data.find(findPerson);

/////FINDINDEX///

const indexLugo = data.findIndex((pepino) => pepino.city === "Lugo");
console.log(indexLugo);

///FILTER////

const filterData = data
  .filter((eachPerson) => eachPerson.name.toLowerCase().includes("s"))
  .filter((eachPerson) => eachPerson.city === "Madrid");

console.log(filterData);



const dataAddMongoDB = data.map((eachPerson)=>{
    eachPerson.skills.push("Mongo DB");
    return eachPerson;
});
console.log(dataAddMongoDB)

////PARA BUSCAR POSICION Y ELIMINAR

const indexAna = data.findIndex((eachPerson)=> eachPerson.name === 'ana');
data.splice(indexAna, 1);

console.log(data);

const blackList = [];
blackList.push(data(indexAna));

console.log(blackList);