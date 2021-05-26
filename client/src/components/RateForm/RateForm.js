import React, { Component } from "react";
import StarRating from "./StarRating";
import Checkboxes from "./Checkbox";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Grab currentUser and currentBusiness from the user db
      // Add the below fields to the user db to store that info
      currentUser: "",
      currentBusiness: "",
      comment: "",
      maskRating: "",
      socialDistancingRating: "",
      cleanlinessRating: "",
      finalBusinessRating: [],
    };
  }

  // Get currentUser and CurrentBusiness from db
  // Example
  // getEmployees = () =>
  // fakeRequest()
  //   .then(employees => this.setState({ employees }))

  // Once the form is submited this function will post to the backend

  componentDidMount = () => {
    this.getLocation();
    this.getUser();
  };

  // Check if this get an specific ID or all the businesses

  getLocation = () => {
    axios
      .get("/allData/id")
      .then((response) => {
        const data = response.data;
        this.setState({ currentBusiness: data });
        console.log("Data has been received !!");
      })
      .catch(() => {
        alert("Error retriving data !!!");
      });
  };
  getUser = () => {
    axios.get("/user").then((response) => {
      const userData = response.userData;
      this.setState({ currentUser });
      console.log("User data has been added");
    });
  };

  // Once the form is submited this function will post to the backend

  handleSubmit = () => {
    console.log("handleSubmit hittin");
    // const postURL = "";
    // fetch(postURL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // check field names of the user and business db
    //     currentUser: currentUser,
    //     currentBusiness: currentBusiness,
    //     comment: comment,
    //     maskRating: maskRating,
    //     socialDistancingRating: socialDistancingRating,
    //     cleanlinessRating: cleanlinessRating,
    //     finalBusinessRating: finalBusinessRating,
    //   }),
    // }).then(() => {
    //   // Once the rating its posted the user will be notified
    //   alert("Thanks for sharing your feedback");
    // });
  };

  handleCommentChange(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  handleMaskRatingChange(event) {
    this.setState({
      maskRating: event.target.checked,
    });
  }

  handleSocialDistancingChange(event) {
    this.setState({
      socialDistancingRating: event.target.checked,
    });
  }

  handleCleanlinessRatingChange(event) {
    this.setState({
      cleanlinessRating: event.target.checked,
    });
  }

  handleFinalBusinessRatingChange(event) {
    this.state({
      finalBusinessRating: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Hi {this.state.currentUser} Please rate your experience on{" "}
            {this.state.currentBusiness}
          </label>

          {/* Rate if the employees are wearing masks and Gloves */}
          <label>Employees wear Masks and Gloves</label>
          <Checkboxes onChange={this.handleMaskRatingChange} />

          {/* Rate Social Distancing  */}
          <label>Social Distancing</label>
          <Checkboxes onChange={this.handleSocialDistancingChange} />

          {/* Rate Cleanliness */}
          <label>Cleanliness</label>
          <Checkboxes onChange={this.handleCleanlinessRatingChange} />

          <label>
            Please feel free to provide more details about your experience in{" "}
            {this.state.currentBusiness}
          </label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          >
            Comment
          </textarea>

          <label>
            Please provide your final Rating on {this.state.currentBusiness}
          </label>
          <StarRating onChange={this.handleFinalBusinessRatingChange} />

          <button type="submit">Post Rating</button>
        </form>
      </div>
    );
  }
}
export default Form;
