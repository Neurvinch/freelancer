import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
            Start Your Freelancing Journey.<br></br>Find jobs, chat with clients, and get paid easily.
            </h1>
            <p className="hero-description">
            Join thousands of freelancers working remotely. Connect with clients, showcase your skills, and start earning today.
            </p>
            <a href="/register" className="btn btn--full margin-right-sm">
              Register
            </a>
            <a href="#how" className="btn btn--outline">Learn more &darr;</a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="/im1.jpg" alt="Customer photo" />
                <img src="/im2.jpg" alt="Customer photo" />
                <img src="/im3.jpg" alt="Customer photo" />
                <img src="/im4.jpg" alt="Customer photo" />
                <img src="/img5.jpg" alt="Customer photo" />
                <img src="/img6.jpg" alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>Join!</span> without worry..
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet="/imagef3.png" type="image/webp" />
              <img
                src="/imagef3.png"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="/f1.webp" alt="Techcrunch logo" />
            <img src="/f2.png" alt="Business Insider logo" />
            <img src="/f3.png" alt="The New York Times logo" />
            <img src="/f4.png" alt="Forbes logo" />
            <img src="/f5.png" alt="USA Today logo" />
          </div>
        </div>
      </section>

      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">Freelancing: Tell us what you like (and what not)</h3>
            <p className="step-description">
            
            Work on Your Own Terms
Freelancing gives you the freedom to work when, where, and how you want. Whether you're a designer, developer, or writer, you can take on projects you love, collaborate with clients worldwide, and build a career that fits your lifestyle.

            </p>
          </div>
          <div className="step-img-box">
            <img
              src="/imagef5.png"
              className="step-img"
              alt="iPhone app preferences selection screen"
            />
          </div>
          <div className="step-img-box">
            <img
              src="/imagef4.png"
              className="step-img"
              alt="iPhone app meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">Why Businesses Love Freelancers</h3>
            <p className="step-description">
            Companies turn to freelancers for their skills, fresh perspectives, and flexibility. Hiring independent professionals helps businesses move faster, cut costs, and scale without the hassle of long-term commitments.
            </p>
          </div>
          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">Ready to Get Started?</h3>
            <p className="step-description">
            Whether you're looking for top talent or want to kickstart your freelancing career, now’s the time. With secure payments, verified clients, and exciting opportunities, freelancing has never been easier—or more rewarding!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="/imagef6.png"
              className="step-img"
              alt="iPhone app preferences selection screen"
            />
          </div>
        </div>
         {/* BOLD TEXT */}
      <h2 className="register-text">Register and enjoy your dream job!!</h2>

{/* Bouncing Register Button */}
<a href="/register" className="btn btn--full margin-right-sm">
              Register
            </a>
 

      </section>
    </>
  );
};

export default HomePage;