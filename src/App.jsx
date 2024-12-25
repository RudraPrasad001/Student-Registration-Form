

function App(){
  return(
    <div className="root" id='root'>
      <div className="Register">
      <h1>Student Register</h1>
      <span className = "details">Name:</span><input type="text" name="name" id="name" placeholder="Name"/><br /><br></br>
      <span className = "details">   Age:   </span><input type='text' name="age" id="age" placeholder="Age"/>
      <p>Student:</p>
      <span className = "details"> Yes</span>
      <input type="radio" name="isStudent"/>
      <span className = "details"> No</span>
      <input type="radio" name="isStudent"/><br/><br />
      <button id="Submit" onClick={appendData}>Add</button></div>

    </div>

  )
  function appendData(){
    
    let textAge =document.getElementById("age")
    let textName = document.getElementById("name")
    let root = document.getElementById("root")
    let divTag = document.createElement("div")
    let textIsStudent=document.getElementsByName("isStudent")
   

    divTag.className="studentData"
   

    let nameP =document.createElement("p")
    nameP.append("Name: ")
    if(textName.value===""){
      nameP.append("Guest")
    }
    else{
    nameP.append(textName.value)}

    let ageP =document.createElement("p")
    ageP.append("Age: ")
    
    if(isNaN(textAge.value) ||textAge.value===""){
      ageP.append("Nil")
   }
    else{
      ageP.append(textAge.value)
    }

    let isStudentP =document.createElement("p")
    isStudentP.append("Is Student :")
    isStudentP.append(textIsStudent[0].checked?"Yes":"No")
    
    divTag.appendChild(nameP)
    divTag.appendChild(ageP)
    divTag.appendChild(isStudentP)
    root.appendChild(divTag)
    textAge.value="";
    textName.value="";
    textIsStudent[0].checked=false;
    textIsStudent[1].checked=false;
  }
}
export default App