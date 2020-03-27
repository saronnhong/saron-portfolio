import React, { Component } from 'react';
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
                <div className="contactPage container">
                    <h1 className="contactTitle">Get In Touch With Us</h1>
                    <div className="row contactContent">
                        <div className="col-md-4">
                            <h1>Our Office</h1>
                            <div className="contactInfo">
                                <p href="https://www.google.com/maps/place/4980+N+Harbor+Dr,+San+Diego,+CA+92106/"><i class="fas fa-map-marker-alt"></i> 4980 North Harbor Drive #202<br></br>San Diego, CA 92106</p>
                                <p href="tel:619-865-2174"><i className="fa fa-phone"></i> 619.865.2174</p>
                                <p href="mailto:milanowski@radhard.com"><i className="fa fa-envelope"></i> milanowski@radhard.com</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1>Contact Us</h1>
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


                    {/* <div className="contactForm container" >

                        <p id="confirmMessage">{email.confirmMsg}</p>
                        <div className="formTop row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix" type="text" className="validate" placeholder="Name" value={email.subject}
                                            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                        <label for="icon_prefix">Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="icon_telephone" type="tel" className="validate" placeholder="Phone" value={email.phone}
                                            onChange={e => this.setState({ email: { ...email, phone: e.target.value } })} />
                                        <label for="icon_telephone">Telephone</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input id="email" type="email" className="validate" placeholder="Email Address" value={email.from}
                                            onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">message</i>
                                        <textarea id="textarea1" className="materialize-textarea" value={email.text}
                                            onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                        <label for="textarea1">Message</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => {
                            this.sendEmail();
                        }}>Submit
                <i className="material-icons right">send</i>
                        </button>
                    </div> */}

                </div>
            </div>

        );
    }
}

export default Contact;
