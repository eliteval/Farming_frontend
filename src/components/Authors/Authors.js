import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/authors";

class Authors extends Component {
    state = {
        data: {
            "preHeading": "Authors",
            "heading": "Meet Our Team",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
        },
        authorData: [
            {
                "id": 1,
                "img": "/img/avatar_1.jpg",
                "avatar": "/img/avatar_1.jpg",
                "name": "Frost / Artful Studios",
                "position": "Founder",
                "btnText": "Follow",
                "link": " https://twitter.com/TurkNodes_NFT"
            },
            {
                "id": 2,
                "img": "/img/avatar_2.jpg",
                "avatar": "/img/avatar_2.jpg",
                "name": "Hangator",
                "position": "Artist",
                "btnText": "Follow",
                "link": "#"
            },
            {
                "id": 3,
                "img": "/img/avatar_3.jpg",
                "avatar": "/img/avatar_3.jpg",
                "name": "Victor",
                "position": "Blockchain Developer",
                "btnText": "Follow",
                "link": "#"
            },
            {
                "id": 4,
                "img": "/img/avatar_4.jpg",
                "avatar": "/img/avatar_4.jpg",
                "name": "Chimp",
                "position": "Streamer / Influencer",
                "btnText": "Follow",
                "link": "https://twitter.com/chimpna"
            },
        ]
    }

    render() {
        return (
            <section className="popular-collections-area" id="team_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                {/* <span>{this.state.data.preHeading}</span> */}
                                <h2 className="mt-3 mb-0">{this.state.data.heading}</h2>
                                {/* <p>{this.state.data.content}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/author">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                            {/* Seller */}
                                            {/* <a className="seller" href="/author">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a> */}
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-1">
                                                <h5>{item.name}</h5>
                                                <p>{item.position}</p>

                                                <a className="btn btn-bordered-white btn-smaller" href={item.link}>
                                                    {item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Authors;