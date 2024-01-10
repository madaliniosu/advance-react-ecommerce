import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./contact.css";
import { FaMobile, FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";

export default function Contact() {

    const [formState, setFormState] = useState({});

    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const containerRef = useRef();

   
    useEffect(() => {
        if(id) {
            containerRef.current.scrollIntoView({behavior: "smooth"});
        }

    }, [id])

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
        
    }

    const submitHandler = (event) => {
        event.preventDefault();
        event.target.reset();
        const config = {
            Username: "advanceprofesional@yopmail.com",
            Password: "6CECC5767A0915F406DF5EB151C64768253D",
            Host: "smtp.elasticemail.com",
            Port: "2525",
            // SecureToken: "a9d14554-e96d-49e8-a9cb-efe317b430de",
            To: "advanceprofesional@yopmail.com",
            From: "iosuinbox@gmail.com",
            Subject: "New message from website",
            Body: `Name: ${formState.name}\n Email: ${formState.email}\n Phone:${formState.phone}\n ${formState.message}`

        }
        if (window.Email) {
            window.Email.send(config)
            .then(message => alert(message))
            .catch(error => {
                alert("Something went wrong, please try again later.")
                console.log(error)
            })
        }
        // .then(() => alert("E-mail trimis cu succes!")

    }


    return (

        <div className="ContactContainer">
            <h2 className="ContactTitle">Cu ce va putem ajuta?</h2>
            <form onSubmit={submitHandler} className="ContactForm" id="contact" ref={containerRef}>
                <div className="ContactInputArea">
                    <div className="ContactCredentials">
                        <input
                            type="text"
                            name="name"
                            value={formState.name || ""}
                            onChange={changeHandler}
                            placeholder="Nume *"
                            required
                        />
                           <input
                            type="text"
                            name="phone"
                            value={formState.phone || ""}
                            onChange={changeHandler}
                            placeholder="Nr de telefon*"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formState.email || ""}
                            onChange={changeHandler}
                            placeholder="Email*"
                            required
                        
                        />
                     
                    </div>
                    <div className="ContactTextarea">
                        <textarea
                            id="ContactMessage"
                            name="message"
                            // rows="10"
                            placeholder="Mesajul tau" 
                            onChange={changeHandler} 
                            value={formState.message}  
                        />
                    </div>
                </div>
                <div className="SubmitButtonContainer">
                    <button
                        type="submit"
                        value="Send Email"
                        className="ContactButton"
                        >
                        Trimite
                    </button>
                </div>

            </form>
            <section className="ContactInfoSection">
                <div className="ContactInfo">
                    <h3 className="ContactInfoTitle" id="ContactInfoItem1" >RM VALCEA</h3>
                    <div className="ContactInfoItem" ><FaMobile className="ContactIcon"/> <h4>0743323656</h4></div>
                    <div className="ContactInfoItem" ><FaPhone className="ContactIcon"/> <h4> 0286132576</h4></div>
                    <div className="ContactInfoItem" ><FaEnvelope className="ContactIcon"/><h4> advance2016@gmail.com</h4></div>
                    <div className="ContactInfoItem" ><FaMapMarked className="ContactIcon"/><h4> Aleea Bucur, Nr 4, Rm Valcea</h4></div>
                </div>

                <div className="ContactInfo">
                    <h3 className="ContactInfoTitle" id="ContactInfoItem2" >CLUJ-NAPOCA</h3>
                    <div className="ContactInfoItem" ><FaMobile className="ContactIcon"/> <h4>0743323656</h4></div>
                    <div className="ContactInfoItem" ><FaPhone className="ContactIcon"/> <h4> 0286132576</h4></div>
                    <div className="ContactInfoItem" ><FaEnvelope className="ContactIcon"/><h4> advancecluj2016@gmail.com</h4></div>
                    <div className="ContactInfoItem" ><FaMapMarked className="ContactIcon"/><h4> Aleea Bucur, Nr 4, Rm Valcea</h4></div>
                </div>

                <div className="ContactInfo">
                    <h3 className="ContactInfoTitle" id="ContactInfoItem3" >TG MURES</h3>
                    <div className="ContactInfoItem" ><FaMobile className="ContactIcon"/> <h4>0743323656</h4></div>
                    <div className="ContactInfoItem" ><FaPhone className="ContactIcon"/> <h4> 0286132576</h4></div>
                    <div className="ContactInfoItem" ><FaEnvelope className="ContactIcon"/><h4> advancemmures2016@gmail.com</h4></div>
                    <div className="ContactInfoItem" ><FaMapMarked className="ContactIcon"/><h4> Aleea Bucur, Nr 4, Rm Valcea</h4></div>
                </div>
    
            </section>
        </div>
    )

}