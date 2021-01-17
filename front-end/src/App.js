import { useState, useRef } from "react";
import './App.css';
import axios from "axios";


// delay time to show the success message after sending data (in miliseconds)
const delayChangeButtonLabel = 2000; 

// inital state for the form data
const initialState = {
    name  : "",
    email : ""
};


function App() {

  const refName   = useRef(null);
  const refEmail  = useRef(null);
  const refBtnShowSubmissions = useRef(null);


  // data form
  // variables
  const [{ name, email }, setState] = useState(initialState);

  // it handles data changing, both name and business email
  const handleChangeData = event => {
    const { name, value } = event.target;
    
    setState(prevState => ({ 
      ...prevState, 
      [name]: value
    }));
  };

  // it clears the form after recording data successfully
  const clearDataForm = () => {
    setState({ ...initialState });
  } 



  // disable form controller
  const [disableFormController, setDisableForm] = useState(false);

  const disableFormFunction = (newState = false) => {
    setDisableForm(newState);
  }



  // Get Started Today button = buttonLabelGST
  const [buttonLabelGST, setButtonLabel] = useState({
    message   : "Get Started Today",
    cssClass  : "btn-form"
  });

  // it changes button label
  const changeButtonGSTLabel = flag => {
    if (flag === "OK") {
      setButtonLabel({
        ...buttonLabelGST,
        message   : "Data submitted successfully!",
        cssClass  : "success-message"
      });
      
    } else {
      //in case there is a fail, the message handling will differ
      setButtonLabel({
        ...buttonLabelGST,
        message   : "Something bad happened. Try again later!",
        cssClass  : "fail-message"
      });      
    }

    setTimeout(() => {
      
      setButtonLabel({
        ...buttonLabelGST,
        message   : "Get Started Today",
        cssClass  : "btn-form"
      });

      // it only clears the form when the data was recorded successfully
      (flag === "OK") && clearDataForm();

      setDisableForm();
      refName.current.focus();
    }, delayChangeButtonLabel);
  };



  // Show Submissions button
  const [color, setColor] = useState("btn-form")

  const changeButtonColor = () => {
    if (color === "btn-form") setColor("btn-green");
    else setColor("btn-form");
  }

  const onClickShowSubmissions = async() => {
    refBtnShowSubmissions.current.blur();
    changeButtonColor();
    showDropBox();

    // it returns to the original button state and focus on Name field
    if (dropBoxClass === "display-dropbox") {
      refName.current.focus();
      return;
    }
    
    // const url = "/contact";
    const url = "http://localhost:3333/contact";
    try {
      const getData = await axios.get( 
        url,
        {  
          headers: { 
            "Content-Type": "application/json"
          }
      });

      showSubmissionsFunction(getData.data.content);

    } catch(error) {
      console.log("### ERROR:", error);
    }
  };



  // drop-down box
  const [dropBoxClass, setDropBoxClass] = useState("no-display-dropbox");

  // show drop-down box
  const showDropBox = () => {
    if (dropBoxClass === "no-display-dropbox") setDropBoxClass("display-dropbox");
    else setDropBoxClass("no-display-dropbox");
  }



  // it checks whether the data was typed
  const validateForm = () => {
    // it validates whether name and email were typed
    if (!name || !email) return "both";

    // it checks email formatting
    if (email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")) return "OK";
    
    return "email";
  }



  // it submits form data
  const submitData = async (event) => {
    event.preventDefault();
    
    // it validates form data
    const validation = validateForm();

    if (validation !== "OK") {
      if (validation === "both") {
        alert("Please, enter Name and Business Email.");
        if (name) refEmail.current.focus();
        else refName.current.focus();
      } else if (validation === "email") {
        alert("Email seems to be invalid");
        refEmail.current.focus();
      }

      return;
    }

    // it sends data to the server so it can be recorded on db
    // const url = "/contact";
    const url = "http://localhost:3333/contact";
    const data = { name, email };

    try {
      const record = await axios.post( 
        url,
        data,
        {  
          headers: { 
            "Content-Type": "application/json"
          }
      });

      disableFormFunction(true);
      
      if (record.data.message)
        changeButtonGSTLabel("OK");
        //after receiving success from axios:
        // change button, disable form and after a while defined in delayChangeButtonLabel, clear the form and focus in Name again
      else changeButtonGSTLabel("NOK");
      
    } catch (error) {
      console.log("### error post", error);
    }
  };



  // it handles show submissions
  const [showSubmissionsContent, setShowSubmissionsContent] = useState("");

  const showSubmissionsFunction = data => {
    const result = data.length
      ? data.map((e, i) => 
          <li key = { i }>{e.name}, <span className = "underline">{e.email}</span></li>)
      : <li key = { 1 }><b>No entries right now</b></li>

    setShowSubmissionsContent(result);
  }

  return (
    <div className = "foundation">
      <div className = "title-form">
        We think your company would be a great fit!
      </div>

      <form>
        <p className = "label-form"> Name </p> 
        <input 
          autoFocus = { true }
          id        = "name"
          className = "text-form" 
          type      = "text"
          name      = "name"
          value     = { name }
          onChange  = { handleChangeData }
          ref       = { refName }
          disabled  = { disableFormController }
        ></input>

        <p className = "label-form"> Email </p>
        <input 
          id          = "email"
          className   = "text-form" 
          type        = "email"
          // placeholder = "name@domain.ca"
          name        = "email"
          value       = { email }
          onChange    = { handleChangeData}
          ref         = { refEmail }
          disabled    = { disableFormController }
        ></input>
      </form>


      {/* Get Started Today Button */}
      <button 
        type      = "button" 
        className = { buttonLabelGST.cssClass}
        onClick   = { submitData }
        disabled  = { disableFormController }
      >
        { buttonLabelGST.message }
      </button>


      {/* Show Submissions Button */}
      <button 
        type      = "button" 
        className = { color }
        onClick   = { onClickShowSubmissions }
        ref       = { refBtnShowSubmissions }
        disabled  = { disableFormController }
      >
        Show Submissions
      </button>


      <div 
        className = { dropBoxClass }
      >
        <ul>{ showSubmissionsContent } </ul>
      </div>
    </div>
  );
}

export default App;