function numsSequences(n, k){
    let arr = [1];

    for (let i = 1; i < n; i++) {

        let lastK = arr.slice(-k)
        let sum = 0;

        for (const nums of lastK) {
           sum += Number(nums);
           
        }
        arr.push(sum)
        
    }
    return arr;






} console.log(numsSequences(6, 3));