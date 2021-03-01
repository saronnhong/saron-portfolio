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
    componentDidMount() {
        window.scrollTo(0, 0);
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
                <div className="contactPage container">
                    <h1 className="contactTitle" >Let’s get in touch.</h1>
                    <p className="contactText">I am always open to discussing development work or collaborative opportunities. So what are you waiting for? Let’s make it happen!</p>
                    <div className="row contactContent">
                        <div className="col-md-4">
                            <h1 className="ourOffice">Contact</h1>
                            <div className="contactInfo">
                                <p>
                                    <i className="fa fa-phone" onClick={() => { navigator.clipboard.writeText("2095984517") }}></i>
                                    <a className="contactDetails" href="tel:209-598-4517"> 209.598.4517</a>
                                </p>
                                <p>
                                    <i className="fa fa-envelope" onClick={() => { navigator.clipboard.writeText("saronnhong@gmail.com") }}></i>
                                    <a className="contactDetails" href="mailto:saronnhong@gmail.com"> saronnhong@gmail.com</a>
                                </p>
                                <p>
                                    <i class="fab fa-linkedin" onClick={() => { navigator.clipboard.writeText("linkedin.com/in/saronnhong") }}></i>
                                    <a className="contactDetails" href="https://linkedin.com/in/saronnhong" target="_blank" rel="noopener noreferrer"> linkedin.com/in/saronnhong</a>
                                </p>
                                <p>
                                    <i class="fab fa-github" onClick={() => { navigator.clipboard.writeText("github.com/saronnhong") }}></i>
                                    <a className="contactDetails" href="https://github.com/saronnhong" target="_blank" rel="noopener noreferrer"> github.com/saronnhong</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="contactUs">Email</h1>
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
                                <div className="input-group full">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Message</span>
                                    </div>
                                    <textarea className="form-control" rows="7" aria-label="With textarea" value={email.text}
                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                </div>
                                <button className="btn btn-dark emailSubmitBtn hvr-shadow hvr-sweep-to-right-sendbtn" type="button" onClick={() => {
                                    this.sendEmail();
                                }}> Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
