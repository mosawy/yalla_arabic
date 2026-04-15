import { Calendar, Circle as HelpCircle } from 'lucide-react';
import './Book.css';

export default function Book() {
  const faqs = [
    {
      question: 'What happens in the free trial?',
      answer: 'In your free discovery call, we\'ll discuss your goals, assess your current level, and create a personalized learning plan. It\'s a chance for us to get to know each other and ensure we\'re a good fit!'
    },
    {
      question: 'What platform do we use?',
      answer: 'Lessons are conducted via Zoom or Google Meet, whichever you prefer. You\'ll receive a meeting link before each lesson.'
    },
    {
      question: 'What timezone are you in?',
      answer: 'I\'m based in Cairo, Egypt (EET timezone), but I offer flexible scheduling to accommodate students worldwide.'
    },
    {
      question: 'Do I need any materials?',
      answer: 'No materials needed to start! All learning resources, worksheets, and materials will be provided during our lessons.'
    }
  ];

  return (
    <div className="book">
      <section className="book-hero">
        <div className="container">
          <div className="book-hero-content">
            <Calendar size={48} />
            <h1>Let's Get Started!</h1>
            <p>Book your free discovery call and begin your Arabic learning journey</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="booking-content">
            <div className="booking-info">
              <h2>What to Expect</h2>
              <div className="expectation-list">
                <div className="expectation-item">
                  <h3>1. Choose Your Time</h3>
                  <p>Select a convenient time slot from the calendar</p>
                </div>
                <div className="expectation-item">
                  <h3>2. Free Discovery Call</h3>
                  <p>We'll discuss your goals and create your learning plan</p>
                </div>
                <div className="expectation-item">
                  <h3>3. Start Learning</h3>
                  <p>Begin your personalized Arabic lessons</p>
                </div>
              </div>

              <div className="whatsapp-option">
                <h3>Prefer to chat first?</h3>
                <p>Not sure which program is right for you? Send me a message on WhatsApp and I'll help you decide!</p>
                <a
                  href="https://wa.me/+201234567890?text=Hi!%20I'm%20interested%20in%20booking%20a%20lesson%20with%20Yalla%20Arabic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="calendly-container">
              <div className="calendly-placeholder">
                <Calendar size={64} />
                <h3>Calendly Embed</h3>
                <p>The Calendly scheduling widget will be embedded here</p>
                <div className="placeholder-note">
                  <p><strong>Integration Note:</strong></p>
                  <p>Add your Calendly embed code below to enable direct booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <div className="faq-section">
            <div className="section-title">
              <HelpCircle size={32} />
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
