import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import { motion } from 'framer-motion';

// import 'react-vertical-timeline-component/style.min.css';

// import { styles } from '../styles';
// import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc';
// import { textVariant } from '../utils/motion';

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: '#1d1836',
//         color: '#fff',
//       }}
//       contentArrowStyle={{ borderRight: '7px solid  #232631' }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
//         </div>
//       }>
//       <div>
//         <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//         <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard key={`experience-${index}`} experience={experience} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, 'work');
