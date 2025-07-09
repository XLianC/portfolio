import SkillCard from "./SkillCard"

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/next-js-logo.png',
      label: 'NextJS',
      desc: 'React Framework'
    },
    {
      imgSrc: '/images/react-js-logo.png',
      label: 'React JS',
      desc: 'Javascript library'
    },
    {
      imgSrc: '/images/firebase-logo.png',
      label: 'Firebase',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I Used
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Powerful tools and technologies I used to create exceptional, high-performing websites.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => 
                    (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        /> 
                    ))
                }
            </div>
        </div>
    </section>
  )
};

export default Skill