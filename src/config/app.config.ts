import {FiCloud, FiCode, FiCpu, FiFacebook, FiGithub} from 'react-icons/fi';

export const AppConfig = {
  name: "Pham Duc Dat",
  username: "Dominic2k", // should be GitHub username
  avatar: 'https://i.imgur.com/FyQGNaz.jpg',
  verticalAvatar: 'https://i.imgur.com/RMBXC37.jpg',
  introduction: `A second-year IT student\n` +
    `Have a high spirit of learning and desire to develop yourself in the field of information technology.\n` +
    `Web Development, Mobile Development, DevOps & more.`,
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "From $100"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/Dominic2k',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://facebook.com/Dominic2kJs',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'Web Development',
    icon: FiCode,
    description: 'Learning: React, Next.js, Node.js, Express, Nest.js, Golang, PHP, Python, SQL, MongoDB, GraphQL, REST API, C#, Rust etc.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'Learning: AWS, GCP, Azure, Kubernetes, Docker, etc.'
  }, {
    name: 'IoT Development',
    icon: FiCpu,
    description: 'Learning: ESP32, ESP8266, Arduino, etc.'
  }],
  analytics: {
    gaId: 'Learning: G-NF39CSC1T1',
  },
  giscusEnabled: true,
}
