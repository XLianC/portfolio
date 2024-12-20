import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'UMN Life Simulator',
      tags: ['Games', 'Life', 'Development', 'php'],
      projectLink: 'https://github.com/XLianC/UTS'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Niffler Coin Finder',
      tags: ['Games', 'php'],
      projectLink: 'https://github.com/XLianC/PTI'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'WOOF',
      tags: ['Development', 'API', 'E-commerce', 'php'],
      projectLink: 'https://github.com/XLianC/UAS'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Wannamie',
      tags: ['Development', 'Online Food'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/figma-1.jpg',
      title: 'Momentia',
      tags: ['Social Media', 'Android App', 'Kotlin'],
      projectLink: 'https://www.figma.com/design/UgD6LBYvilTJESrdMwwnkG/Prototype-MAP-G-Kel-2?node-id=0-1&p=f&t=LxPqde7DKYaDkFSS-0'
    },
    {
      imgSrc: '/images/awok.jpg',
      title: 'Awok Figma',
      tags: ['Web-design', 'Development', 'Clothing E-commerce'],
      projectLink: 'https://www.figma.com/design/SoQAWAP0CsuHQvzDkLH1j0/FIGMA-Kelompok-1-IF450-F?node-id=0-1&p=f&t=3ecjDaqlnjOxd2MU-0'
    },
  ];

const Project = () => {
  return (
    <section id="projects" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                My Portfolio Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) =>
                (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
};

export default Project