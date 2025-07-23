import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Admission from './components/Admission';
import Courses from './components/Courses';
import Placements from './components/Placements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CRMCourse from './pages/CRMCourse';
import MedicalCodingCourse from './pages/MedicalCodingCourse';
import ClinicalSASCourse from './pages/ClinicalSASCourse';
import ADCRCourse from './pages/ADCRCourse';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import AccreditationsPage from './pages/AccreditationsPage';
import LearningCentersPage from './pages/LearningCentersPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Main Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Admission />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

// Course Page Layout Component
const CoursePageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/courses">
            {() => (
              <CoursePageLayout>
                <CoursesPage />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/crm">
            {() => (
              <CoursePageLayout>
                <CRMCourse />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/medical-coding">
            {() => (
              <CoursePageLayout>
                <MedicalCodingCourse />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/placements">
            {() => (
              <CoursePageLayout>
                <PlacementsPage />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/accreditations">
            {() => (
              <CoursePageLayout>
                <AccreditationsPage />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/learning-centers">
            {() => (
              <CoursePageLayout>
                <LearningCentersPage />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/blog">
            {() => (
              <CoursePageLayout>
                <BlogPage />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/privacy-policy">
            {() => (
              <CoursePageLayout>
                <PrivacyPolicyPage />
              </CoursePageLayout>
            )}
          </Route>
          {/* Placeholder routes for other courses */}
          <Route path="/courses/pgdcr">
            {() => (
              <CoursePageLayout>
                <CRMCourse />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/adcr">
            {() => (
              <CoursePageLayout>
                <ADCRCourse />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/clinical-sas">
            {() => (
              <CoursePageLayout>
                <ClinicalSASCourse />
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/bioinformatics">
            {() => (
              <CoursePageLayout>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-gray-900">Bioinformatics Course - Coming Soon</h1>
                </div>
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/ai-ml">
            {() => (
              <CoursePageLayout>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-gray-900">AI & ML in Healthcare Course - Coming Soon</h1>
                </div>
              </CoursePageLayout>
            )}
          </Route>
          <Route path="/courses/mba">
            {() => (
              <CoursePageLayout>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-4xl font-bold text-gray-900">MBA in Healthcare Management Course - Coming Soon</h1>
                </div>
              </CoursePageLayout>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;