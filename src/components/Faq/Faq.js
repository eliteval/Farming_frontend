import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ",
    heading: "Frequently Asked Questions",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
}

const data = [
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "What are DivinityXs?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "DivinityXs is an NFT collection that consists of 4,444 algorithmically generated, unique, and collectible Angels and Demons."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "When is the release date?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "TBA"
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "Where can I buy a DivinityX?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "Minting will be only available through our official website and smart contract address only. The contract will be provided on Discord and our website by our TEAM."
    },
    {
        id: "6",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSix",
        quote: "How much is a DivinityX?",
        contentId: "collapseSix",
        contentClass: "collapse",
        content: "A DivinityX will cost 0.034 ETH + gas fees."
    },
    {
        id: "8",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseEight",
        quote: "How can I get involved?",
        contentId: "collapseEight",
        contentClass: "collapse",
        content: "Join our discord today! Discord.gg/DivinityX to get involved."
    },
    {
        id: "9",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseNine",
        quote: "What can I do with my DivinityX?",
        contentId: "collapseNine",
        contentClass: "collapse",
        content: "You are free to do anything with them, the ownership and commercial usage rights are given to you, as the owner of them. Holders will be eligible for furture projects and partnerships."
    },
]

class Faq extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="faq-area pt-0" id="faq_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                {/* <p>{this.state.initData.content}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* Netstorm Accordion */}
                                <div className="accordion" id="netstorm-accordion">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10">
                                            {/* Single Accordion Item */}
                                            {this.state.data.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="single-accordion-item p-3">
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <h2 className="m-0">
                                                                <button className={item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#netstorm-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;