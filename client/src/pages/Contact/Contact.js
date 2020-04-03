import React, { Component } from 'react';
import Footer from "../../components/Footer";
import "./style.css";


// Allow less secure apps: ON in gmail settings to be able to send email
class Contact extends Component {
    state = {
        email: {
            recipient: 'sn.reactport@gmail.com',
            sender: 'chich20x6@gmail.com',
            from: '',
            phone: '',
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
                    this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", phone: "", subject: "", text: "" } })
                } else {
                    alert("email was not sent!");
                }
                console.log(res);
            })
    }

    render() {
        const { email } = this.state;

        return (
            <div className="contact">
                <div className="aboutUsTitle"></div>
                <div>
                    <div className="contactPage container">
                        <h1 className="contactTitle">Get In Touch With Us</h1>
                        <div className="row contactContent">
                            <div className="col-md-4">
                                <h1 className="ourOffice">Our Office</h1>
                                <div className="contactInfo">
                                    <p><a className="contactDetails" href="https://www.google.com/maps/place/4980+N+Harbor+Dr,+San+Diego,+CA+92106/" target="_blank"><i className="fas fa-map-marker-alt"></i> 4980 North Harbor Drive #202<br></br>San Diego, CA 92106</a></p>
                                    <p><a className="contactDetails" href="tel:619-865-2174"><i className="fa fa-phone"></i> 619.865.2174</a></p>
                                    <p><a className="contactDetails" href="mailto:milanowski@radhard.com"><i className="fa fa-envelope"></i> milanowski@radhard.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h1 className="contactUs">Contact Us</h1>
                                <p id="confirmMessage">{email.confirmMsg}</p>
                                <form>
                                    <p>
                                        <input className="textFields" placeholder="Name" value={email.subject}
                                            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                    </p>
                                    <p>
                                        <input className="textFields" placeholder="Phone" value={email.phone}
                                            onChange={e => this.setState({ email: { ...email, phone: e.target.value } })} />
                                    </p>
                                    <p>
                                        <input className="textFields" placeholder="Email Address" value={email.from}
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
                                    }}> Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <Footer />
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default Contact;
