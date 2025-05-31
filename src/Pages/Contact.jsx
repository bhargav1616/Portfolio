import '../Style/Contact.css';
import ContactData from '../api/contactData.json';

export const Contact = () => {
    return (
        <>
            <h1 class="back-font-resume">Contact</h1>
            <p class="top-font-resume">Contact</p>

            <section>
                {
                    ContactData.map((contact) => {
                        const { id, img, title, MyId, link } = contact;
                        return (
                            <div className="contact-card" key={id}>
                                <div className='contact_img'>
                                    <a href={link}><img src={img} alt="Contact Icon" className="contact-icon" /></a>
                                </div>
                                <h3 className="contact-title">{title}</h3>
                                <p className="contact-id">{MyId}</p>
                            </div>
                        )
                    })
                }
            </section>

            <footer>
                <div class="wrapper">
                    <div class="footer-title">
                        <h1>Have a Question ?</h1>
                        <button class="q-click-here"><a href="mailto: bhargvajadav2004@gmail.com?subject=Hello&body=I%20would%20like%20to%20talk%20to%20you." class="q-click-here-a">click here</a></button>
                    </div>

                    <div class="find-me">
                        <p>Find Me On</p>
                        <div class="find-me-on-icon">
                            {/* <span class="find-me-icon-control"><a href="https://youtube.com/@harshx-hrg?si=HKaGCePDzukQAH7m"><img src="/you-tube.png" alt="" /></a></span> */}
                            <span class="find-me-icon-control"><a href="https://www.linkedin.com/in/bhargav-jadav-4aba0925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/linkedin.png" alt="" /></a></span>
                            <span class="find-me-icon-control"><a href="https://www.facebook.com/jadav.bhargav.5030?mibextid=ZbWKwL"><img src="/facebook.png" alt="" /></a></span>
                            <span class="find-me-icon-control"><a href="https://www.instagram.com/mr_jadav_16?igsh=MWtxajJ1Nms0aW8wcA=="><img src="/instagram.png" alt="" /></a></span>
                        </div>
                    </div>
                    <footer>
                        <h4 class="copyright">| Copyright ©2025 All rights reserved |</h4>
                    </footer>
                </div>
            </footer>
        </>
    )
}
