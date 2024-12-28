import Student  from "./Student"
import ReactDOM from "react-dom/client";

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
      <button id="Submit" onClick={()=>{appendDataToo()}}>Add</button></div>


    </div>
    

  )
  function appendDataToo(){
    
    let textAge =document.getElementById("age")
    let textName = document.getElementById("name")
    let root = document.getElementById("root")
    let textIsStudent=document.getElementsByName("isStudent")
    
    let divTag = document.createElement("div")
    divTag.className="studentData"
    root.append(divTag)

    const reactRoot = ReactDOM.createRoot(divTag)
    if(textName.value==""){
      textName.value="Guest"
    }
    reactRoot.render(
      <Student name= {textName.value} age = {Number(textAge.value)} isStudent={textIsStudent[0].checked?"Yes":"No"}/>
    ) 
   
    textAge.value="";
    textName.value="";
    textIsStudent[0].checked=false;
    textIsStudent[1].checked=false;
  }
  
}
export default App