import React from 'react'
import { Title } from '../components/Typography'
import { EmailLink, PhoneLink } from '../components/Links'

const ContactView = () => (
    <article>
        <Title>Contact</Title>
        <div>
            <EmailLink address="ahalt@renci.org" />
            <EmailLink address="ahalt@cs.unc.edu" />
        </div>

        <div>
            <PhoneLink number="(919) 445-9642" tag="(0)" />
            <PhoneLink number="(919) 360-6131" tag="(C)" />
        </div>
        
        <div>
            <strong>Renaissance Computing Institute</strong><br/>
            100 Europa Drive, Suite 540 <br/>
            Campus Box #7583 <br/>
            Chapel Hill, NC 27517 <br/>
        </div>

        <div>
            <strong>Department of Computer Science</strong><br/>
            University of North Carolina at Chapel Hill <br/>
            Campus Box #3175 <br/>
            239 Sitterson Hall <br/>
            Chapel Hill, NC 27599 <br/>
        </div>
    </article>
)

export default ContactView
