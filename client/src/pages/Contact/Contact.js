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
            <div className="contactPage">


                <div className="contactForm container" >

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
                </div>
            </div>
        );
    }
}

export default Contact;
