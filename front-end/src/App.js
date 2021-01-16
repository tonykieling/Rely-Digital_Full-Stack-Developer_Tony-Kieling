import { useState, useRef } from "react";
import './App.css';

const delayChangeButtonLabel = 2000; // delay time to show the success message after sending data (in miliseconds)

const initialState = {
    name  : "",
    email : ""
};


function App() {
  // formatting's tasks
  // click button to add company = data submitted successfully or
  // validate the input data
  // click button to show submissions = show drop down menu formatted accordingly

  // backend API
  //setting database

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
  const changeButtonGSTLabel = () => {
    setButtonLabel({
      ...buttonLabelGST,
      message   : "Data submitted successfully!",
      cssClass  : "success-message"
    });

    setTimeout(() => {
      
      setButtonLabel({
        ...buttonLabelGST,
        message   : "Get Started Today",
        cssClass  : "btn-form"
      });
      clearDataForm();
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

  const onClickShowSubmissions = () => {
    refBtnShowSubmissions.current.blur();
    changeButtonColor();
    showDropBox();
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
    // let result = {};
    // if (!name) result.name = false;
    // if (!email) result.email = false;

    // return result;
    return ((!name || !email) ? false : true);
  }


  // it submits form data
  const submitData = event => {
    event.preventDefault();
    
    // it validates data
    const validation = validateForm();
    // if (Object.keys(validation).length) return;
    if (!validation) {
      alert("Please, enter Name and Business Email.");
      if (name) refEmail.current.focus();
      else refName.current.focus();
      return;
    }
    
    disableFormFunction(true);
    // it sends data to the server
    console.log("sending data to the server");

    //after receiving success from axios:
    // change button, disable form and after a while defined in delayChangeButtonLabel, clear the form and focus in Name again
    changeButtonGSTLabel();

  };

  return (
    <div className = "foundation">
      <div className = "title-form">
        We think your company would be a great fit!
      </div>

      <form>
        <p className = "label-form">Name</p>
        <input 
          autoFocus
          className = "text-form" 
          type      = "text"
          name      = "name"
          value     = { name }
          onChange  = { handleChangeData }
          ref       = { refName }
          disabled  = { disableFormController }
        ></input>

        <p className = "label-form" >Business Email</p>
        <input 
          className = "text-form" 
          type      = "text"
          name      = "email"
          value     = { email }
          onChange  = { handleChangeData}
          ref       = { refEmail }
          disabled  = { disableFormController }
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
        <ul>
          <li>1st item test </li>
          <li>2nd item test</li>
        </ul>
      </div>
    </div>
  );
}

export default App;