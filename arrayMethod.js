// const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//       </section>
//       <section>${business.addressCity}
//     </section>
//     <section>${business['addressStateCode']}
//     </section>
//     <sesction>${business['addressZipCode']}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"

// })



              //NY FILTER SECTION //


// const newYorkBiz = businesses.filter(business => {
//    inNewYork = false 
   
//   if (business.addressStateCode === "NY") {
//     inNewYork = true;
// }
// return inNewYork

// })


// newYorkBiz.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//       </section>
//       <section>${business.addressCity}
//     </section>
//     <section>${business['addressStateCode']}
//     </section>
//     <section>${business['addressZipCode']}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// })




 const outEl = document.querySelector("#output")
outEl.innerHTML += "<h1>Purchasing Agents</h1>";


const agents = businesses.map(business => {
    return business.purchasingAgent
})

console.table(agents)


// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";

// });

const comp = businesses.map(business => {
  return business.companyName
})

const phone = businesses.map(business => {
  return business.phoneWork
})

console.table(comp)
console.table(phone)



