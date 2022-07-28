import React, { Component } from "react";

const initData = {
  preHeading: "About",
  heading: "Lore",
  content1: `Angels live in Heaven and Demons in Hell… Or at least that's what they told
    you. Repeat a lie many times and it will end up becoming the truth. Like a deceptive
    tale that reassures human beings and makes them believe that they rule the Earth,
    that they are alone on this place. But what if I told you that Heaven and Hell were
    here all along?
    What if I told you that Angels and Demons are not so different? All it takes is
    a shining, a musical note, or a laugh that is too loud for an Angel to become a pariah
    from here to eternity. A forbidden wish, such as wanting to shine brighter than your
    brothers, is all an Angel needs to become a Demon.
    It is known that the Lord of Light and his army of Angels were defeated
    during the War in Heaven. But hardly anyone knows that instead of descending into
    Hell, they stayed on Earth; hidden in plain sight, living among humans. The fallen
    Angels were shaped by the Earth and they shaped it as they pleased. And when the
    Angels from Heaven decided to come to Earth as well, it was too late. Their brothers
    had changed: they were Demons. And so the hunt began.    `,
  content2: `For centuries, Demons were forced to shapeshift to avoid being killed by
    Angels. They could survive only by hiding their strength, their gifts, and their true    
    selves. In the shadows they lived and flourished. And the Angels, ready to kill every
    last Demon, stayed on Earth, and among humans they eventually forgot about
    Heaven.
    For a millennia, Angels and Demons begot children who were raised without
    knowing their true origin. The secret was kept and over time they learned to live
    and die together without revealing the truth about them. They waged secret wars in
    the name of bronze idols, prophets, false gods, coins, flags, and pieces of land. In
    silence, they kill each other in an endless cold war.
    They became myths for some, messengers of the apocalypse for others. But
    you should know by now that lies are not eternal. Someone broke the pact of silence.
    Angels say it was Demons, and Demons say it was Angels. Their identities are being
    revealed, sowing confusion and chaos in the human world. As I speak these words,
    Angels and Demons around the Earth are taking off their masks, showing the world
    what they are capable of.
    Demons are tired of hiding their horns, tails, and flames. Angels want to
    spread their wings once and for all and send their enemies back to the underworld.
    No more pretending to be something they are not. Angels will destroy every
    creature that stands in the way of divine plans while Demons will remind Angels
    that light is not the only thing capable of illuminating: they will show them the
    bright and purifying power of their flames.
    Will you be ready for when their true faces are revealed?
    The age of Angels and Demons is here.
    Will you be an Angel or a Demon?`,
};

class About extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({
      data: initData,
    });
  }
  render() {
    return (
      <section className="section" id="about_area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 text-center pt-5">
              <img
                className="card-img-top"
                src="/img/divinity2.png"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="intro mb-4">
                <div className="intro-content">
                  <span>{this.state.data.preHeading}</span>
                  <h2 className="mt-3 mb-0">{this.state.data.heading}</h2>
                </div>
              </div>
              <p>{this.state.data.content1}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 col-md-6 col-lg-7">
              <p>{this.state.data.content2}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 text-center pt-5">
              <img
                className="card-img-top"
                src="/img/divinity3.png"
                alt=""
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
