import React from 'react';

const skills = [
  // Add your skills here
  { name: 'JavaScript', icon: '/javascript.svg' },
  // ...more skills
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="w-1/2 md:w-1/4 p-4 text-center">
            <img src={skill.icon} alt={skill.name} className="h-20 mx-auto" />
            <h3 className="mt-2 font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
