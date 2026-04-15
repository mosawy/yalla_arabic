import { Heart, Users, BookOpen, Award } from 'lucide-react';
import './About.css';

export default function About() {
  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Patient & Encouraging',
      description: 'Creating a comfortable, supportive environment where mistakes are part of learning'
    },
    {
      icon: <Users size={32} />,
      title: 'Student-Centered',
      description: 'Every lesson is tailored to your unique goals, interests, and learning style'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Practical Focus',
      description: 'Real-world conversations and practical skills you can use immediately'
    },
    {
      icon: <Award size={32} />,
      title: 'Experienced Professional',
      description: 'Years of experience teaching Arabic to international students of all levels'
    }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Meet Your Teacher</h1>
            <p>Learn Arabic from a passionate native speaker dedicated to your success</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <img
                  src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mariam Elsawy - Arabic Teacher"
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-text">
              <h2>Mariam Elsawy</h2>
              <h3>Native Egyptian Arabic Teacher</h3>
              <div className="about-bio">
                <p>
                  <strong>[Placeholder for bio text]</strong>
                </p>
                <p>
                  This section will include information about Mariam's background, her journey into teaching Arabic,
                  her qualifications, and what makes her approach to teaching unique and effective.
                </p>
                <p>
                  Key points to include: teaching experience, education, methodology, personal teaching philosophy,
                  and what drives her passion for helping students learn Arabic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-title">
            <h2>My Teaching Approach</h2>
            <p>How I help you succeed in learning Arabic</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Learn With Me?</h2>
          </div>
          <div className="teaching-method">
            <div className="method-item">
              <h3>Communicative Method</h3>
              <p>
                I focus on real conversations and practical communication from day one.
                Grammar is important, but it's not the main focus — speaking and understanding are.
              </p>
            </div>
            <div className="method-item">
              <h3>Personalized Curriculum</h3>
              <p>
                Every student is different. Your lessons are designed specifically for your goals,
                whether you're learning for travel, work, religious study, or personal enrichment.
              </p>
            </div>
            <div className="method-item">
              <h3>Fun & Encouraging Atmosphere</h3>
              <p>
                Learning a language should be enjoyable! I create a relaxed, supportive environment
                where you feel confident to practice and make mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="video-section">
            <h2>Introduction Video</h2>
            <p>Watch this short video to learn more about my teaching style and approach</p>
            <div className="video-placeholder">
              <div className="video-icon">▶</div>
              <p>[Video placeholder - Coming soon]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
