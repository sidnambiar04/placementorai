# Placementor.ai - AI-Powered Placement Preparation Platform

## 🎓 Academic Details

**Course:** Natural Language Processing (NLP)  
**Class:** Semester VI (Third Year Engineering)  
**College:** Pillai College of Engineering  
**Official Website:** https://www.pce.ac.in/

---

## 📌 Overview

Placementor.ai is an AI-powered placement preparation platform that helps students and job seekers become industry-ready through personalized guidance. It combines resume analysis, skill-gap detection, mock interviews, career roadmaps, and company recommendations in one workflow.

---

## 🎯 Objective

The project solves a common problem: students often do not know exactly what skills they are missing for a target role, and they lack personalized interview practice and resume feedback.

**Main goals:**
- Analyze resumes against role expectations
- Identify skill gaps with actionable insights
- Generate personalized study resources
- Simulate mock interviews and evaluate responses
- Build a structured career roadmap for role transition

---

## 🧠 Technologies Used

- Python
- FastAPI
- Gemini API (Google GenAI)
- spaCy and NLP processing utilities
- PyMuPDF for resume parsing
- Firebase (Authentication and storage integration)
- React + Vite (Frontend)
- JavaScript, CSS, Framer Motion

---

## 📊 Dataset

**Source of dataset:**
- User-uploaded resume documents (PDF, DOCX, image)
- User profile and target-role inputs
- AI-generated interview questions and evaluation data
- Curated learning resource links generated dynamically

**Description:** This project is primarily dynamic and personalized, so it does not rely on one fixed static dataset. Inputs are generated per user context and role, making outputs adaptive and role-specific.

---

## ⚙️ Installation

**1. Clone repository**
```bash
git clone https://github.com/sidnambiar04/placementorai.git
cd placementorai
```

**2. Backend setup**
```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file with:
```
GEMINI_API_KEY=your_gemini_api_key
FIREBASE_CREDENTIALS_PATH=path_to_firebase_credentials_json
```

```bash
python run.py
```

**3. Frontend setup** (open a new terminal)
```bash
cd frontend
npm install
npm run dev
```

**4. Open application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Health check: http://localhost:8000/health

---

## ▶️ Usage

1. Register or log in to the platform
2. Upload your resume and choose a target role
3. Run resume audit and skill-gap analysis
4. Generate a personalized career roadmap
5. Take AI mock interviews and review evaluation feedback
6. Explore recommended companies and study resources

---

## 📈 Results

- Personalized AI-generated feedback for resume and interviews
- Skill-match and readiness insights for target roles
- Role-based study plan and resource recommendations
- Structured multi-phase career roadmap
- End-to-end placement preparation workflow in one platform

---

## 🌐 Live Demo

- **Frontend:** https://placementorai.vercel.app
- **Backend API:** https://placementorai-backend.onrender.com
- **API Docs:** https://placementorai-backend.onrender.com/docs

---

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/9c43e8da-a47e-4c4f-ac27-6a743db7d410" />
<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/dd828980-2782-44f7-99c6-f68d75b58faa" />
<img width="1919" height="976" alt="image" src="https://github.com/user-attachments/assets/bfb495eb-217d-4141-abf3-5f108f12a75f" />
<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/386c3279-f4c9-41e3-b701-21c4e8bc4ab8" />
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/bbb09082-dc9d-4c0d-9b63-79f21993d3b3" />
<img width="1919" height="954" alt="image" src="https://github.com/user-attachments/assets/3150676e-7e34-4d9b-af94-e568cc35be08" />

---

## 👥 Team Contributions

| Team Member | Contribution |
|-------------|-------------|
| Sanskar Mishra | Landing Page and its components |
| Krupa More | AI feature of Company Recommendations |
| Noel Tony | User Onboarding page and its extensive data |
| Aditya Nair | Settings page providing web-appearance features |
| Anand Nair | Success Stories page displaying blogs and review |
| Ayush Nair | Dashboard page showing performance metrics |
| Sreeshant Nair | UI/UX designing of attractive Landing Page |
| Suyash Nair | Partners page providing details on companies |
| Vishnu Nair | Mock Interview-Evaluation and Roadmap feature |
| Sidharth Nambiar | Resume Evaluation and Skill Gap Analysis |
| Rutuja Nangare | Profile page providing user information |

---

## 🏆 Achievement

**1st Prize Winner** — NLP Mini Project, Semester VI, Pillai College of Engineering
