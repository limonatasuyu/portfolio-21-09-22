import github from './img/github-logo.png'
import linkedIn from './img/linkedin-logo.png'
import instagram from './img/instagram-logo.png'
import arrow from './img/arrow.png'

import nikess from './img/ss/nike-ss.png'
import youtubess from './img/ss/youtube-ss.png'
import recipess from './img/ss/recipes-ss.png'
import portfolioss from './img/ss/portfolio-ss.png'

import cssLogo from './img/skillLogos/cssLogo.png'
import expressLogo from './img/skillLogos/expressLogo.png'
import flaskLogo from './img/skillLogos/flaskLogo.png'
import htmlLogo from './img/skillLogos/htmlLogo.png'
import javascriptLogo from './img/skillLogos/javascriptLogo.png'
import nodeLogo from './img/skillLogos/nodejsLogo.png'
import pandasLogo from './img/skillLogos/pandasLogo.png'
import reactLogo from './img/skillLogos/reactLogo.png'
import scssLogo from './img/skillLogos/sassLogo.png'
import typescriptLogo from './img/skillLogos/typescriptLogo.png'
import vueLogo from './img/skillLogos/vueLogo.png'
import pythonLogo from './img/skillLogos/pythonLogo.png'


import {motion, useAnimationControls} from 'framer-motion'
import {useState, useEffect} from 'react'

const placeholderText = `
Sed sed risus pretium quam vulputate dignissim. Pharetra magna ac placerat vestibulum lectus mauris. Lobortis feugiat vivamus at augue eget arcu. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Sit amet purus gravida quis blandit turpis cursus. Aliquet 
`

function MainSection() {
  
   const socialVars = {
    hidden: {y: -500},
    visible: {y: 0}
   }

  const [isSocialsVisible, setIsSocialsVisible] = useState(false)
  return (
    <div className='main-section grid'>
      <nav className='navigation flex'>
        <a href='#mywork'>my work <span className='nav-shadow-1 text-shadow'/></a>
        <p onClick={() => {setIsSocialsVisible(!isSocialsVisible)}}>links <span className='nav-shadow-2 text-shadow'/></p>
        <motion.div variants={socialVars} animate={isSocialsVisible ? 'visible' : 'hidden' } initial={{y: -500}} className='socials-container grid'>
          <a href='https://github.com/limonatasuyu'       ><img className='social-logo' src={github   } alt='github'   /></a>
          <a href='https://www.linkedin.com/in/emredilek/'><img className='social-logo' src={linkedIn } alt='linkedin' /></a>
          <a href='https://www.instagram.com/ondabeatt/'  ><img className='social-logo' src={instagram} alt='instagram'/></a>
        </motion.div>
      </nav>
      <div className='content'>
        <div className='headers-container'>
          <h1 className='main-header'>Hi, I'm Emre  , <span className='main-header-shadow-1 text-shadow'/></h1>
          <h1 className='main-header'>Web Developer<span className='main-header-shadow-2 text-shadow'/></h1>
        </div>
        <p className='main-section-text'>{placeholderText}</p>
        <div className='fancy-button-wrapper'>
          <a href='#mywork' className='fancy-button'>see my work</a>
        </div>
      </div>
    <p className='scroll-text'>scroll</p>
  </div>
  );
}


function ProjectSection(props) {

  const projectStack = props.projectStack
  const projectStackEls = projectStack.map((i, x) => {return <span key={x} className='project-stack-item'>{i}</span>})


  return (
    <div className='project-section flex'>
      <div className='project-text-wrapper'>
        <h1 className='project-header'>{props.projectName}</h1>
        <h3 className='project-stack-header'>Stack: </h3>
        <div className='project-stack flex'>
          {projectStackEls}
        </div>
        <p className='project-description'>{placeholderText}</p>
        <div className='project-buttons-container flex'>
          <div className='fancy-button-wrapper'>
            <a href={props.sourceLink} target='_blank' rel="noreferrer" className='fancy-button'>code</a>
          </div>
          <div className='fancy-button-wrapper'>
            <a href={props.liveLink} target='_blank' rel="noreferrer" className='fancy-button'>live version</a >
          </div>
        </div>
      </div>
      <motion.a href={props.liveLink} target='_blank' rel="noreferrer" whileHover='forward' className='project-img-wrapper grid'>
        <img className='project-img' src={props.imgSrc} alt='project'/>
        <motion.img variants={{forward: {x: 10}}}  className='arrow-icon' src={arrow} alt='arrow-icon'/>
      </motion.a>
    </div>
  )
}
  

function SkillsSection() {
  
 
  const skills = [
  {name: 'Javascript', logo: javascriptLogo, description: 'A Programming language that is one of core technologies of the Web'},
  {name: 'Typescript', logo: typescriptLogo, description: 'TypeScript is a strongly typed programming language that builds on JavaScript.'},
	{name: 'Python', logo: pythonLogo, description: 'Python is a high-level, interpreted, general-purpose programming language.'},
  {name: 'HTML', logo: htmlLogo, description: 'HTML is the standard markup language for documents designed to be displayed in a web browser'},
	{name: 'CSS', logo: cssLogo, description: 'CSS is a style sheet language used for describing the presentation of a document written in HTML or XML'},
	{name: 'SCSS', logo: scssLogo, description: 'SCSS is a preprocessor scripting language that is interpreted or compiled into CSS.'},
	{name: 'Node', logo: nodeLogo, description: 'JavaScript runtime environment'},
  {name: 'React', logo: reactLogo, description: 'JavaScript library for building user interfaces'},
	{name: 'Vue', logo: vueLogo, description: 'JavaScript framework for building user interfaces. '},
	{name: 'ExpressJS', logo: expressLogo, description: 'Express is a back end web application framework for Node.js'},
	{name: 'Flask', logo: flaskLogo, description: 'Flask is a micro web framework written in Python.'},
	{name: 'Pandas', logo: pandasLogo, description: 'Pandas is a powerful data analysis and manipulation tool, built on top of Python'},
  ]
  
  const [visibleSkill, setVisibleSkill] = useState(0)
  
  const [visibleSkillHover, setVisibleSkillHover] = useState(null)
  
  const skillEls = skills.map((i, x) => {
    return (
      <img className='skill-img' src={i.logo} key={x} alt='skill-logo'
      onMouseEnter={() => {setVisibleSkillHover(x)}} 
      onMouseLeave={() => {setVisibleSkillHover(null)}}
      />
    )
  })

  const controls = useAnimationControls()

  useEffect(() => {
    setTimeout(() => {
      let newVisible;
      newVisible = visibleSkill + 1
      if (newVisible >= skills.length) {newVisible = 0}
      setVisibleSkill(newVisible)
    }, 3000)

  }, [visibleSkill, skills.length])
  
  useEffect(() => {
    controls.start({scale: 5})
    setTimeout(() => {controls.start({scale: 1})}, 0)
  }, [visibleSkill, visibleSkillHover, controls])
  
  return (
    <div className='skills-section'>
      <h1 className='skills-header'>Skills</h1>
      <div className='skills-section-content flex'>
        <div className='skills-container'>
          <div className='skills-img-container grid'>
            <div className='skills-img-container-row flex'>
              {skillEls.slice(0, 4)}
            </div>
            <div className='skills-img-container-row flex'>
              {skillEls.slice(4, 8)}
            </div>
            <div className='skills-img-container-row flex'>
              {skillEls.slice(8, 10)}
            </div>
            <div className='skills-img-container-row flex'>
              {[skillEls[10], skillEls[11]]}
            </div>
          </div>
        </div>
        <motion.div animate={controls} className='skill-description-container grid'>
          <img className='skill-img-big' src={visibleSkillHover !== null ? skills[visibleSkillHover].logo : skills[visibleSkill].logo} alt='skill-logo' />
          <h1 className='skill-name'>{visibleSkillHover !== null ? skills[visibleSkillHover].name : skills[visibleSkill].name}</h1>
          <div>
            <p className='skill-description'>{visibleSkillHover !== null ? skills[visibleSkillHover].description : skills[visibleSkill].description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function App() {

  return (
    <div className="App-container">
      <MainSection />
      <SkillsSection />
      <h1 id='mywork' style={{fontSize: '2.5rem', paddingTop: '5rem', marginLeft: '2rem'}}>Some of my work</h1>
      <ProjectSection projectName='Nike e-commerce' imgSrc={nikess} projectStack={ ['Vue', 'Flask', 'Javascript', 'Python', 'HTML', 'CSS']} 
        sourceLink='https://github.com/limonatasuyu/vue-nike-e-commerce' 
        liveLink='http://nike-e-commerce-frontend.herokuapp.com/' />
      <ProjectSection projectName='Youtube clone' imgSrc={youtubess} projectStack={ ['React', 'Javascript', 'HTML', 'CSS', 'SCSS']}
        sourceLink='https://github.com/limonatasuyu/react-youtube-clone'
        liveLink='https://limonatasuyu.github.io/react-youtube-clone/'
       />
      <ProjectSection projectName='Random recipes app' imgSrc={recipess} projectStack={ ['Vue', 'Javascript', 'HTML', 'CSS']}
        sourceLink='https://github.com/limonatasuyu/vue-recipes-app'
        liveLink='https://vue-recipes-app.herokuapp.com' />
      <ProjectSection projectName='Old portfolio' imgSrc={portfolioss} projectStack={ ['React', 'Javascript', 'HTML', 'CSS']}
        sourceLink='https://github.com/limonatasuyu/portfolio'
        liveLink='https://limonatasuyu.github.io/portfolio/' />
    </div>
  );
}
