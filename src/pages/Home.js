import React from 'react';
import { motion } from 'framer-motion';

// Add shine animation CSS and responsive styles
const shineStyles = `
  @keyframes shine {
    0% {
      left: -100%;
    }
    100% {
      left: 120%;
    }
  }
  
  .animate-shine {
    animation: shine 2s infinite;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem !important;
    }
    .hero-subtitle {
      font-size: 1.2rem !important;
    }
    .hero-star {
      font-size: 1.2rem !important;
    }
    .hero-button {
      padding: 1rem 2rem !important;
      font-size: 1rem !important;
    }
    .section-padding {
      padding: 3rem 1rem !important;
    }
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    .solutions-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
      gap: 1.5rem !important;
    }
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 1rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem !important;
      letter-spacing: 0.05em !important;
    }
    .hero-subtitle {
      font-size: 1rem !important;
    }
    .hero-star {
      font-size: 1rem !important;
      margin: 0 0.3rem !important;
    }
    .hero-button {
      padding: 0.8rem 1.5rem !important;
      font-size: 0.9rem !important;
    }
    .section-padding {
      padding: 2rem 0.5rem !important;
    }
    .solutions-grid {
      grid-template-columns: 1fr !important;
    }
    .stats-grid {
      grid-template-columns: 1fr !important;
    }
  }
`;

const Home = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    {/* Add CSS styles */}
    <style>{shineStyles}</style>
    
    {/* Hero Section */}
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/images/homeback.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        textAlign: 'center',
        padding: '2rem 1rem',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      {/* Overlay for better text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
      {/* Creative CHILDCRAFT heading with multiple effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        style={{ position: 'relative', marginBottom: '1rem' }}
      >
        <motion.h1
          className="hero-title"
          style={{
            fontSize: '4.5rem',
            fontWeight: 900,
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #f0932b)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.1em',
            textAlign: 'center',
            position: 'relative',
            textShadow: 'none',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          CHILDCRAFT
        </motion.h1>
        
        {/* Glowing border effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120%',
            height: '120%',
            borderRadius: '20px',
            filter: 'blur(20px)',
            opacity: 0.3,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              background: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'][i],
              borderRadius: '50%',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Creative Publishers subtitle with typewriter effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ position: 'relative', marginBottom: '3rem' }}
      >
        <motion.p
          className="hero-subtitle"
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            position: 'relative',
            textShadow: '0 0 20px rgba(255, 230, 102, 0.5)',
            letterSpacing: '0.15em',
          }}
        >
          <span style={{ 
            background: 'linear-gradient(90deg, #ffe066, #ffffff, #ffe066)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Publishers
          </span>
          <span 
            className="hero-star"
            style={{ 
              color: '#4ecdc4',
              margin: '0 0.5rem',
              fontSize: '1.8rem',
            }}
          >
            ✦
          </span>
          <span style={{ 
            background: 'linear-gradient(90deg, #4ecdc4, #45b7d1, #4ecdc4)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Pvt Ltd
          </span>
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '3px',
            background: 'linear-gradient(90deg, #ffe066, #4ecdc4, #45b7d1)',
            borderRadius: '2px',
          }}
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </motion.div>

      {/* Creative PORTFOLIO button with shine effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }}
        style={{ perspective: '1000px' }}
      >
        <motion.button
          className="relative overflow-hidden hero-button"
          style={{
            padding: '1.5rem 3rem',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: '#ffffff',
            background: 'linear-gradient(135deg, #e23a03 0%, #9c1607 100%)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            position: 'relative',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            boxShadow: '0 15px 35px rgba(226, 58, 3, 0.3), inset 0 -5px 15px rgba(0, 0, 0, 0.2)',
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ 
            scale: 1.08,
            rotateX: 5,
            rotateY: 5,
            boxShadow: '0 20px 45px rgba(226, 58, 3, 0.4), inset 0 -8px 20px rgba(0, 0, 0, 0.3)',
            transition: { duration: 0.3 }
          }}
          whileTap={{ 
            scale: 0.95,
            rotateX: -5,
            transition: { duration: 0.1 }
          }}
        >
          <span style={{ position: 'relative', zIndex: 10 }}>
            📂 PORTFOLIO
          </span>

          {/* Continuous Shine Line */}
          <span 
            className="animate-shine absolute top-0 left-[-100%] w-[80px] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform skew-x-[-20deg]"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)',
              transform: 'skewX(-20deg)',
              width: '80px',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: '-100%',
            }}
          />
        </motion.button>
      </motion.div>
      </div>
    </section>

    {/* About Us Section */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#ffffff',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1a202c',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        ABOUT US
      </motion.h2>
      
      <div 
        className="about-grid"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          marginBottom: '3rem' 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR VISION
          </h4>
          <img 
            src="/images/vision.jpeg" 
            alt="Our Vision" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR MISSION
          </h4>
          <img 
            src="/images/mision.jpeg" 
            alt="Our Mission" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '1rem' }}>
            OUR SERVICES
          </h4>
          <img 
            src="/images/smb.jpeg" 
            alt="Our Services" 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '1rem' 
            }} 
          />
          <p style={{ color: '#4a5568', lineHeight: 1.6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '4rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          DIGITAL SCHOOL RESOURCES
        </motion.h3>
        
        <div 
          className="solutions-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '3rem',
            perspective: '1000px',
          }}
        >
          {[
            { title: 'QUESTION PAPER GENERATOR', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor incididunt.', icon: '📝', color: '#ff6b6b' },
            { title: 'VIRTUAL TOUR GUIDE', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.', icon: '🗺️', color: '#4ecdc4' },
            { title: 'BOOKS CLASSES 1-8', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.', icon: '📚', color: '#45b7d1' },
            { title: 'KINDERGARTEN', desc: 'Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore.', icon: '🎨', color: '#f9ca24' },
            { title: 'ANIMATIONS', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.', icon: '🎬', color: '#f0932b' },
            { title: 'WORKSHEETS', desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.', icon: '📄', color: '#eb4d4b' },
            { title: 'FLASH CARDS', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.', icon: '🃏', color: '#6c5ce7' },
            { title: 'WORKSHOPS', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.', icon: '🎯', color: '#a29bfe' },
            { title: 'ORDER FORM', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.', icon: '📋', color: '#fd79a8' },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              style={{
                padding: '2.5rem 2rem',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                border: `3px solid ${service.color}`,
                position: 'relative',
                transformStyle: 'preserve-3d',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.6 }}
                style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  background: service.color,
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: `0 10px 20px ${service.color}40`,
                }}
              >
                {service.icon}
              </motion.div>
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.5 }}
                style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: service.color, 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {service.title}
              </motion.h4>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.7 }}
                style={{ 
                  color: '#4a5568', 
                  lineHeight: 1.6, 
                  fontSize: '1rem' 
                }}
              >
                {service.desc}
              </motion.p>
              <motion.div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '40px',
                  height: '40px',
                  background: `linear-gradient(45deg, ${service.color}, ${service.color}80)`,
                  borderRadius: '50%',
                  opacity: 0.2,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating background elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
        }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>

    {/* Statistics Section */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#2563eb',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div 
          className="stats-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {[
            { number: '50+', label: 'PROJECTS' },
            { number: '25+', label: 'CLIENTS' },
            { number: '15+', label: 'TEAM MEMBERS' },
            { number: '5+', label: 'YEARS EXPERIENCE' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {stat.number}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section
      className="section-padding"
      style={{
        padding: '5rem 2rem',
        background: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#1a202c',
            marginBottom: '2rem',
          }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '12px',
            marginBottom: '2rem',
          }}
        >
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Location:</strong> Lorem ipsum dolor sit amet consectetur
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Email:</strong> lorem@ipsum.dolor.sit
          </p>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            <strong>Phone:</strong> +123 456 789 0123
          </p>
          <p style={{ color: '#4a5568' }}>
            <strong>Working Hours:</strong> Lorem ipsum dolor sit amet
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#ffffff',
            background: '#2563eb',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  </div>
);

export default Home;
