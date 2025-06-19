const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Portfolio data
const portfolioData = {
  personalInfo: {
    fullName: "Alamu Opeyemi Sheu",
    title: "Data Scientist & AI Researcher",
    shortDescription: "a passionate Data Scientist and AI Researcher",
    tagline: "Transforming Data into Actionable Insights",
    welcomeMessage: "Welcome to My Portfolio",
    profileImage: "images/image1.jpg",
    website: "http://localhost:3000"
  },
  
  about: {
    paragraphs: [
      "I'm Alamu Opeyemi Sheu, a passionate and versatile Data Scientist and AI Researcher with a deep interest in applying data to solve real-world problems. With a strong foundation in statistics, machine learning, and generative AI, I've built a career that blends rigorous analysis with innovative thinking.",
      "I've led and contributed to impactful projects ranging from medical image analysis to sales intelligence dashboards and spatial environmental modeling. Whether it's predicting disease outcomes, analyzing soil composition with geospatial data, or training students in AI tools, I bring clarity, creativity, and technical depth to every challenge.",
      "Beyond technical skills, I am deeply committed to education and mentorship, currently serving as a Data Science Tutor at Ice Hub Organization, where I train aspiring data professionals on tools like Python, R, SQL, Power BI, and Tableau.",
      "I thrive in collaborative environments and believe in continuous learning, sharing knowledge, and turning complex data into actionable insights that drive decisions."
    ]
  },
  
  education : [
    {
      degree: "Higher National in Statistics",
      institution: "Federal College of Animal Health and Production Technology, Ibadan",
      duration: "February 2019 – July 2024",
      description: null
    }
  ],
  
  experience: [
    {
      title: "Data Science Tutor",
      company: "Ice Hub Organization, Anambra",
      duration: "February 2025 – Present",
      responsibilities: [
        "Train students on how to use data to solve real-world problems",
        "Teach predictive modeling using Python, SQL, R, Excel, SPSS, Power BI, and Tableau",
        "Mentor learners on best practices in machine learning and data analysis"
      ],
      website: "https://www.icehub-ng.com/"
    },
    {
      title: "Data Analyst",
      company: "Pyvot360, Ibadan",
      duration: "February 2023 – September 2023",
      responsibilities: [
        "Monitored website traffic and user behavior",
        "Made data-driven decisions to improve performance and user experience",
        "Collaborated with cross-functional teams to translate insights into business strategy"
      ],
      website: null
    },
    {
      title: "Data Analyst Intern",
      company: "University of Ibadan – Laboratory for Interdisciplinary Statistical Analysis (UI-LISA)",
      duration: "August 2021 – September 2022",
      responsibilities: [
        "Conducted exploratory data analysis and built predictive models using machine learning",
        "Created interactive dashboards and visualizations for stakeholders",
        "Identified key business patterns from large datasets"
      ],
      website: "https://www.uilisa.com/"
    },
    {
      title: "Statistician Intern",
      company: "Oni and Son Children's Hospital, Ibadan",
      duration: "September 2020 – January 2021",
      responsibilities: [
        "Supported hospital data entry, cleaning, and statistical reporting",
        "Contributed to patient care decisions through data analysis support"
      ],
      website: null
    }
  ],
  
  projects: [
    {
      title: "Sales Dashboard in Power BI",
      technologies: ["Power BI"],
      description: "Developed an interactive sales analytics dashboard using Power BI. The dashboard provides visual insights into product performance, sales trends, revenue by region, and customer segmentation. It allows business users to explore KPIs with slicers and filters for better decision-making.",
      github: null,
      demo: null
    },
    {
      title: "Eye Prediction Using Deep Learning",
      technologies: ["Python", "OpenCV", "U-Net"],
      description: "This project leverages deep learning and medical imaging techniques to extract and predict eye structure from MRI scans. A U-Net architecture was used for segmentation, enabling accurate eye model reconstruction from volumetric data. Applications include computer vision in healthcare and ophthalmology.",
      github: "https://github.com/Opzydonwhite20/Eye_Fitting",
      demo: null
    },
    {
      title: "Phone Price Prediction",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      description: "Created a machine learning model to predict the price category of mobile phones based on their features. The project includes feature engineering, classification algorithms (Random Forest, SVM), and performance evaluation using accuracy and F1-score. Ideal for e-commerce and product benchmarking.",
      github: "https://github.com/Opzydonwhite20/Phone-Prediction",
      demo: null
    },
    {
      title: "Spatial Machine Learning for Soil CaCO₃ Prediction",
      technologies: ["Python", "RasterIO", "Geospatial ML", "Random Forest"],
      description: "Developed a spatial machine learning pipeline to predict soil calcium carbonate (CaCO₃) content using raster data and environmental covariates. The model integrates GIS data and Random Forest for mapping soil properties across geographic regions. Suitable for agronomic planning and precision agriculture.",
      github: "https://github.com/Opzydonwhite20/Spatial-Analysis-and-Machine-Learning-for-Soil-CaCO3-Prediction",
      demo: null
    }
  ],
  
  publications: [
    {
      title: "Stock Price Prediction and Traditional Models: An Approach to Achieve Short-, Medium- and Long-Term Goals",
      journal: "Journal of Intelligent Learning Systems and Applications",
      date: "September 2024",
      doi: "https://doi.org/10.4236/jilsa.2024.164018",
      abstract: null
    },
    {
      title: "Predicting Breast Cancer Survival: A Survival Analysis Approach Using Log Odds and Clinical Variables",
      journal: "Open Access Library Journal",
      date: "October 2024",
      doi: "https://doi.org/10.4236/oalib.1112317",
      abstract: null
    },
    {
      title: "Extracting Eye Models from MRI Scans Using U-Net-Based Deep Learning Framework",
      journal: "Journal of Computer and Communications",
      date: "November 2024",
      doi: "https://doi.org/10.4236/jcc.2024.1211007",
      abstract: null
    },
    {
      title: "Enhancing the Level of Sustainable Campus: The Projects and Case Study of Universiti Malaya, Kuala Lumpur",
      journal: "Journal of Design and Built Environment",
      date: "June 2025",
      doi: "https://ajba.um.edu.my/index.php/jdbe/article/view/55562/18260",
      abstract: null
    }
  ],
  
  services: {
    companyName: "NeuroGen Analytics",
    description: "I offer tailored data-driven solutions, advanced analytics, and hands-on training programs designed to empower individuals, businesses, and academic teams.",
    offerings: [
      {
        icon: "📊",
        title: "Data Science & Analytics",
        description: "End-to-end data science services including predictive modeling, deep learning, NLP, data cleaning, feature engineering, and A/B testing."
      },
      {
        icon: "🧪",
        title: "Research & Academic Support",
        description: "Statistical analysis for research papers, experimental design, academic publications assistance, and generative AI for research support."
      },
      {
        icon: "📈",
        title: "Data Visualization & Reporting",
        description: "Interactive dashboards with Power BI, Tableau, custom reports, automated reporting pipelines, and business intelligence integration."
      },
      {
        icon: "🌐",
        title: "Geospatial & Environmental Modeling",
        description: "Specialized modeling for agricultural and environmental datasets, raster-based ML, soil mapping, and spatial data analysis."
      },
      {
        icon: "🎓",
        title: "Training & Mentorship",
        description: "One-on-one coaching, group workshops, courses on Python, SQL, R, SPSS, Excel, and applied machine learning project support."
      },
      {
        icon: "💼",
        title: "Consulting & Custom Projects",
        description: "Data strategy sessions, AI solution design for startups, freelance ML/AI collaboration, and technical documentation."
      }
    ]
  },
  
  certifications: [
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "February 2025",
      link: "https://drive.google.com/file/d/1rD7JuFq-lT--PlHcS1O1chbF_n2LajRS/view?usp=drive_link",
      description: null
    }
  ],
  
  contact: {
    message: "Let's work together to unlock the value of your data.",
    email: "sheuopeyemi99@gmail.com",
    linkedin: "https://www.linkedin.com/in/alamu-opeyemi-sheu-932364245/",
    github: "https://github.com/Opzydonwhite20",
    twitter: null,
    phone: null
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { data: portfolioData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
  console.log(`📊 Data Scientist Portfolio - ${portfolioData.personalInfo.fullName}`);
});

module.exports = app;
