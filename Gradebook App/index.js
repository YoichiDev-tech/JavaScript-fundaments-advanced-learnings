function getAverage(scores) {

    let total = 0;
    // solve the edge-case first
    if(scores.length == 0) {
        return 0;
    }

    // accumulate sum + count of the numbers (length)
    for(let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    let average = total / scores.length;
    
    return average;
}

function getGrade(score) {

    if(score == 100) {
        return "A+";

    } else if(score >= 90 && score <= 99) {
        return "A";

    } else if(score >= 80 && score <= 89) {
        return "B";

    } else if(score >= 70 && score <= 79) {
        return "C";

    } else if(score >= 60 && score <= 69) {
        return "D";

    } else if(score <= 59) {
        return "F";
    }
}

function hasPassingGrade(score) {

    if(getGrade(score) != "F") {
        return true;

    } else return false;
}

function studentMsg(scores, studentScore) {

    let average = getAverage(scores);

    let grade = getGrade(studentScore);

    if(hasPassingGrade(studentScore)) {
        return `Class average: ${average}.
                Your grade: ${grade}.
                You passed the course.`

    } else {
        return `Class average: ${average}.
                Your score: ${grade}.
                You failed the course.`
    }
}

getAverage([35, 22, 18, 44, 62]);
getGrade(42);
hasPassingGrade(42);
studentMsg([35, 22, 18, 44, 62], 42);

console.log(studentMsg([35, 22, 18, 44, 62], 42));