import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, BookMarked, Briefcase, CircleCheck as CheckCircle, Calendar, UserCheck, Rocket } from 'lucide-react';
import './Home.css';

export default function Home() {
  const programs = [
    {
      icon: <BookOpen size={40} />,
      title: 'Modern Standard Arabic (MSA)',
      description: 'Master the formal Arabic used in media, literature, and official communication',
      link: '/programs#msa'
    },
    {
      icon: <MessageSquare size={40} />,
      title: 'Egyptian Arabic',
      description: 'Speak like a local — learn the everyday Arabic of 100 million Egyptians',
      link: '/programs#egyptian'
    },
    {
      icon: <BookMarked size={40} />,
      title: 'Quranic Arabic',
      description: 'Understand the words of the Quran in their original language',
      link: '/programs#quranic'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Business Arabic',
      description: 'Communicate confidently in Arabic-speaking professional environments',
      link: '/programs#business'
    }
  ];

  const differentiators = [
    {
      icon: <UserCheck size={32} />,
      title: 'Native Egyptian Teacher',
      description: 'Learn from Mariam, an experienced native speaker with years of teaching expertise'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Tailored to Your Goals',
      description: 'Personalized lessons designed specifically for your learning objectives and pace'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Formal & Spoken Arabic',
      description: 'Master both Modern Standard Arabic and real-world Egyptian dialect'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Flexible Scheduling',
      description: 'Learn from anywhere in the world with convenient online lessons'
    }
  ];

  const steps = [
    {
      number: '1',
      icon: <Calendar size={32} />,
      title: 'Book a Free Discovery Call',
      description: 'Schedule a complimentary call to discuss your goals and learning style'
    },
    {
      number: '2',
      icon: <CheckCircle size={32} />,
      title: 'Get a Personalized Plan',
      description: 'Receive a custom curriculum designed specifically for your needs'
    },
    {
      number: '3',
      icon: <Rocket size={32} />,
      title: 'Start Learning Arabic!',
      description: 'Begin your journey with engaging, interactive lessons'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      program: 'Egyptian Arabic',
      quote: 'Placeholder for student testimonial. Share your experience with Yalla Arabic!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Ahmed Hassan',
      country: 'UK',
      program: 'Quranic Arabic',
      quote: 'Placeholder for student testimonial. Share your experience with Yalla Arabic!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      program: 'Modern Standard Arabic',
      quote: 'Placeholder for student testimonial. Share your experience with Yalla Arabic!',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Learn Arabic the way it's actually spoken</h1>
            <p className="hero-subtitle">
              Private & group Arabic lessons online with a native Egyptian teacher
            </p>
            <div className="hero-buttons">
              <Link to="/book" className="btn btn-primary btn-large">
                Book a Free Trial Lesson
              </Link>
              <a
                href="https://wa.me/+201234567890?text=Hi!%20I'm%20interested%20in%20learning%20Arabic%20with%20Yalla%20Arabic."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
              >
                Message me on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>What will you learn?</h2>
            <p>Choose the program that matches your goals</p>
          </div>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <Link to={program.link} key={index} className="program-card card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-title">
            <h2>Why Yalla Arabic?</h2>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="differentiator-card">
                <div className="differentiator-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>How it works</h2>
            <p>Start your Arabic journey in three simple steps</p>
          </div>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="section-title">
            <h2>What students say</h2>
            <p>Hear from learners around the world</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-info">{testimonial.country} • {testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-primary cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your Arabic journey?</h2>
            <p>Join students from around the world learning Arabic with confidence</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-accent btn-large">
                Book a Free Trial
              </Link>
              <a
                href="https://wa.me/+201234567890?text=Hi!%20I'm%20interested%20in%20learning%20Arabic%20with%20Yalla%20Arabic."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
                style={{ borderColor: 'white', color: 'white' }}
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
