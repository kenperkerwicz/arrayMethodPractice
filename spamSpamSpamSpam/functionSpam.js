// From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one


// let find = customers.find(function(email) {
//   return customers.contacts.email
// });
// console.log(find);

newArr = []

customers.forEach(customer => {
 newArr += '  ' + customer.contacts.email  + '  , '
  });
 console.log(newArr)