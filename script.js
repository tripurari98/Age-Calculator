function myFun(){
    const inputDate=document.getElementById("date1").value;
    const currDate=document.getElementById("date2").value;

    if(!inputDate||!currDate){
        alert("Please Enter Both DOB and Current Date")
        return ;
    }
    const dob=new Date(inputDate)
    const currentDate=new Date(currDate)

    let years=currentDate.getFullYear()-dob.getFullYear();
    let months=currentDate.getMonth()-dob.getMonth()
    let days=currentDate.getDate()-dob.getDate()



  if(days<0){
    months--;
    const lastMonth=new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days+=lastMonth
  }

  if (months < 0) {
    years--;
    months += 12;
}



    document.getElementById("result").innerHTML=`Your Age :  ${years} Years  ${months} Months ${days} Days`;
   
}