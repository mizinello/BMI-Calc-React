import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://bmi-myapp-calculator.herokuapp.com/bmi";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.biodata_diri) {
      return <div>didn't get a person</div>;
    }

    return <div>{/* <div>{this.state.biodata_diri.name}</div> */}</div>;
  }
}

// https://www.youtube.com/watch?v=T3Px88x_PsA&t=458s
