const BIO = [
  {
    id: 1,
    name: 'Parag Sharma,CEO',
    bio:
      '22+ years of experience in the Indian Power sector, possessing strong local knowledge and a proven track record of executing renewable energy projects in India. He served as a Chief Operating Officer of a leading renewable firm and developed more than 8 GW of capacity over eight years. He has in-depth execution experience in both Solar and Wind having built self EPC capabilities. Parag has worked in KPMG, PwC, ABB during his initial phase of career. Parag holds a B.Sc in Electrical Engineering from AMU, MBA from IIT Delhi and LLB from Delhi University.',
    image: require('../assets/images/bio/parag.jpg'),
  },
  {
    id: 2,
    name: 'Peeyush Mohit, COO',
    bio:
      'Peeyush has 17+ years of consulting and industry experience in the Indian Power sector. In his earlier roles, he has served as the Head of Strategy for two of India’s leading Power and Renewable Energy companies. In his industry roles, he has been responsible for Investment Diligence, Board Approvals, Strategy Development, and Business Development. Peeyush was a Management Consultant at KPMG and Roland Berger and was extensively involved in advising Governments, Regulators, and Private Infrastructure Developers on Bid Advisory and Market Strategy. Peeyush holds a BE in Electrical and Electronics Engineering from BITS Pilani and MBA in Strategy and Finance from IIM Lucknow.',
    image: require('../assets/images/bio/peeyush.png'),
  },
  {
    id: 3,
    name: 'Rakesh Garg, Head – Wind',
    bio:
      '24+ years of Project management and industry experience in renewables and power sector in India, Rakesh served as VP – Project Development (Wind) with one of leading renewable energy company in India and was responsible for end-to-end Project Development work for wind vertical and developed a pipeline of more than1 GW for wind projects and actively involved in M&A due-diligence of wind portfolios of more than 2 GW. During his tenure, he has built in depth understanding of local laws, regulations and policies, and relationships with nodal agencies at center and state levels. Prior to this, Rakesh has worked with global leaders in Wind Sector namely Vestas, Siemens Gamesa & Enercon (India) Limited across various roles in Strategy formulation, Business Development and Land Acquisition. Rakesh holds degree in Mechanical Engineering from NIT Surat and MBA from MDI Gurgaon',
    image: require('../assets/images/bio/rakesh.jpg'),
  },
  {
    id: 4,
    name: 'Nimish Agrwal, Head – Land',
    bio:
      '16+ years of consulting and industry experience in power sector in India, Nimish previously served as VP – Business Development (Solar Projects) at one of the leading renewable company and has been instrumental in the acquisition of 12,000+ acres of land across states for various solar and wind projects. During his stint with renewable sector, he has built strong relationships with local land aggregators, lawyers and state level government bodies and nodal agencies. Prior to this, he worked in various finance leadership roles in esteemed companies like SPML, Innovative B2B and NDTV. Nimish has also worked with Ernst & Young and BMR Advisors and has advised various companies such as Coca-Cola and Cadbury Schweppes in areas of financial reengineering and business process advisory. Nimish holds a bachelor degree in commerce and is a qualified Chartered Accountant from The Institute of Chartered Accountants of India.',
    image: require('../assets/images/bio/nimesh.png'),
  },
];

const LINKEDIN = [
  {
    id: 1,
    link: '',
    title:
      'Industry leaders congratulate Waaree Group for first PV module test',
  },
  {
    id: 2,
    link: '',
    title: 'ETEnergyWorld’s webinar on Unlocking Higher #Solar Farm Returns',
  },
  {
    id: 3,
    link: '',
    title:
      'RE CloudSOL Meet — Renewable Cloud Solutions, Intelligent Enterprise Asset Management',
  },
  {
    id: 4,
    link: '',
    title:
      'Market Structure required for delivering firm Power from Renewables',
  },
  {
    id: 5,
    link: '',
    title: 'Iceland – largest electricity producer per capita',
  },
  {
    id: 6,
    link: '',
    title: 'Our COO speaks',
  },
];

const MEDIA = [
  {
    id: 1,
    link: '',
    title:
      'NHPC signs Power Purchase Agreement (PPA) with Eden Renewable Passy Private Limited',
  },
  {
    id: 2,
    link: '',
    title: 'SJVN to Build INR 450 Crore – 100 MW Solar Plant in Dholera',
  },
  {
    id: 3,
    link: '',
    title:
      'O2 Power, Azure, Tata, and Amp Energy win NTPC’s 1.2 GW ISTS solar tender',
  },
  {
    id: 4,
    link: '',
    title:
      'Tata Power, Azure Power and O2 Power emerge winners in NTPC auction',
  },
  {
    id: 5,
    link: '',
    title:
      'Temasek, EQT Infra Invest USD 500 mn In O2 Power, To Target 4000 MW In India',
  },
];

const COLLATERALS = [
  {
    id: 1,
    title:
      ' Is it realistic to achieve 175 GW of renewable capacity by 2022? An IPP’s take',
    description:
      'Authored by Parag Sharma - Founder and CEO at O2 Power Vinamra Singh - Manager, CEO Cell at O2 Power   Government of India (GoI) has set a target of installing 175 GW of renewable energy capacity by the year 2022. This includes 100 GW from solar, 60 GW...',
    img: require('../assets/images/collaterals/1.png'),
  },
  {
    id: 1,
    title:
      'FINANCING PV PROJECTS IN INDIA, AND THE CHALLENGES THAT DEVELOPERS FACE?',
    description:
      'Indian renewable energy sector has been attracting equity capital successfully. The challenge is in debt financing. While there is a strong payment security cushion from Central Govt agencies, lenders have shown concerns on the financial health of distribution utilities and the ability of Central Govt...',
    img: require('../assets/images/collaterals/2.png'),
  },
  {
    id: 1,
    title: 'OUTLOOK FOR THE INDIAN RE MARKET BY 2022',
    description:
      'Multiple factors are going to shape the Indian RE market going forward. Wind industry faced headwinds in the past and all stakeholders are now working towards reviving the industry. Hopefully, with newer technology and contractual structures coming in place, we will see increased interest in...',
    img: require('../assets/images/collaterals/3.png'),
  },
  {
    id: 1,
    title:
      'DO YOU THINK INDIA’S CURRENT POWER DEMAND SITUATION IS GOOD ENOUGH FOR ALL THE CAPACITY BEING BID OUT TO BE ABSORBED BY THE GRID?',
    description:
      'India’s GDP has been growing at around 6%-8% in the past two decades. Depending on the growth rate, Indian grid should be absorbing 20-25 GW of renewable energy capacity every year. However, the question is not merely of demand. Grid must also be able to...',
    img: require('../assets/images/collaterals/4.png'),
  },
];

const ABOUT = [
  {
    title: 'Who we are',
    link: 'About',
    iconName: 'info',
    iconType: 'entypo',
    color: '',
  },
  {
    title: 'Our Team',
    link: 'Team',
    iconName: 'team',
    iconType: 'antdesign',
    color: '',
  },
  {
    title: 'Investors',
    link: 'Investors',
    iconName: 'inr',
    iconType: 'fontisto',
    color: '',
  },
];

const KNOWLEDGE = [
  {
    title: 'News & Media',
    link: 'Newsmedia',
    iconName: 'newspaper-outline',
    iconType: 'ionicon',
    color: 'black',
  },
  {
    title: 'Collaterals',
    link: 'Collaterals',
    iconName: 'paperclip',
    iconType: 'antdesign',
    color: '',
  },
];

export {BIO, LINKEDIN, MEDIA, COLLATERALS, ABOUT, KNOWLEDGE};
