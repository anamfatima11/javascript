function familytree(person) {
    console.log(person.name);
    person.children.forEach(familytree);
}

const grandDad = {
name: 'Grand Dad',
children: [{
name: 'uncle1',
children: [{
name: 'cousin11',
children: [],
}, {
name: 'cousin12',
children: [{
name: 'nephew121',
children: []
}]
}]
}, {
name: 'father',
children: [{
name: 'brother1',
children: [],
}, {
name: 'brother2',
children: [{
name: 'nephew221',
children: []
}]
}, {
name: 'self',
children: [{
name: 'son1',
children: [{
name: 'grandson11',
children: [],
}]
}, {
name: 'daughter',
children: [{
name: 'grandDaughter11',
children: []
}]
}]
}]
}]
}


familytree(grandDad);




o/p 

Grand Dad
uncle1
cousin11
cousin12
nephew121
father
brother1
brother2
nephew221
self
son1
grandson11
daughter
grandDaughter11