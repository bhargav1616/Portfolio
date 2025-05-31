import '../Style/Project.css';
import ProjectData from '../api/projectData.json';

export const Project = () => {
    return (
        <>
            <h1 className="back-font-resume">My Projects</h1>
            <p className="top-font-resume">My Projects</p>

            {/* React Projects */}

            <section>
                <div className='project-wrapper'>
                    {
                        ProjectData.map((project) => {
                            const { id, img, title, description, link , projectName} = project;

                            return (
                                <div className="project-card-mng">
                                    <div className="project-card" key={id}>
                                        <img src={img} alt="Project Image" className="project-image" />
                                        <h2 className="project-title">{title}</h2>
                                        <p className="project-description">{description}</p>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                                        <img src={projectName} alt="Title" className='titleNamed'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
