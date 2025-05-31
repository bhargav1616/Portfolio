import '../Style/About.css';

export const About = () => {
    return (
        <>
            <div class="main-big-title">
                <h1 class="back-font-resume">About</h1>
                <p class="top-font-resume">About</p>
            </div>

            <div class="wrapper">
                <div class="image-name-part">
                    <div class="image-left">
                        <span><img src="/my-photo.jpg" alt="My Photo" class="about-photo" /></span>
                    </div>
                    <div class="name-detail-part">
                        <div class="name-detail-part">
                            <p class="my-details">Name : Bhargav Jadav</p>
                            <p class="my-details">Job Role : Font-End Developer</p>
                            <p class="my-details">Experience : Freshers</p>
                            <p class="my-details">Address : Ahmedabad,India</p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div class="wrapper">
                    <div class="second-section">
                        <div class="progress-section">
                            <div class="progress-bar">
                                <label class="html-title">React.js 70%</label>
                                <progress value="70" max="100"></progress>

                                <label class="html-title">HTML 80%</label>
                                <progress value="80" max="100"></progress>

                                <label class="html-title">CSS 80%</label>
                                <progress value="80" max="100"></progress>

                                <label class="html-title">BOOTSTRAP 60%</label>
                                <progress value="60" max="100"></progress>

                                <label class="html-title">JavaScript 60%</label>
                                <progress value="60" max="100"></progress>

                            </div>
                        </div>

                        <div class="profile-section">
                            <ul class="profile-list">
                                <li>
                                    <span class="label">Profile:</span>
                                    <span class="value">Web Designer</span>
                                </li>
                                <li>
                                    <span class="label">Education:</span>
                                    <span class="value">Bachelor of Computer Application</span>
                                </li>
                                <li>
                                    <span class="label">Language:</span>
                                    <span class="value">English, Hindi, Gujarati</span>
                                </li>
                                <li>
                                    <span class="label">Other Skills:</span>
                                    <span class="value">Video Editing, Photo Editing, Canva</span>
                                </li>
                                <li>
                                    <span class="label">Interest:</span>
                                    <span class="value">Gaming, Travel</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="project-bg-detail">
                        <button class="github-btn"><a href="https://github.com/bhargav1616"
                        >GITHUB</a></button>
                    </div>

                </div>
            </section>
        </>
    )
}
