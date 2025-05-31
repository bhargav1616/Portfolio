import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

export const Hero = () => {
    return (
        <>
            <main className="hero-section main">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <span class="hero-title">WELCOME TO JADAV'S DEVELOPMENT</span>
                        <h1 class="hero-fullname">HI, I'M<span class="hero-name"> BHARGAV JADAV</span></h1>
                        <h3 class="hero-designation">A Front-End Developer</h3>
                        <p class="hero-details">As a passionate front-end developer, I specialize in building responsive and user-friendly websites using HTML, CSS, JavaScript, Bootstrap, and React.js. Although I’m a fresher, I’m highly motivated to apply my knowledge and grow through real-world development experiences, always aiming to write clean and efficient code.</p>
                    </div>
                    <div className="hero-image">
                        <img src="/hero.jpg" alt="World Beauty" className='banner-image' />
                    </div>
                    {/* <hr /> */}
                </div>
            </main>

            {/* How we Work */}
            <div class="second-sec-under">
                <h3 class="second-section-title"><span><img src="src/assets/png/arrows.png" alt="Arrow"
                    class="arrow-png" /></span> &nbsp; How We
                    Work</h3>
            </div>
            {/* <main className="hero-section second-section"> */}
            <div class="container">
                <div class="second-section">
                    <div class="second-section-box">
                        <div class="three-box">
                            <div class="f-box">
                                <h3 class="f-box-title">Step 01</h3>
                                <h1 class="f-box-para1">Web Inspection</h1>
                                <p class="f-box-para2">Proper inspection of a website with the best tools for the next
                                    stage.</p>
                            </div>
                            <div class="s-box">
                                <h3 class="f-box-title-s">Step 02</h3>
                                <h2 class="f-box-para1-s">Deep Optimization</h2>
                                <p class="f-box-para2-s">Optimizing the website with special strategies by covering all its
                                    needs.</p>
                            </div>
                            <div class="f-box">
                                <h3 class="f-box-title">Step 03</h3>
                                <h1 class="f-box-para1">Analyze Growth</h1>
                                <p class="f-box-para2">Expert analysis of website data for deploying a strategy for further
                                    growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </main> */}

            {/* How We Do */}

            <div class="second-sec-under">
                <h3 class="second-section-title"><span><img src="src/assets/png/arrows.png" alt="Arrow"
                    class="arrow-png" /></span> &nbsp; How We
                    Do</h3>
            </div>

            <div className="container how_we_do_section">
                <div className="how_we_do_intro">
                    <p>
                        To our clients all over the world with best services. Our services include; small business website design services.
                    </p>
                </div>

                <div className="how_we_do_card how_we_do_f">
                    <img src="src/assets/png/diamond.png" alt="Diamond Icon" />
                    <h2>Define Goals and Requirements</h2>
                    <p>
                        At My Portfolio, we understand the purpose of the website, its target audience, and the specific goals it needs to achieve.
                    </p>
                </div>

                <div className="how_we_do_card how_we_do_s">
                    <img src="src/assets/png/ball_pile.png" alt="Ball Pile Icon" />
                    <h2>Conduct Market Research & Analysis</h2>
                    <p>
                        Conduct market research to gather insights about the target audience, competitors, industry trends and Analysis.
                    </p>
                </div>
            </div>


            <div className="container how_we_do_cards">
                <div>
                    <div className="how_we_do_t">
                        <img src="src/assets/png/braces.png" alt="" />
                        <h2>User Experience (UX) Design</h2>
                        <p>Design a user-friendly experience with wireframes or prototypes.</p>
                    </div>
                </div>
                <div>
                    <div className="how_we_do_t">
                        <img src="src/assets/png/tools.png" alt="" />
                        <h2>Testing and Optimization</h2>
                        <p>Test rigorously to find and resolve issues like broken links, browser compatibility, or usability glitches.</p>
                    </div>
                </div>
                <div>
                    <div className="how_we_do_t">
                        <img src="src/assets/png/ufo_beam.png" alt="" />
                        <h2>Launch and Deployment</h2>
                        <p>Host the website, set up domain and hosting securely, and keep an eye on performance.</p>
                    </div>
                </div>
                <div>
                    <div className="how_we_do_t">
                        <img src="src/assets/png/branding.png" alt="" />
                        <h2>Maintenance and Updates</h2>
                        <p>Keep the website fresh with new content, enhance its features, and fix any tech glitches.</p>
                    </div>
                </div>
            </div>

            {/* Project Button */}

            <div className="container">
                <h3 class="my-project-title"><span><img src="src/assets/png/arrows.png" alt="Arrow"
                    class="arrow-png" /></span> &nbsp; My Projects</h3>
            </div>

            <div className="container project_button_section">
                <div className="project_card react_project">
                    <h1>React Project</h1>
                    <Link to="/project">Website's</Link>
                </div>

                <div className="project_card html_project">
                    <h1>HTML, CSS Project</h1>
                    <Link to="/project">Website's</Link>
                </div>
            </div>


            {/* Contact Section */}

            <div className="container contact_section">
                <h1>Let's Work <br /> Together</h1>

                <div className="contact_text">
                    <h3>
                        Have Any Projects On Minds! <br />
                        Feel Free to Contact Us.
                    </h3>

                    <div className="contact_circle">
                        <Link to="/contact">
                            Let's Talk <br />
                            With Us
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}