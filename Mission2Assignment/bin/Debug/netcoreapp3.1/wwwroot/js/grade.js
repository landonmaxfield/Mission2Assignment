$("#btnsend").click(function () {

    let assignments = $("#txtAssignment").val();
    let projects = $("txtproject").val();
    let quizzes = $("txtquizzes").val();
    let exams = $("txtexams").val();
    let intex = $("txtintex").val();

    finalgrade = (parseFloat(assignments) * .55) + (parseFloat(projects) * .05) + (parseFloat(quizzes) * 0.1) + (parseFloat(exams) * 0.2) + (parseFloat(intex) * 0.1) 

   
    if (finalgrade <= 100 && finalgrade >= 94) {
        grades = "A";
    }
    else if (finalgrade < 94 && finalgrade >= 90) {
        grades = "A-";
    }
    else if (finalgrade < 90 && finalgrade >= 87) {
        grades = "B+";
    }
    else if (finalgrade < 87 && finalgrade >= 84) {
        grades = "B";
    }
    else if (finalgrade < 84 && finalgrade >= 80) {
        grades = "B-";
    }
    else if (finalgrade < 80 && finalgrade >= 77) {
        grades = "C+";
    }
    else if (finalgrade < 77 && finalgrade >= 74) {
        grades = "C";
    }
    else if (finalgrade < 74 && finalgrade >= 70) {
        grades = "C-";
    }
    else if (finalgrade < 70 && finalgrade >= 67) {
        grades = "D+";
    }
    else if (finalgrade < 67 && finalgrade >= 64) {
        grades = "D";
    }
    else if (finalgrade < 64 && finalgrade >= 60) {
        grades = "D-";
    }
    else {
        grades = "F";
    }

    alert("Grade: " + finalgrade + "  " + grades)

    

   //$("#picTrack").fadeOut("slow");
})