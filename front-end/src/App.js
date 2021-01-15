import './App.css';

function App() {
  // formatting taks
  // click button to add company = data submitted successfully or
  // validate the input data
  // click button to show submissions = show drop down menu formatted accordingly

  // backend API
  //setting database

  return (
    <div>
      <h4 className = "title-form">
        We think your company would be a great fit!
      </h4>

      <form>
        <p className = "label-form">Name</p>
        <input className = "text-form" type = "text"></input>
        <p className = "label-form" >Business Email</p>
        <input className = "text-form" type = "text"></input>

      </form>

      <button type="button" className="btn-form">Get Started Today</button>
      <button type="button" className="btn-form">Show Submissions</button>

      <div className = "drop-down-submissions">
        <ul>
          <li>1st item test </li>
          <li>2nd item test</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
