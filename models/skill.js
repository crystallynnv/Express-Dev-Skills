const skills = [
    {skill: 'Node', learned: true},
    {skill: 'HTML/CSS', learned: true},
    {skill: 'Ruby', learned: false},
    {skill: 'React', learned: false},
    {skill: 'HTML', learned: true},
    {skill: 'JavaScript', learned: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
};

function getOne(id) {
    return skills[id]
};
