import React, { Component } from "react";
import "../App.css";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("", "");
export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    apt: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    loading: false,
  };

  handleInputFormValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (e) => {
    this.setState({
      loading: true,
    });
    const { firstName, lastName } = this.state;
    e.preventDefault();
    const formSubmissionData = {
      restaurantName: firstName + lastName,
    };
    // the state variable that is your pokemon list
    // {hp: , name: sprites: { front: , back:}}
    // comment out if you want to see supabase
    // you will need to add your own url and api key
    // const { data, error } = await supabase
    //   .from("restaurants")
    //   .insert([formSubmissionData]);

    setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      4000
    );
  };

  render() {
    return (
      <div>
        <h1 className="shipping-form-header">Forms React</h1>
        <div className="shipping-form-container">
          <form
            action=""
            className="shipping-form"
            onSubmit={this.handleSubmit}
          >
            <input
              name="firstName"
              className="shipping-input-text"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleInputFormValues}
            />
            <input
              name="lastName"
              className="shipping-input-text"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleInputFormValues}
            />
            <input
              name="streetAddress"
              className="shipping-input-text-street"
              type="text"
              placeholder="Street Address"
              value={this.state.streetAddress}
              onChange={this.handleInputFormValues}
            />
            <input
              name="apt"
              className="shipping-input-text-apt"
              type="text"
              placeholder="Apt, Suite"
              value={this.state.apt}
              onChange={this.handleInputFormValues}
            />
            <input
              name="postalCode"
              className="shipping-input-text"
              type="text"
              placeholder="Postal Code"
              value={this.state.postalCode}
              onChange={this.handleInputFormValues}
            />
            <input
              name="city"
              className="shipping-input-text"
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleInputFormValues}
            />
            <input
              name="state"
              className="shipping-input-text"
              type="text"
              placeholder="State"
              value={this.state.state}
              onChange={this.handleInputFormValues}
            />
            <input
              name="country"
              className="shipping-input-text"
              type="text"
              placeholder="Country"
              value={this.state.country}
              onChange={this.handleInputFormValues}
            />
            <input
              name="phone"
              className="shipping-input-text"
              type="text"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.handleInputFormValues}
            />
            <input
              name="submit"
              disabled={this.state.loading}
              className="shipping-input-button"
              type="submit"
              value={this.state.loading ? "Sending Data" : "Submit"}
            />
          </form>
        </div>
      </div>
    );
  }
}