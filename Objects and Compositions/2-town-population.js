function townPopulation(townsAsStrings){
    const result = {};

    for (const line of townsAsStrings) {
        let [town, popul] = line.split('<->')
      
        

        if(town in result){
            result[town] += Number(popul);
        } else {
            result[town] = Number(popul);
        }
    }

    for (const name in result) {
    
        console.log(`${name}: ${result[name]}`);
    }




} townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);