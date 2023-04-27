class Zadanko {
    constructor(id,title,description,completed) {

        this.id=id;
        this.title=title;
        this.description=description;
        this.completed=completed
    }
}

let zadankaArray = [{
    id: 3,
    title: 'zadanie 3',
    description: 'średnie',
    completed: false
}]

module.exports = { Zadanko, zadankaArray };