import React, { Component } from 'react';
import axios from 'axios';

class Work extends Component {
    state = {
        data: {
            "preHeading": "Roadmap",
            "heading": "Where Our DivinityX Story Continues...",
        },
        workData: [
            {
                "id": 1,
                "icon": "fas fa-map-signs fa-3x text-effect",
                // "icon": "fas fa-anchor fa-3x text-effect",
                "title": "0%",
                "text": "24Hr Whitelist Launch, Public sale after the Whitelist, POAP airdrop for attendees of the mint"
            },
            {
                "id": 2,
                "icon": "fas fa-map-signs fa-3x text-effect",
                // "icon": "fas fa-hand-holding-heart fa-3x text-effect",
                "title": "10%",
                "text": "A Snapshot of holders that will receive a non-pixelated version of their DivinityX as an airdrop"
            },
            {
                "id": 3,
                "icon": "fas fa-map-signs fa-3x text-effect",
                // "icon": "fab fa-fort-awesome fa-3x text-effect",
                "title": "25%",
                "text": "1 ETH to a charity voted on in the Discord"
            },
            {
                "id": 4,
                "icon": "fas fa-map-signs fa-3x text-effect",
                // "icon": "fas fa-glass-cheers fa-3x text-effect",
                "title": "50%",
                "text": "2 ETH to a charity voted on in the Discord, We will airdrop 5 unique 1/1 DivinityX's to 5 random users that minted"
            },
            {
                "id": 5,
                "icon": "fas fa-map-signs fa-3x text-effect",
                "title": "75%",
                "text": "Airdrop of 5 unique 1/1 randomly to users that minted, Holders of 2 or more DivinityX will receive special priveledges in Discord, access to the #Alpha Discord Channel, and be notified of upcoming events and partnerships first"
            },
            {
                "id": 6,
                "icon": "fas fa-map-signs fa-3x text-effect",
                "title": "100%",
                "text": "Partnership announcements, Development of the DivinityX side-scrolling game, Release of the next Roadmap, Free mint of our second collection, Everyone holder will have access to the hidden Discord channel where we will periodically drop new, Rarity tools integration"
            },
        ]
    }

    render() {
        return (
            <section className="work-area" id='roadmap_area'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.workData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-4 item">
                                    {/* Single Work */}
                                    <div className="single-work">
                                        <i className={item.icon}  style={{color: '#4528dc'}}/>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
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

export default Work;