function submit(){
    let submitButton = document.getElementById("submitButton").innerHTML;

    let total_grades =parseInt (document.getElementById("total_grades").innerHTML);
    let final_grade =parseInt (document.getElementById("final_grade").innerHTML);
    let Quizes =parseInt (document.getElementById("Quizes").value);
    let Midterm =parseInt (document.getElementById("Midterm").value);
    let FinalTest =parseInt (document.getElementById("FinalTest").value);
    let Oral =parseInt (document.getElementById("Oral").value);

    let totel = Quizes + Midterm + FinalTest + Oral;
       if ( totel >= 90){
           document.getElementById("total_grades").innerHTML ="A";
           parseInt(document.getElementById("final_grade").innerHTML = totel);
       }else if ( totel >= 80){
        document.getElementById("total_grades").innerHTML ="B";
        parseInt(document.getElementById("final_grade").innerHTML = totel);
    }else if ( totel >= 70){
        document.getElementById("total_grades").innerHTML ="C";
        parseInt(document.getElementById("final_grade").innerHTML = totel);
    }else if ( totel >= 60){
        document.getElementById("total_grades").innerHTML ="D";
        parseInt(document.getElementById("final_grade").innerHTML = totel);
    } else{
        document.getElementById("total_grades").innerHTML ="F";
        parseInt(document.getElementById("final_grade").innerHTML = totel);
    }
}
