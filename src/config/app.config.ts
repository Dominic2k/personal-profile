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
    name: "Contact me",
    price: "for free",
    preferred: true,
  }, {
    name: "Need help?",
    price: "For free"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/Dominic2k',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://www.facebook.com/dc95ffa2dc65022787ad48436816e8b2/',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'Web Development',
    icon: FiCode,
    description: 'Laravel (learning), Reactjs (learning), HTML, CSS, Javascript, PHP, Python, Java, SQL, etc.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'AWS (learning), Docker (learning), etc.'
  }, {
    name: 'Security',
    icon: FiCpu,
    description: 'Hidden'
  }],
  analytics: {
    gaId: 'None',
  },
  giscusEnabled: true,
}
