export default function Contact() {
    return (
        <section className="contact-section">
            <div>
                <h3>Contact</h3>
                <p>Your messages, like whispers in the wind, shall be released to the vast void,
                    echoing through the timeless expanse, awaiting their destiny to be heard
                    or to fade into the eternal abyss.
                </p>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name"></input>
                <label>Email</label>
                <input type="email" placeholder="Enter your email"></input>
                <label>Message</label>
                <textarea placeholder="Enter Your Messsage">
                </textarea>
                <button>Submit</button>
            </div>
        </section>
    );

}