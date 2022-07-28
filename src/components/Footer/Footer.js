import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
    state = {
        socialData: [
            {
                "id": 1,
                "link": "facebook",
                "icon": "fab fa-facebook-f"
            },
            {
                "id": 2,
                "link": "twitter",
                "icon": "fab fa-twitter"
            },
            {
                "id": 3,
                "link": "google-plus",
                "icon": "fab fa-google-plus-g"
            },
            {
                "id": 4,
                "link": "vine",
                "icon": "fab fa-vine"
            }
        ],
        widgetData_2: [
            {
                "id": 1,
                "text": "About",
                "link": "#about_area"
            },
            {
                "id": 2,
                "text": "Mint",
                "link": "#mint_area"
            },
            {
                "id": 3,
                "text": "Roadmap",
                "link": "#roadmap_area"
            },
            {
                "id": 4,
                "text": "Team",
                "link": "#team_area"
            },
            {
                "id": 5,
                "text": "FAQ",
                "link": "#faq_area"
            }
        ]
    }

    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className='pt-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <ul >
                                        {this.state.widgetData_2.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`} style={{ display: 'inline', listStyleType: 'none', float: "left", paddingRight: '30px' }}>
                                                    <a href={item.link} className="smooth-anchor">{item.text}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left pt-3">©2021 DivinityX, All Rights Reserved.</div>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href="#">
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;