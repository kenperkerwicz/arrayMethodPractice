const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

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



//   //NY FILTER SECTION BUT STILL USE ABOVE outEL ^^^^^ //


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

// Filter BIG SPENDERS ///

// for (let index = 0; index < business.orders.length; index++) {
//     const element = business.orders[index];
//     if (element > 9000) {
//         console.log(element)
//     }



// bigMoney = []
// const bigSpenders = businesses.filter(business => {

//  business.orders.forEach(order => {
//     if (order > 9000) {
//           bigMoney += order
//     } 
//  });
   
//  }

// )
// console.log(bigMoney)



// get to orders array
// get each individual item in orders array
// pass if statement with condition item > 9000
// if passes condition, it must be returned and displayed


// DIFF SECTION OF MAP METHOD ///


//  const outEl = document.querySelector("#output")
// outEl.innerHTML += "<h1>Purchasing Agents</h1>";


// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// console.table(agents)


// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";

// });



// const comp = businesses.map(business => {
//   let obj = []
//     obj += ` name:   ${business.purchasingAgent.nameFirst}  `
//     + ` workplace  ${business.companyName} ` + 
//    + ` phone number    ${business.phoneWork}  ` 
//   return obj;
// })

// const phone = businesses.map(business => {
//   return business.phoneWork
// })
// outEl.innerHTML += comp;



// console.table(phone)





// FIND METHOD //

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//            const searchItem = keyPressEvent.target.value
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business => {
//                    return business.purchasingAgent.nameFirst.includes(searchItem) || business.purchasingAgent.nameLast.includes(searchItem)
//                 }
            
//             );
// // if () 
// // console.log(foundBusiness)
//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `
//         }
//     });


    // const foundLast = businesses.find(
    //     business => {
    //        return business.purchasingAgent.nameLast.includes(searchItem)
    //     })



    ///Reduce method ///


//     businesses.forEach(business => {
//     //     /* CALCULATE ORDER SUMMARY */
//      let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue,
//     0
// )
    
    
//         outEl.innerHTML += `
//             <h2>
//                 ${business.companyName}
//                 ($${totalOrders})
//             </h2>
//             <section>
//                 ${business.addressFullStreet}
//             </section>
//             <section>
//                 ${business.addressCity},
//                 ${business.addressStateCode}
//                 ${business.addressZipCode}
//             </section>
//         `;
//         outEl.innerHTML += "<hr/>";
//     });

    /* CALCULATE ORDER SUMMARY */

    //Lightning Ex #1 //



//     const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

//     const totalRainfall = monthlyRainfall.reduce(function(a,b){return a + b})
    
//     console.log(totalRainfall)

//     const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce(function(a,b){return a + ' ' + b})

// console.log(sentence)