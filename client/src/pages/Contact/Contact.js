import React, { Component } from 'react';
import "./style.css";

// Allow less secure apps: ON in gmail settings to be able to send email
class Contact extends Component {
    state = {
        email: {
            recipient: 'sn.reactport@gmail.com',
            sender: 'chich20x6@gmail.com',
            from: '',
            subject: '',
            text: '',
            confirmMsg: ''
        }
    }
    sendEmail = () => {
        fetch("/send-email", {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                if (res) {
                    const { email } = this.state;
                    this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", subject: "", text: "" } })
                } else {
                    alert("email was not sent!");
                }
                console.log(res);
            })
    }

    render() {
        const { email } = this.state;
        const spacer = {
            margin: 10
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="contactForm" >
                <div className="containerForm">
                    <div className="wrapper animated fadeInLeft">
                        <div className="company-info">
                            <h3>Contact</h3>
                            {/* <ul className="ulForm">
                                <li><i className="fa fa-phone"></i> (209) 598-4517</li>
                                <li><i className="fa fa-envelope"></i> saronnhong@gmail.com</li>
                                <li><a className="contactLinks" href="https://www.linkedin.com/in/saronnhong"><div><i class="fab fa-linkedin"></i> linkedin.com/in/saronnhong</div></a></li>
                                <li><a className="contactLinks" href="https://github.com/saronnhong"><div><i class="fab fa-github"></i> github.com/saronnhong</div></a></li>
                            </ul> */}
                        </div>
                        <div className="contact">
                            <h3>Email</h3>
                            <p id="confirmMessage">{email.confirmMsg}</p>
                            <form>
                                <p>
                                    <input placeholder="Name" value={email.subject}
                                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                </p>
                                <p>
                                    <input placeholder="Email Address" value={email.from}
                                        onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                </p>
                                <div class="input-group full">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">Message</span>
                                    </div>
                                    <textarea class="form-control" rows="7" aria-label="With textarea" value={email.text}
                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                </div>
                                <button className="btn btn-primary emailSubmitBtn hvr-shadow" type="button" onClick={() => {
                                    this.sendEmail();
                                }}> Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
