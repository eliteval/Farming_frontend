import React, { Component } from "react";

const initData = {
  pre_heading: "Contact",
  heading: "Get In Touch",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
};

class Contact extends Component {
  state = {
    initData: {},
  };
  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }
  render() {
    return (
      <section
        className="author-area bg-white"
        style={{ paddingTop: "60px" }}
        id="contact"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center">
                <h2 className="text-red">{this.state.initData.pre_heading}</h2>
              </div>
              {/* Item Form */}
              <form
                id="contact-form"
                className="item-form card no-hover bg-gray"
                method="POST"
                action="assets/php/mail.php"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control bg-white"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <input
                        type="email"
                        className="form-control bg-white"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control bg-white"
                        name="subject"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mt-3">
                      <textarea
                        className="form-control bg-white"
                        name="message"
                        placeholder="Message"
                        cols={30}
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn w-100 mt-3 mt-sm-4 red"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
