import React, { Component } from 'react';
import './App.css';
// import { Button } from 'reactstrap';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      height: null,
      finalBmi: null,
      meaning: ''
    };

    this.calculateBMI = this.calculateBMI.bind(this);
    this.changeHandler = this.changeHandler.bind(this);

  }

  changeHandler(event) {
    let myname = event.target.name;
    //console.log('myname: ' + myname);
    let myvalue = event.target.value;
    //console.log('myvalue: ' + myvalue);
    this.setState({ [myname]: myvalue });
    
  }

  calculateBMI() {
    let weight = this.state.weight;
    var height = this.state.height;
    if (weight > 0 && height > 0) {
      let finalBmi = Math.floor(weight / (height / 100 * height / 100));
      let meaning = '';

     // console.log("finalBmi: "+ finalBmi);

      this.setState({ finalBmi: finalBmi });

      if (finalBmi < 18.5) {
        meaning = "You are Underweight."
      }
      if (finalBmi >= 18.5 && finalBmi < 25) {
        meaning = "You are Healthy Weight."
      }
      if (finalBmi >= 25) {
        meaning = "You are Overweight."
      }

      this.setState({ meaning: meaning });
    }
    else {
      alert("Please Fill in everything correctly")
    }
  };

  render() {
    return (
      <div className="container" >
        <div className="wrapper-mode">
        <div className="row mt-4 wrapper" >
          <div className="col-sm-12" style={{textAlign:"center"}}>
            <h2 className="title-1">BMI (Body Mass Index)</h2>
            <h2 className="title-2">Calculator</h2>
            <label className="berat">Your Weight(kg): </label>
            <br/>
            <input type="text" name="weight" onChange={this.changeHandler} style={{padding:"5px 0px 10px 0px"}} /><br />
            <br/>
            <label className="tinggi">Your Height(cm): </label>
            <br/>
            <input type="text" name="height" onChange={this.changeHandler} style={{padding:"5px 0px 10px 0px"}}/><br /><br />
            <button className="button" onClick={this.calculateBMI} >Calculate</button><br />
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-sm-12 wrapper-result">
            <p>Your BMI: {this.state.finalBmi}</p> <br />
            <p>Your Result: {this.state.meaning}</p> <br />
          </div>
          <div className="col-sm-12 wrapper-footer">
            <h3 style={{marginBottom:"15px"}}>The Detail about BMI range</h3>
            <p>Under 18.5 = Underweight </p> <br />
            <p>Between 18.5 and 24.9 = Healthy weight</p> <br />
            <p>Between 25 and 29.9 = Overweight</p> <br />
            <p>Between 30 and 39.9 = Obese</p> <br />
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default App;