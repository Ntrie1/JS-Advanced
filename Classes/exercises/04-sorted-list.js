class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(value) {
        if (this.size < 0) {
            return;
        }
        this.result.push(value);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        //this.result.push(this.result.splice(index,1));
        if (index < 0 || index >= this.size.length) {
            return;
        }
        this.result.splice(index, 1)
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }

    get(givenIndex) {
        if (givenIndex < 0 || givenIndex >= this.size.length) {
            return;
        }
        let result = this.result.indexOf(this.result[givenIndex]);
        if (result === -1) {
            return;
        } else {
            return this.result[givenIndex];
        }
    }


}

let list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));