export interface IWork {
  slug: string;
  title: string;
  thumb: string;
  logo: string;
  url: string;
  description: string;
  responsibilites: string[];
  tech: string[];
}

export const WORKS = [
  {
    slug: 'farmers-feeding-utah-marketplace',
    title: 'Farmers Feeding Utah Marketplace',
    thumb: '/assets/images/work-ffu.png',
    url: 'https://www.farmersfeedingutah.com/',
    description:
      'Farmers Feeding Utah Marketplace is an E-commerce/Subscription site that helps local Utah farmers to buy their high-quality and local food products',
    responsibilites: [
      'Develop e-commerce storefront app utilizing Saleor framework.',
      'Help maintain e-commerce dashboard for custom built features.',
      'Work closely with backend developers to handle API integrations using GraphQL.',
      'Project planning and involvement in process improvement.',
    ],
    tech: [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'React',
      'React Context API',
      'styled-components',
      'GraphQL',
      'Saleor Framework',
    ],
  },
  {
    slug: 'adworld-conferences',
    title: 'AdWorld Conferences',
    thumb: '/assets/images/work-adw.png',
    url: 'https://adworldconference.com/',
    description:
      'AdWorld Conference is the world’s largest online advertising event. The all-in-one advertising event that will bring you closer to leading marketers and brands from the comfort of your home.',
    responsibilites: [
      'Develop UI/UX across all pages',
      'Implement JAMstack architecture using NextJS and Strapi.',
      'Maintain and support third party integrations and custom built APIs.',
      'Make sure on-page SEO is optimized for better coversions.',
    ],
    tech: [
      'HTML',
      'CSS',
      'React',
      'Redux Toolkit',
      'styled-components',
      'NextJS',
      'Strapi',
      'REST APIs',
      'Tito ticket service',
    ],
  },
  {
    slug: 'affiliate-world-conferences',
    title: 'Affiliate World Conferences',
    thumb: '/assets/images/work-awc.png',
    url: 'https://affiliateworldconferences.com/',
    description:
      'Affiliate World is the premiere affiliate marketing conference for the world’s top affiliate marketers, ecommerce marketing experts and industry authorities.',
    responsibilites: [
      'Develop UI/UX across all pages.',
      'Help maintain and develop conference platform including customer, sponsor, and admin portal.',
      'Maintain and support third party integrations and custom built APIs.',
      'Make sure on-page SEO is optimized for better coversions.',
    ],
    tech: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'styled-components',
      'Ant Design',
      'Redux',
      'REST APIs',
      'Tito Ticket Service',
    ],
  },
  {
    slug: 'stm-forum',
    title: 'STM Forum',
    thumb: '/assets/images/work-stm.png',
    url: 'https://stmforum.com/join/',
    description:
      'STM Forum is the #1 rated community for affiliate and performance internet marketers.',
    responsibilites: [
      'Develop UI/UX across all pages.',
      'Make sure the website is optimized for both desktop and mobile.',
      'Make sure on-page SEO is optimized for better coversions.',
      'Help maintain and implement new theme for existing forum.',
    ],
    tech: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'styled-components',
      'REST APIs',
      'vBulletin',
    ],
  },
] as IWork[];
