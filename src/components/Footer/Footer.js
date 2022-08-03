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
                "icon": "fab fa-telegram"
            },
            {
                "id": 4,
                "link": "vine",
                "icon": "fab fa-discord"
            }
        ]
    }

    render() {
        return (
            <footer className="footer-area">
            
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left pt-3 mb-2">©2022 TurkNodes, All Rights Reserved.</div>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href={item.link}>
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