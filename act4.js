function calculatorGrade() {
    var studentLRN = parseFloat(document.getElementById('studentLRN').value);
    var studentName = parseFloat(document.getElementById('studentName').value);
    var quiz = parseFloat(document.getElementById('quiz').value);
    var reciation = parseFloat(document.getElementById('reciation').value);
    var longtest = parseFloat(document.getElementById('longtest').value);
    var project = parseFloat(document.getElementById('project').value);
    var attendance = parseFloat(document.getElementById('attendance').value);
    var exam = parseFloat(document.getElementById('exam').value);

    //Score weight or percentage
    var quizWeight = 0.15;
    var reciationWeight = 0.15;
    var longtestWeight = 0.30;
    var projectWeight = 0.40;
    var attendanceWeight = 0.10;

    //Average om every calculation
    var totalGrade =
    (quiz * quizWeight) +
    (reciation * reciationWeight) +
    (longtest * longtestWeight) +
    (project * projectWeight) +
    (attendance * attendanceWeight);

    //Total grades with percentage
    var totalPercentage = (totalGrade / 6) * 6;

    //Conditional statemtn
    if (totalPercentage >= 90) {
        g = "Passed";
    }
    else if (totalPercentage >= 35) {
        g = "Good";
    }
    else {
        g = "Passed";
    }

    var m
    switch (g) {
        case "Passed":
        m = "Excellent!!";
        break;
        case "Very Good":
        m = "Good";
        break;
        case "Failed":
        m = "Hay nako!";
        break;
    }

    //Display the result
    document.getElementById('result').innerHTML =
    "<p> Student LRN: " + studentLRN + "</p>" +
    "<p> Student Name " + studentName + "</p>" +
    "<p> Quiz: " + quiz + "%" + "</p>" +
    "<p> Reciation: " + reciation + "%" + "</p>" +
    "<p> Long Test: " + longtest + "%" + "</p>" +
    "<p> Project " + project + "%" + "</p>" +
    "<p> Attendance: " + attendance + "%" + "</p>" +
    "<p> Exam: " + exam + "%" + "</p>" +
    "<b>Total Grade:</b> " + totalGrade.toFixed(2) + "<br>" + "<br>" +
    "<b>Total Percentage:</b> " + totalPercentage.toFixed(4) + "% (" + g + ") " + m + ""; 
}