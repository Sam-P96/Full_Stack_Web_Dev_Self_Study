let grade = 59;

switch (true) {
    case grade >= 90:
        console.log("Grade A, for Average");
    break;
    case (grade >= 80) && (grade < 90):
        console.log("Grade B, for Bad");
    break;
    case (grade >= 70) && (grade < 80):
        console.log("Grade C, for Catastrophic");
    break;
    case (grade >= 60) && (grade < 70):
        console.log("Grade D, for Disowned");
    break;
    default:
        console.log("Grade F, for Forgotten Forever");
    break;
}