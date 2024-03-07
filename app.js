var student = [
  {
    id: 101,
    details: {
      fname: "zain ul Abdin",
      lname: "qaimi",
      Age: 28,
      city: "karachi",
      courseName: [" css ", " HTML ", " JavaScript "],
    },
  },
  {
    id: 102,
    details: {
      fname: "Owais",
      lname: "qaimi",
      Age: 30,
      city: "islamabad",
      courseName: [" css ", "HTML", "JavaScript"],
    },
  },
  {
    id: 103,
    details: {
      fname: "Abu Bakar",
      lname: "Madani",
      Age: 26,
      city: "lahor",
      courseName: ["Excel", "PowerPoint", "Word"],
    },
  },
  {
    id: 104,
    details: {
      fname: "umair",
      lname: "Madani",
      Age: 32,
      city: "fasalabad",
      courseName: ["css", "HTML", "JavaScript"],
    },
  },
  {
    id: 105,
    details: {
      fname: "Muhammad Shabaz",
      lname: "Madani",
      Age: 41,
      city: "multan",
      courseName: [" css ", " HTML ", " JavaScript "],
    },
  },
]

var dropdwon = document.getElementById("dropdown");
for (i = 0 ; i <student.length ; i++){
  dropdwon.innerHTML += `<option value="${student[i].id}">${student[i].id}</option>`
}
dropdwon.addEventListener('change',function(){
  var selId = dropdwon.value ;
  for(i = 0 ; i < student.length ; i++){
    if(student[i].id === parseInt(selId) ){
      console.log(selId);
      var show = document.getElementById('show')
      show.innerHTML = `<table><tr>
      <td>ID : <span>${student[i].id}</span></td>
      <td>Frist Name :<span>${student[i].details.fname}</span></td>
      <td>last Name :<span>${student[i].details.lname}</span></td>
      <td>Age: <span>${student[i].details.Age}</span></td>
      <td>City : <span>${student[i].details.city}</span></td>
      <td>Course : <span>${student[i].details.courseName}</span></td></tr></table>`
      var cities = document.getElementById("citiesdrop"); 
 cities.value = student[i].details.city    
} 
}
  
})
var cities = document.getElementById("citiesdrop");
for (i = 0 ; i <student.length ; i++){
cities.innerHTML += `<option value="${student[i].details.city}">${student[i].details.city}</option>`
var show = document.getElementById('show')
show.innerHTML += `<table><tr>
<td>ID : <span>${student[i].id}</span></td>
<td>Frist Name :<span>${student[i].details.fname}</span></td>
<td>last Name :<span>${student[i].details.lname}</span></td>
<td>Age: <span>${student[i].details.Age}</span></td>
<td>City : <span>${student[i].details.city}</span></td>
<td>Course : <span>${student[i].details.courseName}</span></td></tr></table>`
  }
  cities.addEventListener('change',function(){
    var selcity = cities.value ;
    for(i = 0 ; i < student.length ; i++){
      if(student[i].details.city === selcity ){
        var show = document.getElementById('show')
        show.innerHTML = `<table><tr>
        <td>ID : <span>${student[i].id}</span></td>
        <td>Frist Name :<span>${student[i].details.fname}</span></td>
        <td>last Name :<span>${student[i].details.lname}</span></td>
        <td>Age: <span>${student[i].details.Age}</span></td>
        <td>City : <span>${student[i].details.city}</span></td>
        <td>Course : <span>${student[i].details.courseName}</span></td></tr></table>`
   var dropdown = document.getElementById('dropdown') 
   dropdown.value = student[i].id    

}
    
  }
}) 