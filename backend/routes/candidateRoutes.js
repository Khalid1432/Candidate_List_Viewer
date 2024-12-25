const express = require('express');
const router = express.Router();

const candidates = [
    { id: 1, name: "Alice Johnson", skills: "JavaScript, React", yearsOfExperience: 5 },
    { id: 2, name: "Bob Smith", skills: "Node.js, Express", yearsOfExperience: 3 },
    { id: 3, name: "Charlie Brown", skills: "Python, Django", yearsOfExperience: 4 },
    { id: 4, name: "Diana Prince", skills: "Java, Spring Boot", yearsOfExperience: 6 },
    { id: 5, name: "Edward Norton", skills: "C++, Algorithms", yearsOfExperience: 2 },
    { id: 6, name: "Fiona Davis", skills: "HTML, CSS, Bootstrap", yearsOfExperience: 4 },
    { id: 7, name: "George Orwell", skills: "Kotlin, Android", yearsOfExperience: 3 },
    { id: 8, name: "Hannah Lee", skills: "Ruby on Rails", yearsOfExperience: 7 },
    { id: 9, name: "Ian Wright", skills: "PHP, Laravel", yearsOfExperience: 5 },
    { id: 10, name: "Julia Roberts", skills: "DevOps, AWS", yearsOfExperience: 8 },
];

router.get('/', (req, res) => {
    res.json(candidates);
});

module.exports = router;
