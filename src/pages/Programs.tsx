import { BookOpen, MessageSquare, BookMarked, Briefcase, Users, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Programs.css';

export default function Programs() {
  const programs = [
    {
      id: 'msa',
      icon: <BookOpen size={48} />,
      title: 'Modern Standard Arabic (MSA)',
      subtitle: 'Master formal Arabic for professional and academic contexts',
      forWhom: 'Diplomats, students, professionals, journalists, and anyone interested in Arabic literature and formal communication',
      focus: [
        'Reading comprehension and formal writing',
        'Grammar and sentence structure',
        'Media Arabic (news, articles, reports)',
        'Professional correspondence',
        'Academic Arabic'
      ],
      levels: 'Beginner (A1) to Advanced (C1)',
      format: '1-on-1 or Group lessons',
      sampleTopics: [
        'Arabic alphabet and pronunciation',
        'Essential grammar foundations',
        'Formal communication in professional settings',
        'Reading news articles and literature',
        'Writing formal emails and documents'
      ]
    },
    {
      id: 'egyptian',
      icon: <MessageSquare size={48} />,
      title: 'Egyptian Arabic (Ammiya)',
      subtitle: 'Speak confidently in everyday Egyptian conversations',
      forWhom: 'Travelers, expats living in Egypt, culture enthusiasts, and anyone who wants to communicate naturally with Egyptians',
      focus: [
        'Everyday conversational phrases',
        'Egyptian slang and expressions',
        'Practical situations (shopping, dining, transport)',
        'Egyptian culture and customs',
        'Pronunciation and accent training'
      ],
      levels: 'Complete Beginner to Advanced Conversational',
      format: '1-on-1 or Group lessons',
      sampleTopics: [
        'Greetings and basic conversations',
        'Navigating daily life in Egypt',
        'Understanding Egyptian media and music',
        'Social interactions and idioms',
        'Cultural nuances and etiquette'
      ]
    },
    {
      id: 'quranic',
      icon: <BookMarked size={48} />,
      title: 'Quranic Arabic',
      subtitle: 'Understand the Quran in its original language',
      forWhom: 'Non-Arabic-speaking Muslims who want to read and comprehend the Quran without translation',
      focus: [
        'Quranic vocabulary and phrases',
        'Classical Arabic grammar essentials',
        'Reading with proper tajweed',
        'Understanding verse meanings',
        'Common Quranic expressions'
      ],
      levels: 'Beginner to Intermediate',
      format: '1-on-1 lessons (recommended)',
      sampleTopics: [
        'Arabic alphabet and Quranic script',
        'Essential Quranic vocabulary',
        'Grammar patterns in the Quran',
        'Memorization techniques',
        'Understanding Surah meanings'
      ]
    },
    {
      id: 'business',
      icon: <Briefcase size={48} />,
      title: 'Business Arabic',
      subtitle: 'Communicate professionally in Arabic-speaking markets',
      forWhom: 'Corporate professionals, NGO workers, entrepreneurs, and anyone doing business in Arabic-speaking regions',
      focus: [
        'Business vocabulary and terminology',
        'Formal email and report writing',
        'Meeting and presentation Arabic',
        'Negotiation and diplomacy phrases',
        'Cultural business etiquette'
      ],
      levels: 'Intermediate to Advanced',
      format: '1-on-1 lessons',
      sampleTopics: [
        'Professional introductions and networking',
        'Writing business correspondence',
        'Conducting meetings in Arabic',
        'Presentations and proposals',
        'Cross-cultural business communication'
      ]
    }
  ];

  return (
    <div className="programs">
      <section className="programs-hero">
        <div className="container">
          <div className="programs-hero-content">
            <h1>Arabic Programs</h1>
            <p>Choose the learning path that matches your goals</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="program-detail">
              <div className="program-header">
                <div className="program-icon-large">{program.icon}</div>
                <div>
                  <h2>{program.title}</h2>
                  <p className="program-subtitle">{program.subtitle}</p>
                </div>
              </div>

              <div className="program-body">
                <div className="program-section">
                  <h3>Who is this for?</h3>
                  <p>{program.forWhom}</p>
                </div>

                <div className="program-section">
                  <h3>What you'll learn</h3>
                  <ul>
                    {program.focus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="program-info-grid">
                  <div className="info-item">
                    <h4>Levels Offered</h4>
                    <p>{program.levels}</p>
                  </div>
                  <div className="info-item">
                    <h4>Lesson Format</h4>
                    <p>{program.format}</p>
                  </div>
                </div>

                <div className="program-section">
                  <h3>Sample Topics</h3>
                  <ul>
                    {program.sampleTopics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="comparison-section">
            <h2>1-on-1 vs Group Lessons</h2>
            <div className="comparison-grid">
              <div className="comparison-card card">
                <div className="comparison-icon">
                  <User size={40} />
                </div>
                <h3>Private 1-on-1 Lessons</h3>
                <ul>
                  <li><strong>Class Size:</strong> Just you and the teacher</li>
                  <li><strong>Personalization:</strong> 100% customized to your goals</li>
                  <li><strong>Flexibility:</strong> Schedule at your convenience</li>
                  <li><strong>Pace:</strong> Learn at your own speed</li>
                  <li><strong>Best for:</strong> Focused learning, specific goals, flexible schedule</li>
                </ul>
              </div>

              <div className="comparison-card card">
                <div className="comparison-icon">
                  <Users size={40} />
                </div>
                <h3>Group Lessons</h3>
                <ul>
                  <li><strong>Class Size:</strong> 3-6 students</li>
                  <li><strong>Personalization:</strong> Structured curriculum with group activities</li>
                  <li><strong>Flexibility:</strong> Fixed weekly schedule</li>
                  <li><strong>Pace:</strong> Progress together as a group</li>
                  <li><strong>Best for:</strong> Interactive learning, making friends, budget-friendly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-primary cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Not sure which program is right for you?</h2>
            <p>Book a free discovery call and I'll help you choose the best path</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-accent btn-large">
                Book a Free Discovery Call
              </Link>
              <a
                href="https://wa.me/+201234567890?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
                style={{ borderColor: 'white', color: 'white' }}
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
