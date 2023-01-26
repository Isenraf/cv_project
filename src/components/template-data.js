const data = {
  personal: {
    firstName: 'jake',
    lastName: 'ryan',
    phoneNumber: '123-456-7890',
    email: 'jake@su.edu',
    linkedin: 'linkedin.com/in/jake',
    github: 'github.com/jake',
  },

  technical: {
    title: 'technical skills',
    languages: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R',
    frameworks: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI',
    devTools:
      'Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse',
    libraries: 'pandas, NumPy, Matplotlib',
  },

  education: {
    title: 'education',
    educations: [
      {
        degree: 'Bachelor of Arts in Computer Science, Minor in Business',
        school: 'Southwestern University',
        city: 'Georgetown, TX',
        startDate: 'Aug. 2018',
        endDate: 'May 2021',
      },
      {
        degree: 'Associate’s in Liberal Arts',
        school: 'Blinn College',
        city: 'Bryan, TX',
        startDate: 'Aug. 2014',
        endDate: 'May 2018',
      },
    ],
  },

  experience: {
    title: 'experience',
    experiences: [
      {
        position: 'Undergraduate Research Assistant',
        employer: 'Texas A&M University',
        city: 'College Station, TX',
        startDate: 'June 2020',
        endDate: 'Present',
        description: `Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems.\nDeveloped a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data.\nExplored ways to visualize GitHub collaboration in a classroom setting.`,
      },
      {
        position: 'Information Technology Support Specialist',
        employer: 'Southwestern University',
        city: 'Georgetown, TX',
        startDate: 'Sep. 2018',
        endDate: 'Present',
        description: `Communicate with managers to set up campus computers used on campus.\nAssess and troubleshoot computer problems brought by students, faculty and staff.\nMaintain upkeep of computers, classroom equipment, and 200 printers across campus.`,
      },
      {
        position: 'Artificial Intelligence Research Assistant',
        employer: 'Southwestern University',
        city: 'Georgetown, TX',
        startDate: 'May 2019',
        endDate: 'July 2019',
        description: `Explored methods to generate video game dungeons based off of The Legend of Zelda.\nDeveloped a game in Java to test the generated dungeons.\nContributed 50K+ lines of code to an established codebase via Git.\nConducted a human subject study to determine which video game dungeon generation technique is enjoyable.\nWrote an 8-page paper and gave multiple presentations on-campus.\nPresented virtually to the World Conference on Computational Intelligence.`,
      },
    ],
  },
  project: {
    title: 'project',
    projects: [
      {
        name: 'Gitlytics',
        tools: 'Python, Flask, React, PostgreSQL, Docker',
        startDate: 'June 2020',
        endDate: 'Present',
        description: `Developed a full-stack web application using with Flask serving a REST API with React as the frontend.\nImplemented GitHub OAuth to get data from user’s repositories.\nVisualized GitHub data to show collaboration.\nUsed Celery and Redis for asynchronous tasks.`,
      },
      {
        name: 'Simple Paintball',
        tools: 'Spigot API, Java, Maven, TravisCI, Git',
        startDate: 'May 2018',
        endDate: 'May 2020',
        description: `Developed a Minecraft server plugin to entertain kids during free time for a previous job.\nPublished plugin to websites gaining 2K+ downloads and an average 4,5/5-star review.\nImplemented continuous delivery using TravisCI to build the plugin upon new a release.\nCollaborated with Minecraft server administrators to suggest features and get feedback about the plugin.`,
      },
    ],
  },
};

export default data;
