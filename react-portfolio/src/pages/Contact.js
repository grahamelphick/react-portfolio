import React from "react";
import ContactMe from "../components/Contactme"
import InfoContainer from "../components/Infocontainer";
    
function Contact() {
    return (
        <div>
            <InfoContainer
                pageTitle={"Contact"}
                information={<ContactMe/>}
            />
                
        </div>
    );
}

export default Contact;
