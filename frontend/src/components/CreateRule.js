import React, { Component } from "react";
import { connect } from "react-redux";
import { addRule } from "../actions/ruleActions";

class CreateRule extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      address: "",
      DOB: "",
      base_price: 0,
      response: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { fullName, address, DOB, base_price } = this.state;

    console.log(fullName, address, DOB);
    const body = {
      fullName,
      address,
      DOB,
      base_price,
    };

    this.props.addRule(body, this.props.history);
  };
  render() {
    const { fullName, address, DOB } = this.state;
    const enabled = fullName.length > 0 && address.length > 0 && DOB.length > 0;
    return (
      <div style={{ width: "400px", margin: "0 auto", marginTop: "10%" }}>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Full Name</label>
            <div className="col-sm-10">
              <input
                name="fullName"
                value={fullName}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">Address :</label>
            <div className="col-sm-10">
              <input
                name="address"
                value={address}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mb-2">
            <label className="col-sm-4 col-form-label">Date Of Birth :</label>
            <div className="col-sm-10">
              <input
                name="DOB"
                value={DOB}
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <button
            onClick={this.onSubmit}
            type="submit"
            className="btn btn-primary"
            disabled={!enabled}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rule: state.rule,
});

export default connect(mapStateToProps, { addRule })(CreateRule);
