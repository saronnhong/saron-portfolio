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
            <div className="contactForm container" >
                <p id="confirmMessage">{email.confirmMsg}</p>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate" placeholder="Name" value={email.subject}
                                    onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                <label for="icon_prefix">Name</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" class="validate" placeholder="Phone" value={email.phone}
                                    onChange={e => this.setState({ email: { ...email, phone: e.target.value } })}/>
                                <label for="icon_telephone">Telephone</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="email" type="email" class="validate" placeholder="Email Address" value={email.from}
                                    onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                <label for="email">Email</label>
                                {/* <span class="helper-text" data-error="wrong" data-success="right">Helper text</span> */}
                            </div>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">message</i>
                                <textarea id="textarea1" class="materialize-textarea" value={email.text}
                                    onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                <label for="textarea1">Message</label>
                            </div>
                        </div>
                    </form>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => {
                    this.sendEmail();
                }}>Submit
                <i class="material-icons right">send</i>
                </button>
                {/* <button className="btn btn-primary emailSubmitBtn hvr-shadow" type="button" onClick={() => {
                    this.sendEmail();
                }}> Submit</button> */}

                {/* <div>
                    <div>
                        <div>
                            <h3>Email</h3>
                            <p id="confirmMessage">{email.confirmMsg}</p>
                            <form>
                                <p >
                                    <input placeholder="Name" value={email.subject}
                                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                </p>
                                <p>
                                    <input placeholder="Email Address" value={email.from}
                                        onChange={e => this.setState({ email: { ...email, from: e.target.value } })} />
                                </p>
                                <div className="input-group full">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Message</span>
                                    </div>
                                    <textarea className="form-control" rows="7" aria-label="With textarea" value={email.text}
                                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })}></textarea>
                                </div>
                                <button className="btn btn-primary emailSubmitBtn hvr-shadow" type="button" onClick={() => {
                                    this.sendEmail();
                                }}> Submit</button>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Contact;
