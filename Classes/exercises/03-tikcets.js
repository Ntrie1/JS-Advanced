function solve(arrString, sortCriteria){

 
   class Ticket{
constructor(destination,price,status){
    this.destination = destination;
    this.price = price;
    this.status = status;
}
   }
   
 
   let tickets = [];

 arrString.forEach((line) => {
   let [destination, price, status] = line.split("|");
    price = Number(price)
    tickets.push(new Ticket(destination, price, status));
 });

 let sorted;

 if(sortCriteria === 'destination'){
    sorted =  tickets.sort((a,b) =>
    a.destination.localeCompare(b.destination));
 } else if(sortCriteria === 'price'){
    sorted = tickets.sort((a,b)=>
    a.price - b.price);
 } else {
    sorted =  tickets.sort((a,b)=>
    a.status.localeCompare(b.status));
 }

 return sorted;




} solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')