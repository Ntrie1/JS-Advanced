function townsToJSON(input){
    let output = [];

    for (let index = 1; index < input.length; index++) {
        const tokens = input[index].split(/\s*\|\s*/g);
        const towns = tokens[1];
        const latitude = Number(tokens[2]).toFixed(2);
        const longtitude = Number(tokens[3]).toFixed(2);
        const currentObj = {
            Town: towns,
            Latitude: Number(latitude),
            Longitude: Number(longtitude)
        }
        output.push(currentObj);
    }
    console.log(JSON.stringify(output));




} townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);