import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Music, Palette, Gamepad2, Calendar, Users, PartyPopper, Star, Trophy, Ticket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2024-03-15').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useGSAP(() => {
    gsap.to('.floating-shapes', {
      y: 20,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        amount: 1.5,
        from: 'random'
      }
    });

    gsap.fromTo('.event-card',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.events-grid',
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.to('.marquee-content', {
      xPercent: -50,
      repeat: -1,
      duration: 15,
      ease: 'none',
    });
  }, { scope: containerRef });

  const events = [
    { icon: Music, title: "Music Festival", date: "March 15", color: "text-pink-500", attendees: "500+" },
    { icon: Palette, title: "Art Exhibition", date: "March 20", color: "text-purple-500", attendees: "300+" },
    { icon: Gamepad2, title: "Gaming Tournament", date: "March 25", color: "text-blue-500", attendees: "200+" },
    { icon: Users, title: "Cultural Night", date: "April 1", color: "text-indigo-500", attendees: "1000+" },
  ];

  const achievements = [
    { icon: Star, text: "50+ Events Successfully Hosted" },
    { icon: Trophy, text: "Best Campus Events 2023" },
    { icon: Ticket, text: "10,000+ Tickets Sold" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <div ref={spotlightRef} className="spotlight" />
      
      {/* Marquee Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2">
        <div className="marquee">
          <div className="marquee-content">
            {achievements.map((achievement, index) => (
              <span key={index} className="inline-flex items-center mx-8">
                <achievement.icon className="w-4 h-4 mr-2" />
                {achievement.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="geometric-bg absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="display-text text-8xl md:text-9xl font-bold mb-8">
              CAMPUS
              <br />
              VIBES
            </h1>
            <p className="accent-text text-2xl md:text-3xl text-glow mb-8">
              Where Every Event Becomes Unforgettable
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {Object.entries(countdown).map(([unit, value]) => (
                <div key={unit} className="countdown-item">
                  <span className="text-3xl font-bold">{value}</span>
                  <span className="text-sm uppercase">{unit}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transition-all"
            >
              Explore Events <PartyPopper className="inline ml-2" />
            </motion.button>
          </motion.div>
          
          {/* Floating Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`floating-shapes absolute w-24 h-24 opacity-20 bg-gradient-to-br from-${['pink', 'purple', 'blue', 'indigo'][i % 4]}-500 to-transparent rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 relative">
        <motion.div style={{ y }} className="container mx-auto px-4">
          <h2 className="display-text text-6xl md:text-7xl font-bold mb-16 text-center">
            Upcoming Events
          </h2>
          <div className="events-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="event-card p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <event.icon className={`${event.color} w-12 h-12 mb-4`} />
                <h3 className="accent-text text-3xl mb-2">{event.title}</h3>
                <p className="body-text text-gray-300 mb-2">{event.date}</p>
                <p className="text-sm text-gray-400">{event.attendees} Attending</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="display-text text-5xl md:text-6xl font-bold mb-8"
            >
              Never Miss an Event
            </motion.h2>
            <p className="body-text text-xl mb-8 text-gray-300">
              Stay updated with the latest campus events and activities
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all">
                Subscribe Now <Calendar className="inline ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;