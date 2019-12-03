import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import "./Dashboard.css";
import "./Button.js";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are now logged into Ihsaan's{" "}
                <span style={{ fontFamily: "monospace" }}>Pokémon-App</span>
              </p>
            </h4>
          </div>
        </div>
        <main
          style={{
            background: "grey",
            opacity: "90%",
            padding: "30",
            textAlign: "center"
          }}
        >
          <button>Click</button>
        </main>
        <footer className="footer">
          <span>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                background: "grey",
                opacity: "90%",
                float: "right"
                // position: "fixed",
                // bottom: "0",
                // left: "90%"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </span>
        </footer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
