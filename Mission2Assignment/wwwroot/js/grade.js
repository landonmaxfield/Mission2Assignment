$("#btnsend").click(function () {
     finalgrade = (($("#txtassignment").val() * .55) + ($("txtproject").val() *.05) + ($("txtquizzes").val() * .1) + ($("txtexams").val()*.2) + ($("txtintex").val() *.1)) 
    if (finalgrade >= 94) {
        lettergrade = "A"
    }
    else if (94 > finalgrade >= 90) {
        lettergrade = "A-"
    }
    else if (90 > finalgrade >= 87) {
        lettergrade = "B+"
    }
    else if (87 > finalgrade >= 84) {
        lettergrade = "B"
    }
    else if (84 > finalgrade >= 80) {
        lettergrade = "B-"
    }
    else if (80 > finalgrade >= 77) {
        lettergrade = "C+"
    }
    else if (77 > finalgrade >= 74) {
        lettergrade = "C"
    }
    else if (74 > finalgrade >= 70) {
        lettergrade = "C-"
    }
    else if (70 > finalgrade >= 67) {
        lettergrade = "D+"
    }
    else if (67 > finalgrade >= 64) {
        lettergrade = "D"
    }
    else if (64 > finalgrade >= 60) {
        lettergrade = "D-"
    }
    else {
        lettergrade = "E"
    }

    alert("Grade: " + finalgrade + "  " + lettergrade)

    $("#picTrack").fadeOut("slow");
})