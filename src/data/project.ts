export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    webUrl?: string;
    githubUrl?: string;
    gitlabUrl?: string;
    liveUrl?: string;
    downloadAppUrl?: string;
    prototypeUrl?: string;
    features: string[];
    challenges: string;
    results: string;
};

export const myProjects: Project[] = [
    {
      id: "1",
      title: "Kabtour",
      description:
        "Kabtour is a B2G tourism platform developed to support digital tourism services. The system handles bookings, orders, and tourism-related products such as accommodations, rentals, retail items, and tourist tickets.",
      image: "/images/kabtour.png",
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "TypeORM",
        "RabbitMQ",
        "Jest",
        "Docker",
      ],
      webUrl: "https://kabtour.com/kabtour.html",
      liveUrl: "https://play.google.com/store/apps/details?id=com.kabtour.mykomodo.android",
      features: [
        "Order system for tourism products",
        "Cart and checkout flow",
        "Booking management",
        "Order status tracking",
        "Order history",
        "Store and product management",
      ],
      challenges:
        "The main challenge was rebuilding the system from scratch for a new version while still meeting a tight launch deadline and ensuring system stability.",
      results:
        "Kabtour successfully supports digital tourism services, providing tourists with comprehensive information and seamless booking experiences.",
    },

    {
      id: "2",
      title: "Vehicare",
      description:
        "Vehicare is a motorcycle maintenance management web application developed as a final project at Hacktiv8 (FSJS-HCK-68). As a Frontend Developer, I was responsible for building responsive and scalable user interfaces, implementing interactive features, and integrating REST APIs to deliver a seamless and engaging user experience.",

      image: "/images/vehicare.png",

      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
        "Vercel",
      ],

      githubUrl:
        "https://github.com/group-project-hck/Vehicare-Final-Project",

      liveUrl: "https://vehicare.vercel.app",

      features: [
        "Responsive vehicle management dashboard",
        "Service history tracking with real-time UI updates",
        "Spare part catalog and detailed product pages",
        "Gamification system (coin and voucher rewards)",
        "Service booking flow with dynamic receipt generation",
        "Maintenance reminder notification interface",
        "User profile customization",
        "Chatbot interface integration",
      ],

      challenges:
        "Developing multiple interactive features within a limited timeframe while maintaining UI consistency and clean component architecture. Efficient state management and structured API integration were essential to ensure smooth performance and maintainability.",

      results:
        "Successfully delivered and deployed a fully responsive, feature-rich web application. This project enhanced my expertise in frontend architecture, component structuring, API integration, and collaborative development using Git workflow.",
    },

    {
      id: "3",
      title: "Pakcebuuk",
      description:
        "Pakcebuuk is a personal mobile application project inspired by Facebook, built using React Native and Expo. The project focuses on implementing core social media functionalities such as authentication, posting, user interactions, and feed-based content architecture using GraphQL.",

      image: "/images/pakcebuuk.png",

      technologies: [
        "React Native",
        "Expo",
        "GraphQL",
        "Apollo Client",
        "MongoDB"
      ],

      githubUrl: "https://github.com/aaridhon19/Pakcebuuk",

      features: [
        "User authentication flow",
        "Create and display posts",
        "Like and basic interaction system",
        "User profile screen",
        "Feed-based content rendering",
        "GraphQL query & mutation integration"
      ],

      challenges:
        "Designing a scalable social media structure independently while managing state, navigation flow, and GraphQL data handling in a mobile environment.",

      results:
        "Successfully built a functional social media mobile prototype demonstrating core feed logic, authentication flow, and GraphQL-based data integration."
    },

    {
      id: "4",
      title: "Voice & Image to Text Converter",

      description:
        "An independent Android application developed as my undergraduate thesis at Gunadarma University. This app integrates speech recognition, optical character recognition (OCR), and text-to-speech into a single platform, enabling users to convert voice and images into text, as well as convert text back into audio.",

      image: "/images/sit.png",

      technologies: [
        "Java",
        "XML",
        "Android SDK",
        "Speech Recognition API",
        "OCR",
        "Text-to-Speech"
      ],

      githubUrl:
        "https://github.com/aaridhon19/Speech_N_Images_To_Text",

      liveUrl:
        "https://drive.google.com/file/d/1WIfKHIOZeUoCCjHbPBuDYGbx6fwknPFR/view",

      downloadAppUrl:
        "https://drive.google.com/drive/folders/1mQeUQApUQ-DNJiCn3k21udSGo2LUtzNx?usp=sharing",

      features: [
        "Real-time speech-to-text conversion",
        "Image-to-text extraction using OCR",
        "Text-to-speech audio playback",
        "Integrated multi-conversion workflow in one application",
        "Simple and accessible Android user interface"
      ],

      challenges:
        "The main challenge was maintaining recognition accuracy across varying audio quality and image resolutions while integrating multiple Android APIs into a seamless and user-friendly experience.",

      results:
        "Successfully delivered a fully functional Android prototype application that met academic requirements and demonstrated strong capability in native Android development and independent problem-solving."
    },

    {
      id: "5",
      title: "Ria Recipe Food",

      description:
        "Ria Recipe Food is an Android mobile application developed during the Binar Bootcamp program. In this project, I focused on frontend development, building intuitive user interfaces and implementing recipe management features for food and beverage collections.",

      image: "/images/ria-recipe.png",

      technologies: [
        "Kotlin",
        "XML",
        "Android SDK",
        "RecyclerView",
        "ViewBinding",
        "Local Storage (Room/SQLite)"
      ],

      gitlabUrl:
        "https://gitlab.com/group-1-binar/ak16chapter6-kelompok-1-ria-recipe",

      prototypeUrl:
        "https://www.figma.com/proto/Z40CciIcyndVFMhYKfalG8/Chapter-6?node-id=20-87&starting-point-node-id=20%3A97&t=CtsEtNV0XXCAOjFq-1",

      features: [
        "Create, edit, and delete food & beverage recipes",
        "Recipe detail pages with structured ingredients and steps",
        "Local data persistence using Android storage",
        "RecyclerView-based dynamic list rendering",
        "Clean and user-friendly Android UI implementation"
      ],

      challenges:
        "Translating Figma design prototypes into a fully functional Android interface while maintaining layout consistency and smooth navigation was the primary challenge during development.",

      results:
        "The application was successfully completed as part of the bootcamp program and strengthened my skills in Android UI development, component structuring, and local data handling."
    },

    {
      id: "6",
      title: "Enigma Music",

      description:
        "Enigma Music is an Android-based music player application developed during the Binar Bootcamp program. In this project, I focused on frontend development, implementing a responsive music browsing interface and integrating a public music API to stream audio previews.",

      image: "/images/emp.png",

      technologies: [
        "Kotlin",
        "XML",
        "Android SDK",
        "RecyclerView",
        "MediaPlayer",
        "REST API"
      ],

      gitlabUrl:
        "https://gitlab.com/ak16chapter7-kelompok1/ak16chapter7-enigma-music-player",

      prototypeUrl:
        "https://www.figma.com/proto/NEFNDqy2PCxc9DnS0f6vBx/Chapter-7?node-id=17-15&starting-point-node-id=17%3A12&t=L36IlmuI6KhpQbpy-1",

      features: [
        "Dynamic music catalog fetched from public API",
        "30-second audio preview playback",
        "MediaPlayer-based playback controls (play, pause, stop)",
        "Structured music detail page",
        "Responsive Android UI implementation"
      ],

      challenges:
        "The public API only provided 30-second preview clips instead of full tracks. I adjusted the playback logic and UI experience to clearly communicate preview limitations while maintaining a smooth user experience.",

      results:
        "The application successfully demonstrates API integration, asynchronous data handling, and audio playback management in Android. This project strengthened my understanding of REST API consumption and media handling in mobile development."
    },

    {
      id: "7",
      title: "Food Ordering",

      description:
        "Food Ordering is my first Android mobile application project, developed as part of a university scientific writing assignment. This project marks the beginning of my journey in mobile development, where I implemented a simulated online food ordering system with structured navigation and user flow using Java and XML.",

      image: "/images/fo.png",

      technologies: [
        "Java",
        "XML",
        "Android SDK",
        "RecyclerView",
        "Intent Navigation"
      ],

      githubUrl: "https://github.com/aaridhon19/Food_Ordering",

      downloadAppUrl:
        "https://drive.google.com/drive/folders/1HSJaaiZLoNP3x89WTZVhLFmgfMJrDN-r?usp=sharing",

      features: [
        "Menu list display using RecyclerView",
        "Detail page navigation using Intent",
        "Add-to-order functionality",
        "Order summary screen",
        "Structured multi-activity navigation flow"
      ],

      challenges:
        "As my first mobile development project, understanding Android activity lifecycle, intent-based navigation, and UI structuring required intensive learning and experimentation. Ensuring smooth screen transitions and logical ordering flow was the main focus.",

      results:
        "The project successfully demonstrates foundational Android development skills, structured user flow design, and solid understanding of Java-based mobile architecture."
    }
];
