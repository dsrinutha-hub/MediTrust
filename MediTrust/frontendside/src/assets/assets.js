import appointment_img from './appointment_img.jpg'
import header_img from './groupIMG1.jpg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './logoIMG1.jpg'
import logo from './logoImg.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import Dermatologist from './Dermatologist1.jpg'
import Gastroenterologist from './Gastroenterologist1.jpg'
import General_physician from './General_physician.jpg'
import Gynecologist from './Gynecologist1.jpg'
import Neurologist from './Neurologist1.jpg'
import Pediatricians from './Pediatricians1.jpg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Sharma',
        image: 'doc1',
        speciality: 'General Physician',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Rajesh Sharma is a dedicated general physician specializing in preventive healthcare and early diagnosis.',
        fees: 500,
        address: {
            line1: 'Sector 15, Noida',
            line2: 'Uttar Pradesh, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Iyer',
        image: 'doc2',
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO',
        experience: '8 Years',
        about: 'Dr. Priya Iyer has extensive experience in women’s health, high-risk pregnancies, and infertility treatment.',
        fees: 700,
        address: {
            line1: 'Anna Nagar, Chennai',
            line2: 'Tamil Nadu, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Vikram Desai',
        image: 'doc3',
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '5 Years',
        about: 'Dr. Vikram Desai specializes in treating skin disorders, cosmetic dermatology, and laser treatments.',
        fees: 600,
        address: {
            line1: 'MG Road, Pune',
            line2: 'Maharashtra, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sandeep Verma',
        image: 'doc4',
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '12 Years',
        about: 'Dr. Sandeep Verma provides expert care for infants and children, focusing on immunization and child development.',
        fees: 550,
        address: {
            line1: 'JP Nagar, Bengaluru',
            line2: 'Karnataka, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Anjali Mehta',
        image: 'doc5',
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '15 Years',
        about: 'Dr. Anjali Mehta is an experienced neurologist with expertise in treating stroke, epilepsy, and movement disorders.',
        fees: 900,
        address: {
            line1: 'Connaught Place, New Delhi',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Nair',
        image: 'doc6',
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '18 Years',
        about: 'Dr. Arjun Nair is a leading cardiologist specializing in heart disease management and interventional cardiology.',
        fees: 1200,
        address: {
            line1: 'Marine Drive, Mumbai',
            line2: 'Maharashtra, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Kavita Reddy',
        image: 'doc7',
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS (ENT)',
        experience: '9 Years',
        about: 'Dr. Kavita Reddy provides specialized treatment for ear, nose, and throat conditions, including sinus and hearing loss.',
        fees: 600,
        address: {
            line1: 'Banjara Hills, Hyderabad',
            line2: 'Telangana, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Manish Gupta',
        image: 'doc8',
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS (Orthopedics)',
        experience: '11 Years',
        about: 'Dr. Manish Gupta specializes in bone and joint treatments, including knee replacements and sports injuries.',
        fees: 850,
        address: {
            line1: 'Park Street, Kolkata',
            line2: 'West Bengal, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Neha Kapoor',
        image: 'doc9',
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '7 Years',
        about: 'Dr. Neha Kapoor provides expert counseling and treatment for mental health issues like depression and anxiety.',
        fees: 750,
        address: {
            line1: 'Sector 62, Gurugram',
            line2: 'Haryana, India'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Ramesh Bhatia',
        image: 'doc10',
        speciality: 'Oncologist',
        degree: 'MBBS, DM (Oncology)',
        experience: '20 Years',
        about: 'Dr. Ramesh Bhatia specializes in cancer treatment, chemotherapy, and radiation therapy.',
        fees: 1500,
        address: {
            line1: 'Alwarpet, Chennai',
            line2: 'Tamil Nadu, India'
        }
    }
];
