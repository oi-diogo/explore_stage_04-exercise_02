const students = [
    {
        name:"Rodolfo",
        firstGrade: 7.5,
        secondGrade: 5.5,
    },
    {
        name:"Rebecca",
        firstGrade: 9,
        secondGrade: 5.5,
    },
    {
        name:"Caique",
        firstGrade: 2.5,
        secondGrade: 1,
    },
    {
        name:"Maria Júlia",
        firstGrade: 7,
        secondGrade: 6.5,
    },
    {
        name:"Norbet",
        firstGrade: 10,
        secondGrade: 7.5,
    }
];

const gradeAverage = (firstGrade, secondGrade) => (firstGrade + secondGrade) / 2;

for(let student of students){
    const studentAvarage = gradeAverage(student.firstGrade, student.secondGrade);
    const isAproved = (studentAvarage >= 7);
    let resultMessage = "";

    if(isAproved === true){
        resultMessage = "Aprovado";
    }else{
        resultMessage = "Reprovado";
    }
    alert(
        `
        Estudante ${student.name} obteve média ${studentAvarage.toFixed(2)}
        Situação: ${resultMessage}.
        `
    );
}