name_student_array = [];

function showarrayvalues(){
var name_1 = document.getElementById("student_1").value;
var name_2 = document.getElementById("student_2").value;
var name_3 = document.getElementById("student_3").value;
var name_4 = document.getElementById("student_4").value;
var name_5 = document.getElementById("student_5").value;
name_student_array.push(name_1);
name_student_array.push(name_2);
name_student_array.push(name_3);
name_student_array.push(name_4);
name_student_array.push(name_5);

console.log(name_student_array);

document.getElementById("divisionsecond").innerHTML = name_student_array;
document.getElementById("firstbutton").style.display="none";

document.getElementById("secondbutton").style.display = "inline-block";

}
function sortarrayvalues(){
    name_student_array.sort();
    console.log(name_student_array);
    document.getElementById("divisionsecond").innerHTML = name_student_array;
}
