"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, FaBook, FaRocket, FaStar, FaGraduationCap, 
  FaLightbulb, FaChartLine, FaUsers, FaPlay, FaHeadphones,
  FaFilePdf, FaBookOpen, FaCheck, FaTrophy, FaChevronLeft,
  FaChevronRight, FaQuoteLeft, FaAward
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [currentBook, setCurrentBook] = useState(0);

  const featuredBooks = [
    {
      id: '1',
      title: 'Quantum Physics Made Simple',
      subtitle: 'Understanding the Universe at Its Smallest Scale',
      author: 'Prof. James Mitchell',
      coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop&q=80',
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviewCount: 203,
      badge: 'BESTSELLER',
      gradeLevel: '10-12',
      description: 'A groundbreaking approach to teaching quantum mechanics to gifted high school students. This comprehensive guide breaks down complex concepts into intuitive, visual explanations.',
      features: [
        'Visual representations of quantum phenomena',
        'Step-by-step mathematical derivations',
        'Real-world applications and experiments',
        'Challenge problems for advanced learners',
        'Interactive online resources included'
      ],
      chapters: [
        'Introduction to Quantum World',
        'Wave-Particle Duality',
        'The Uncertainty Principle',
        'Quantum Entanglement',
        'Applications in Technology'
      ],
      testimonial: {
        text: "This book transformed how my daughter understands physics. The visual explanations finally made quantum mechanics click for her. She went from struggling to winning the state physics olympiad!",
        author: "Sarah K., Parent",
        rating: 5
      }
    },
    {
      id: '2',
      title: 'Advanced Calculus for Young Minds',
      subtitle: 'A Visual Journey Through Mathematical Concepts',
      author: 'Dr. Sarah Chen',
      coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=600&fit=crop&q=80',
      price: 14.99,
      originalPrice: 24.99,
      rating: 4.8,
      reviewCount: 156,
      badge: 'MOST POPULAR',
      gradeLevel: '9-12',
      description: 'Master calculus through innovative visual methods designed specifically for gifted learners. This free resource provides comprehensive coverage of differential and integral calculus.',
      features: [
        'Intuitive geometric interpretations',
        'Connections to physics and engineering',
        'Proof-based approach for deeper understanding',
        'Graphing calculator tutorials',
        'Practice problems with detailed solutions'
      ],
      chapters: [
        'Limits and Continuity',
        'Derivatives and Applications',
        'Integration Techniques',
        'Series and Sequences',
        'Multivariable Calculus'
      ],
      testimonial: {
        text: "As a homeschool parent, this free resource has been invaluable. My son completed it in 6 months and scored a 5 on the AP Calculus BC exam as a freshman!",
        author: "Michael T., Homeschool Educator",
        rating: 5
      }
    },
    {
      id: '3',
      title: 'Introduction to Machine Learning',
      subtitle: 'AI for the Next Generation',
      author: 'Dr. Alex Kumar',
      coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=600&fit=crop&q=80',
      price: 22.99,
      originalPrice: 32.99,
      rating: 4.9,
      reviewCount: 267,
      badge: 'NEW RELEASE',
      gradeLevel: '9-12',
      description: 'Learn the fundamentals of artificial intelligence and machine learning through hands-on Python projects. Perfect for gifted students interested in computer science.',
      features: [
        'Python programming from basics to advanced',
        'Neural networks explained visually',
        'Hands-on projects with real datasets',
        'Ethics and future of AI discussion',
        'Access to cloud computing resources'
      ],
      chapters: [
        'Python Programming Fundamentals',
        'Data Processing and Visualization',
        'Supervised Learning Algorithms',
        'Neural Networks and Deep Learning',
        'Real-World AI Applications'
      ],
      testimonial: {
        text: "My students built their own AI projects after using this book. It's perfectly paced for gifted learners and includes cutting-edge content not found in typical textbooks.",
        author: "Dr. Jennifer L., Computer Science Teacher",
        rating: 5
      }
    }
  ];

  const youngAuthors = [
    {
      name: 'Maya Patel',
      age: 16,
      bookTitle: 'The Mathematics of Music',
      bookCover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop&q=80',
      achievement: 'International Science Fair Winner',
      authorImage: 'https://ui-avatars.com/api/?name=Maya+Patel&background=8b5cf6&color=fff&size=400&bold=true',
      projectDescription: 'Maya discovered the mathematical patterns in classical Indian ragas and Western symphonies. Her book explores Fibonacci sequences in musical compositions and helps young musicians understand the mathematical foundations of harmony. She wrote this after winning the International Science Fair with her research on frequency ratios.',
      subjects: ['Mathematics', 'Music Theory', 'Physics'],
      gradeLevel: '9-12',
    },
    {
      name: 'Alex Johnson',
      age: 14,
      bookTitle: 'Coding for Climate Change',
      bookCover: 'https://images.unsplash.com/photo-1612969308146-066d55f37ccb?w=200&h=300&fit=crop&q=80',
      achievement: 'Young Innovator Award',
      authorImage: 'https://ui-avatars.com/api/?name=Alex+Rodriguez&background=10b981&color=fff&size=400&bold=true',
      projectDescription: "At just 14, Alex developed three apps that help families reduce their carbon footprint. This book teaches other young programmers how to create environmental monitoring systems using Python and Arduino. Alex's work has been recognized by NASA and featured in tech conferences worldwide.",
      subjects: ['Computer Science', 'Environmental Science', 'IoT'],
      gradeLevel: '7-12',
    },
    {
      name: 'Sophie Chen',
      age: 15,
      bookTitle: 'Quantum Computing Simplified',
      bookCover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&h=300&fit=crop&q=80',
      achievement: 'National Merit Scholar',
      authorImage: 'https://ui-avatars.com/api/?name=Sophie+Zhang&background=3b82f6&color=fff&size=400&bold=true',
      projectDescription: "Sophie started learning quantum mechanics at age 12 and built her first quantum circuit simulator at 14. Her book breaks down complex quantum computing concepts using visual analogies and hands-on experiments that can be done at home. She's currently working with IBM's quantum education team.",
      subjects: ['Quantum Physics', 'Computer Science', 'Mathematics'],
      gradeLevel: '10-12',
    },
  ];

  const nextBook = () => {
    setCurrentBook((prev) => (prev + 1) % featuredBooks.length);
  };

  const prevBook = () => {
    setCurrentBook((prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length);
  };

  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "For Gifted Minds",
      description: "Curated content specifically designed for high-IQ learners"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Advanced Learning",
      description: "Challenging materials that push beyond standard curricula"
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Expert Authors",
      description: "Written by educators specializing in gifted education"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Young Authors",
      description: "Platform for gifted children to publish their work"
    }
  ];

  const subjects = [
    { name: "Advanced Mathematics", count: 45, color: "from-blue-500 to-purple-500" },
    { name: "Quantum Physics", count: 32, color: "from-purple-500 to-pink-500" },
    { name: "Creative Writing", count: 28, color: "from-pink-500 to-red-500" },
    { name: "Computer Science", count: 38, color: "from-green-500 to-blue-500" },
    { name: "Philosophy", count: 24, color: "from-yellow-500 to-orange-500" },
    { name: "Advanced Chemistry", count: 30, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <HiSparkles className="text-3xl text-slate-900" />
              <h1 className="text-2xl font-bold">
                <span className="gradient-text">Medha</span>
                <span className="text-gray-800"> Publish</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/catalog" className="text-gray-700 hover:text-slate-900 transition font-medium">Catalog</a>
              <a href="#subjects" className="text-gray-700 hover:text-slate-900 transition font-medium">Subjects</a>
              <a href="#young-authors" className="text-gray-700 hover:text-slate-900 transition font-medium">Young Authors</a>
              <a href="#about" className="text-gray-700 hover:text-slate-900 transition font-medium">About</a>
              <a href="/login" className="btn-primary text-sm">Sign In</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Nurturing Brilliance,</span>
              <br />
              <span className="text-gray-800">One Mind at a Time</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Digital educational materials designed for gifted learners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/catalog" className="btn-primary">
                <FaBook className="inline mr-2" />
                Browse Our Catalog
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Book Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Featured <span className="text-slate-400">This Week</span>
            </h2>
            <p className="text-slate-300 text-lg">Exceptional educational materials for gifted learners</p>
          </div>

          <div className="relative">
            {/* Main Featured Book Display */}
            <motion.div 
              key={currentBook}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left: Book Cover and Basic Info */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative group max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                  <img
                    src={featuredBooks[currentBook].coverImage}
                    alt={featuredBooks[currentBook].title}
                    className="relative w-full h-[400px] object-cover rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform"
                  />
                  {featuredBooks[currentBook].badge && featuredBooks[currentBook].badge !== 'FREE WITH WATERMARK' && featuredBooks[currentBook].badge !== 'NEW RELEASE - FREE' && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                      {featuredBooks[currentBook].badge}
                    </div>
                  )}
                </div>
                
              </div>

              {/* Right: Book Details - Simplified */}
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">{featuredBooks[currentBook].title}</h3>
                <p className="text-xl text-slate-400 mb-4">{featuredBooks[currentBook].subtitle}</p>
                <p className="text-lg mb-4">by <span className="text-slate-300">{featuredBooks[currentBook].author}</span></p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(featuredBooks[currentBook].rating) ? '' : 'text-slate-600'} />
                    ))}
                  </div>
                  <span className="ml-2 text-slate-300">{featuredBooks[currentBook].rating} ({featuredBooks[currentBook].reviewCount} reviews)</span>
                  <span className="ml-4 text-slate-400">• Grade {featuredBooks[currentBook].gradeLevel}</span>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 mb-8 leading-relaxed text-lg">{featuredBooks[currentBook].description}</p>

                {/* Price and CTA */}
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-white">${featuredBooks[currentBook].price}</span>
                  <Link href={`/book/${featuredBooks[currentBook].id}`} className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm">
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={prevBook}
                className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition"
              >
                <FaChevronLeft />
              </button>
              <div className="flex space-x-2">
                {featuredBooks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBook(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentBook ? 'bg-white w-8' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextBook}
                className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/catalog" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:shadow-lg transition-all duration-300 inline-block">
              Browse All Books
            </Link>
          </div>
        </div>
      </section>



      {/* Young Authors Section */}
      <section id="young-authors" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Young Authors</span>
            </h2>
            <p className="text-gray-600 text-lg">Brilliant young minds sharing their knowledge with the world</p>
          </div>

          <div className="space-y-16">
            {youngAuthors.map((author, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Author Image and Book */}
                <div className={`flex items-center justify-center gap-6 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}>
                  <div className="relative">
                    {/* Author Photo */}
                    <img
                      src={author.authorImage}
                      alt={author.name}
                      className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-slate-100"
                    />
                    {/* Age Badge */}
                    <div className="absolute bottom-0 right-0 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Age {author.age}
                    </div>
                  </div>
                  {/* Book Cover */}
                  <div className="relative">
                    <img
                      src={author.bookCover}
                      alt={author.bookTitle}
                      className="w-32 h-48 rounded-lg shadow-xl object-cover"
                    />
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-slate-900 p-2 rounded-full">
                      <FaTrophy className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Author Info and Project Description */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{author.name}</h3>
                    <p className="text-lg font-semibold text-slate-700 mb-1">{author.bookTitle}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <FaAward className="text-yellow-500" />
                      <span className="text-sm text-gray-600">{author.achievement}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {author.projectDescription}
                  </p>

                  {/* Subject Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {author.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Grade {author.gradeLevel}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/book/${author.name.toLowerCase().replace(' ', '-')}`}
                    className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition"
                  >
                    Read {author.name.split(' ')[0]}'s Book
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Empowering Young Voices
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Young Authors Program provides gifted children aged 10-18 with the opportunity to publish their educational materials digitally. We believe in nurturing the next generation of thought leaders and educators.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <FaCheck className="text-slate-700 mt-1 mr-2" />
                    Professional editorial support
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-slate-700 mt-1 mr-2" />
                    Digital publishing across multiple formats
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-slate-700 mt-1 mr-2" />
                    Marketing and promotion assistance
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-slate-700 mt-1 mr-2" />
                    Royalties on every sale
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-3xl font-bold text-slate-900 mb-2">50+</h4>
                  <p className="text-gray-600 mb-4">Young Authors Published</p>
                  <Link href="/submit" className="btn-primary">
                    Submit Your Manuscript
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Young Authors CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaStar className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-4">Young Authors Program</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-200">
              Are you a gifted young writer? Share your brilliance with the world. 
              We help talented youth publish their educational materials digitally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Submit Your Manuscript
              </button>
              <button className="bg-transparent border-2 border-slate-400 text-slate-100 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <HiSparkles className="text-3xl text-slate-400" />
                <h3 className="text-2xl font-bold">Medha Publish</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium digital educational materials for gifted learners. 
                Nurturing brilliance through advanced content designed for exceptional minds.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Catalog</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/catalog" className="hover:text-slate-300 transition">All Books</Link></li>
                <li><Link href="/catalog?free=true" className="hover:text-slate-300 transition">Free Books</Link></li>
                <li><Link href="/catalog?new=true" className="hover:text-slate-300 transition">New Releases</Link></li>
                <li><Link href="/homeschool-discounts" className="hover:text-slate-300 transition">Homeschool Discounts</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-slate-300 transition">Sample Downloads</a></li>
                <li><a href="#" className="hover:text-slate-300 transition">Reading Guides</a></li>
                <li><a href="#" className="hover:text-slate-300 transition">Parent Resources</a></li>
                <li><a href="#" className="hover:text-slate-300 transition">Teacher Tools</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/about" className="hover:text-slate-300 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-slate-300 transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-slate-300 transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get notified about new releases and exclusive offers for gifted learners.</p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500"
                />
                <button className="px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Medha Publish. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300 transition">Accessibility</a>
              <a href="#" className="hover:text-slate-300 transition">Sitemap</a>
              <a href="#" className="hover:text-slate-300 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}