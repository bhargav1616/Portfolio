import '../Style/Resume.css';

export const Resume = () => {
    return (
        <>
            <h1 class="back-font-resume">Resume</h1>
            <p class="top-font-resume">Resume</p>

            <section>
                <div class="wrapper">
                    <div class="resume">
                        <div class="under-resume">
                            <p class="resume-para1">Skilled web designer and front-end developer Freshers
                                in building responsive,
                                user-friendly websites. Proficient in HTML, CSS, JavaScript, React.js and modern frameworks. Adept at
                                transforming client ideas into visually appealing designs with smooth functionality, ensuring
                                optimized performance, cross-browser compatibility, and a seamless user experience across all
                                devices.</p>
                        </div>
                    </div>

                    <h3 class="second-section-title"><span><img src="src/assets/png/arrows.png" alt="Arrow" class="arrow-png" /></span>
                        &nbsp; Education</h3>
                    <div class="education-section">

                        <div class="education-left-part">
                            <div class="education-left-part-details">
                                <h2 class="education-year">2022-2025</h2>
                                <h3 class="education-course">Bachelor Of Computer Aplication</h3>
                                <p class="education-school">Silver Oak University</p>
                                <p class="education-grade">Grade : First class distinction.</p>
                            </div>
                        </div>

                        <div class="education-right-part">
                            <div class="education-left-part-details">
                                <h2 class="education-year">2020-2021</h2>
                                <h3 class="education-course">Higher Secondary School</h3>
                                <p class="education-school">Shree Ambica Vidhyalaya</p>
                                <p class="education-grade">Grade : First class distinction.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cv-btn">
                        <button class="download-cv"><a href="/BHARGAV_JADAV.pdf" download="BHARGAV_JADAV.pdf">Download Cv</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}
