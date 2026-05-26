# FRONTEND FOLDER STRUCTURE

src/
│
├── assets/
│   ├── images/
│   │   ├── home/
│   │   ├── about/
│   │   ├── staff/
│   │   ├── gallery/
│   │   └── common/
│   │
│   ├── videos/
│   └── icons/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Staff.jsx
│   ├── Gallery.jsx
│   ├── Admission.jsx
│   ├── ChatAssistant.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── components/
│   │
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── PageBanner.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── UI/
│   │   ├── AnimatedText.jsx
│   │   ├── RevealAnimation.jsx
│   │   ├── FadeIn.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── HoverCard.jsx
│   │   ├── Lightbox.jsx
│   │   ├── FloatingElements.jsx
│   │   ├── Marquee.jsx
│   │   └── PageTransition.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── GalleryPreview.jsx
│   │   ├── StaffPreview.jsx
│   │   ├── TrusteeMessage.jsx
│   │   ├── StudentDevelopment.jsx
│   │   ├── Testimonials.jsx
│   │   ├── AIChatPreview.jsx
│   │   └── AdmissionCTA.jsx
│   │
│   ├── about/
│   │   ├── AboutHero.jsx
│   │   ├── SchoolStory.jsx
│   │   ├── VisionMission.jsx
│   │   ├── EducationalApproach.jsx
│   │   └── TrusteeSection.jsx
│   │
│   ├── staff/
│   │   ├── StaffHero.jsx
│   │   ├── StaffGrid.jsx
│   │   ├── StaffCard.jsx
│   │   └── TeachingEnvironment.jsx
│   │
│   ├── gallery/
│   │   ├── GalleryHero.jsx
│   │   ├── GalleryFilter.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── GalleryLightbox.jsx
│   │
│   ├── admission/
│   │   ├── AdmissionHero.jsx
│   │   ├── AdmissionSteps.jsx
│   │   ├── AdmissionForm.jsx
│   │   ├── Eligibility.jsx
│   │   └── FAQ.jsx
│   │
│   ├── chatbot/
│   │   ├── ChatHero.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── ChatMessage.jsx
│   │   ├── ChatInput.jsx
│   │   ├── SuggestedQuestions.jsx
│   │   └── TypingIndicator.jsx
│   │
│   └── contact/
│       ├── ContactHero.jsx
│       ├── ContactInfo.jsx
│       ├── ContactForm.jsx
│       ├── MapSection.jsx
│       └── InquirySection.jsx
│
├── services/
│   ├── admissionService.js
│   └── chatService.js
│
├── App.jsx
├── main.jsx
└── index.css


# BACKEND FOLDER STRUCTURE

backend/
│
├── config/
│   └── db.js
│
├── models/
│   └── Admission.js
│
├── routes/
│   └── admissionRoutes.js
│
├── controllers/
│   └── admissionController.js
│
├── services/
│   ├── mailService.js
│   └── aiService.js
│
├── middleware/
│
├── .env
├── server.js
└── package.json

# DATA FIELDS
{
  childName: String,
  age: Number,
  gender: String,
  religion: String,
  standard: String,

  fatherName: String,
  motherName: String,

  phoneNumber: String,
  email: String,

  address: String,

  createdAt: Date
}