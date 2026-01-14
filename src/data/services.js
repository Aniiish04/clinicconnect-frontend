import whiteningImg from "../assets/images/service-whitening.jpg";
import rootCanalImg from "../assets/images/service-root-canal.jpg";
import bracesImg from "../assets/images/service-braces.jpg";
import implantsImg from "../assets/images/service-implants.jpg";

const services = [
  {
    id: 1,
    name: "Teeth Whitening",
    slug: "teeth-whitening",
    shortDescription: "Brighten your smile with safe, effective whitening.",
    description:
      "Our professional teeth whitening treatments remove stains and discoloration caused by coffee, tea, smoking and age. We use safe, dentist-approved techniques to achieve noticeable results in a single visit.",
    duration: "45–60 minutes",
    category: "Cosmetic",
    priceFrom: 1500,
    image: whiteningImg,
  },
  {
    id: 2,
    name: "Root Canal Treatment",
    slug: "root-canal-treatment",
    shortDescription: "Relieve tooth pain and save your natural tooth.",
    description:
      "Root canal treatment removes infected pulp from inside the tooth, cleans and disinfects the canals, and seals them to prevent further infection. This procedure can save a severely decayed or infected tooth.",
    duration: "60–90 minutes",
    category: "Endodontics",
    priceFrom: 3500,
    image: rootCanalImg,
  },
  {
    id: 3,
    name: "Braces & Aligners",
    slug: "braces-aligners",
    shortDescription: "Straighten teeth with metal, ceramic or clear aligners.",
    description:
      "We offer traditional metal braces, ceramic braces and clear aligners to correct crowding, gaps and bite issues. Our orthodontic plans are personalized for age, lifestyle and treatment goals.",
    duration: "Varies (12–24 months)",
    category: "Orthodontics",
    priceFrom: 25000,
    image: bracesImg,
  },
  {
    id: 4,
    name: "Dental Implants",
    slug: "dental-implants",
    shortDescription: "Permanent replacement for missing teeth.",
    description:
      "Dental implants act as artificial roots to support crowns, bridges or dentures. They look, feel and function like natural teeth, improving chewing, speech and confidence.",
    duration: "Multiple visits",
    category: "Implantology",
    priceFrom: 30000,
    image: implantsImg,
  },
];

export default services;
