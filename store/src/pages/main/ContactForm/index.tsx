import React from 'react';

function ContactForm() {
    return (
        <section id="contact-form" className="contact-form row justify-content-center p-5 m-0">
            <h2 className="col-12 text-center pt-3 pb-5">Contact us now!</h2>
            <form className="col-md-4 col-sm-12">
                <div className="form-group">
                    <label htmlFor="examplename">Your name</label>
                    <input type="email" className="form-control" id="examplename" placeholder="Johnny"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Your region</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Europe</option>
                        <option>USA</option>
                        <option>Asia</option>
                        <option>Africa</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Dear BRUSHER..."></textarea>
                </div>
                <button className="btn rounded-pill btn-outline-primary text-white bg-primary pt-2 pb-2 pl-3 pr-3">
                    Send
                </button>
            </form>
        </section>
    );
}

export default ContactForm;
