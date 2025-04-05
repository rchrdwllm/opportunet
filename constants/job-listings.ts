import { JobListing, JobCategoryEnum } from "@/types";
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

const portraitPhotos = [
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
  "https://images.unsplash.com/photo-1549351236-caca0f174515",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  "https://images.unsplash.com/photo-1517202383675-eb0a6e27775f",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  "https://images.unsplash.com/photo-1545996124-0501ebae79a3",
  "https://images.unsplash.com/photo-1548142813-c348350df52b",
  "https://images.unsplash.com/photo-1548222349-1cfa549ea18d"
];

function getRandomPortraitPhoto() {
  const randomIndex = Math.floor(Math.random() * portraitPhotos.length);

  return portraitPhotos[randomIndex];
}

function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const filipinoFirstNames = ["Maria", "Jose", "Juan", "Ana", "Pedro", "Isabel", "Andres", "Sofia", "Emilio", "Carmen", "Benito", "Clara", "Diego", "Elena", "Fabian"];
const filipinoLastNames = ["Santos", "Reyes", "Cruz", "Garcia", "Aquino", "Lopez", "Gonzales", "Perez", "Dela Cruz", "Bautista", "Rivera", "Torres", "Fernandez", "Castro", "Ramos"];

function getRandomFilipinoName(): string {
  const firstName = getRandomItem(filipinoFirstNames);
  const lastName = getRandomItem(filipinoLastNames);
  return `${firstName} ${lastName}`;
}

const jobListings: JobListing[] = [];

for (let i = 0; i < 15; i++) {
  const category = getRandomItem(Object.values(JobCategoryEnum));
  const isRemote = Math.random() < 0.5;
  const isFeatured = Math.random() < 0.3;

  let title: string;
  let company: string;
  let location: string;
  let description: string;
  let employmentType: string;
  let responsibilities: string[];
  let postedBy: string;


  switch (category) {
    case JobCategoryEnum.REMOTE_FREELANCE:
      title = getRandomItem(["Virtual Assistant", "Remote Web Developer", "Freelance Graphic Designer", "Online Marketing Specialist"]);
      company = getRandomItem(["CloudStaff", "Outsource PH", "Remote Co.", "Virtual Careers"]);
      location = "Remote";
      description = "Exciting remote opportunity for a motivated individual. We provide flexible hours and accessible communication tools to ensure a comfortable working environment for everyone.";
      employmentType = getRandomItem(["Full-time", "Part-time", "Contract"]);
      responsibilities = [
        "Manage and organize online tasks, including scheduling appointments, handling emails, and preparing reports, utilizing assistive technologies as needed.",
        "Develop and maintain accessible websites and web applications, ensuring compliance with WCAG guidelines and providing alternative formats for content.",
        "Design graphics for digital and print media, creating visually appealing materials that adhere to accessibility standards for color contrast and alternative text.",
        "Plan and execute online marketing campaigns, analyzing data and optimizing strategies to reach a diverse audience, including individuals with disabilities."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.PART_TIME_ENTRY_LEVEL:
      title = getRandomItem(["Customer Service Rep", "Data Entry Clerk", "Office Assistant", "Sales Associate"]);
      company = getRandomItem(["TeleTech", "Accenture", "Robinsons", "SM Retail"]);
      location = getRandomItem(["Manila", "Quezon City", "Makati", "Taguig"]);
      description = "Entry-level position perfect for students or part-timers. We offer a supportive and inclusive workplace with accessible facilities and training materials.",
        employmentType = "Part-time";
      responsibilities = [
        "Respond to customer inquiries via phone, email, and chat, providing helpful and accessible assistance with product information and issue resolution.",
        "Accurately enter and update data in computer systems, ensuring data integrity and utilizing voice recognition or alternative input devices if required.",
        "Perform general office tasks such as filing, photocopying, and organizing documents, with accessible workstations and ergonomic equipment provided.",
        "Assist customers in a retail setting, providing product recommendations and processing transactions, with sensitivity to diverse needs and communication styles."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.SKILLED_LABOR_TRADE:
      title = getRandomItem(["Electrician", "Plumber", "Carpenter", "Welder"]);
      company = getRandomItem(["Meralco", "Maynilad", "DMCI Homes", "Megawide"]);
      location = getRandomItem(["Cebu City", "Davao City", "Angeles City"]);
      description = "Seeking skilled tradespeople for immediate hire. We are committed to providing a safe and accessible work environment for all our employees.",
        employmentType = getRandomItem(["Full-time", "Contract"]);
      responsibilities = [
        "Install and maintain electrical systems in buildings, adhering to safety regulations and providing accessible solutions for lighting and power outlets.",
        "Install and repair water and drainage systems, ensuring proper functionality and accessibility features in fixtures and fittings.",
        "Construct, erect, install, and repair structures and fixtures of wood, plywood, and wallboard, with modifications made to accommodate diverse physical abilities.",
        "Weld metal components using various welding techniques, following safety protocols and utilizing adaptive tools or equipment as needed."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.DISABILITY_INCLUSIVE:
      title = getRandomItem(["Accessibility Specialist", "Inclusive Education Coordinator", "Assistive Technology Trainer", "Disability Support Officer"]);
      company = getRandomItem(["UNICEF Philippines", "DSWD", "Leonard Cheshire", "APCD"]);
      location = getRandomItem(["Manila", "Quezon City"]);
      description = "Join our inclusive team and make a difference! We actively promote diversity and provide reasonable accommodations to ensure everyone can thrive.",
        employmentType = getRandomItem(["Full-time", "Part-time"]);
      responsibilities = [
        "Conduct accessibility audits of physical and digital environments, providing recommendations for improvements and ensuring compliance with accessibility standards.",
        "Develop and implement inclusive education programs, adapting curriculum and teaching methods to meet the diverse needs of students with disabilities.",
        "Train individuals with disabilities on the use of assistive technology devices and software, empowering them to enhance their independence and productivity.",
        "Provide support services to employees with disabilities, including job coaching, mentoring, and advocacy for reasonable accommodations in the workplace."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.GOVERNMENT_NONPROFIT:
      title = getRandomItem(["Social Worker", "Public Relations Officer", "Administrative Officer", "Project Coordinator"]);
      company = getRandomItem(["LGU Manila", "Red Cross", "World Vision", "DENR"]);
      location = getRandomItem(["Manila", "Quezon City", "Iloilo City"]);
      description = "Contribute to the community in a meaningful way. We are dedicated to creating a welcoming and accessible environment for all our staff and beneficiaries.",
        employmentType = "Full-time";
      responsibilities = [
        "Provide social support and case management services to individuals and families, advocating for their rights and access to resources.",
        "Manage public relations and communications, ensuring information is accessible to diverse audiences and promoting inclusive messaging.",
        "Oversee administrative operations, including budgeting, record-keeping, and office management, with accessible systems and procedures in place.",
        "Coordinate and manage community development projects, ensuring that activities are inclusive and benefit all members of the community."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.INTERNSHIPS_APPRENTICESHIPS:
      title = getRandomItem(["Marketing Intern", "Software Development Apprentice", "Research Assistant", "HR Intern"]);
      company = getRandomItem(["Procter & Gamble", "Google Philippines", "UP Diliman", "Aboitiz Equity Ventures"]);
      location = getRandomItem(["Makati", "Taguig", "Manila"]);
      description = "Kickstart your career with valuable hands-on experience. We are committed to providing a supportive and accessible learning environment for interns and apprentices.",
        employmentType = "Internship";
      responsibilities = [
        "Assist with marketing campaigns and market research, gaining practical experience in developing inclusive marketing strategies and materials.",
        "Learn software development principles and coding practices, contributing to accessible software projects and working with assistive technologies.",
        "Support research projects, collecting and analyzing data, and ensuring that research methodologies and materials are accessible to all participants.",
        "Assist with HR functions, including recruitment, onboarding, and employee relations, promoting inclusive hiring practices and workplace policies."
      ];
      postedBy = getRandomFilipinoName();
      break;

    case JobCategoryEnum.SENIOR_FRIENDLY:
      title = getRandomItem(["Consultant", "Mentor", "Archivist", "Library Assistant"]);
      company = getRandomItem(["BPI", "Ayala Corporation", "National Museum", "Quezon City Public Library"]);
      location = getRandomItem(["Makati", "Manila"]);
      description = "Flexible roles for experienced professionals. We value the experience and wisdom of senior workers and offer flexible arrangements to suit their needs.",
        employmentType = getRandomItem(["Part-time", "Contract"]);
      responsibilities = [
        "Provide expert advice and guidance to organizations, sharing industry knowledge and best practices in an accessible and understandable manner.",
        "Mentor junior staff, providing guidance and support to help them develop their skills and advance their careers, with sensitivity to individual learning styles.",
        "Preserve and organize historical records and documents, ensuring they are accessible to researchers and the public, including digitization projects.",
        "Assist library patrons with research and information retrieval, providing accessible services and resources for individuals with diverse needs."
      ];
      postedBy = getRandomFilipinoName();
      break;
    default:
      title = "Generic Job";
      company = "Default Co.";
      location = "Anywhere";
      description = "A default job listing.";
      employmentType = "Full-time";
      responsibilities = ["Various tasks"];
      postedBy = "Default Agency";
  }

  jobListings.push({
    id: uuidv4(),
    title,
    company,
    location,
    datePosted: new Date(),
    description,
    category,
    minSalary: getRandomNumber(15000, 30000),
    maxSalary: getRandomNumber(30001, 60000),
    employmentType,
    remote: isRemote,
    responsibilities,
    isSaved: false,
    isApplied: false,
    isFeatured,
    postedBy,
    image: getRandomPortraitPhoto(),
  });
}

export default jobListings;
