var student_array=[];
function submitted(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);

    console.log(student_array);

    document.getElementById("displayname").innerHTML=student_array;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("displayname").innerHTML=student_array;
    
}

