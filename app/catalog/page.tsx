"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaBook, FaStar, FaDownload, FaPlay, FaFilePdf, 
  FaHeadphones, FaFilter, FaSearch, FaLock, FaBookOpen,
  FaGraduationCap, FaChartLine
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  gradeLevel: string;
  subject: string;
  difficulty: string;
  ageGroup: string;
  price: number;
  isFree: boolean;
  coverImage: string;
  rating: number;
  reviewCount: number;
  pageCount: number;
  hasAudiobook: boolean;
  hasVideo: boolean;
  featured: boolean;
}

// Mock data for demonstration
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'Advanced Calculus for Young Minds',
    subtitle: 'A Visual Journey Through Mathematical Concepts',
    description: 'Explore the fascinating world of calculus through visual representations and intuitive explanations designed for gifted learners.',
    author: 'Dr. Sarah Chen',
    gradeLevel: '9-12',
    subject: 'Mathematics',
    difficulty: 'Advanced',
    ageGroup: '14-18',
    price: 0,
    isFree: true,
    coverImage: 'https://via.placeholder.com/200x300/667eea/ffffff?text=Calculus',
    rating: 4.8,
    reviewCount: 156,
    pageCount: 245,
    hasAudiobook: true,
    hasVideo: true,
    featured: true,
  },
  {
    id: '2',
    title: 'Quantum Physics Made Simple',
    subtitle: 'Understanding the Universe at Its Smallest Scale',
    description: 'A comprehensive introduction to quantum mechanics for exceptional young scientists.',
    author: 'Prof. James Mitchell',
    gradeLevel: '10-12',
    subject: 'Physics',
    difficulty: 'Advanced',
    ageGroup: '15-18',
    price: 19.99,
    isFree: false,
    coverImage: 'https://via.placeholder.com/200x300/764ba2/ffffff?text=Quantum',
    rating: 4.9,
    reviewCount: 203,
    pageCount: 312,
    hasAudiobook: true,
    hasVideo: true,
    featured: true,
  },
  {
    id: '3',
    title: 'Creative Writing Workshop',
    subtitle: 'Unleashing Your Literary Genius',
    description: 'Master the art of storytelling with advanced techniques for gifted young writers.',
    author: 'Emma Thompson',
    gradeLevel: '7-12',
    subject: 'English',
    difficulty: 'Intermediate',
    ageGroup: '12-18',
    price: 14.99,
    isFree: false,
    coverImage: 'https://via.placeholder.com/200x300/f093fb/ffffff?text=Writing',
    rating: 4.7,
    reviewCount: 89,
    pageCount: 198,
    hasAudiobook: false,
    hasVideo: true,
    featured: false,
  },
  {
    id: '4',
    title: 'Introduction to Machine Learning',
    subtitle: 'AI for the Next Generation',
    description: 'Learn the fundamentals of machine learning and artificial intelligence through hands-on projects.',
    author: 'Dr. Alex Kumar',
    gradeLevel: '9-12',
    subject: 'Computer Science',
    difficulty: 'Advanced',
    ageGroup: '14-18',
    price: 0,
    isFree: true,
    coverImage: 'https://via.placeholder.com/200x300/4facfe/ffffff?text=ML',
    rating: 4.9,
    reviewCount: 267,
    pageCount: 380,
    hasAudiobook: true,
    hasVideo: true,
    featured: true,
  },
  {
    id: '5',
    title: 'Philosophy for Young Thinkers',
    subtitle: 'Big Questions, Deep Thoughts',
    description: 'Explore fundamental philosophical concepts and develop critical thinking skills.',
    author: 'Dr. Maria Rodriguez',
    gradeLevel: '8-12',
    subject: 'Philosophy',
    difficulty: 'Intermediate',
    ageGroup: '13-18',
    price: 12.99,
    isFree: false,
    coverImage: 'https://via.placeholder.com/200x300/43e97b/ffffff?text=Philosophy',
    rating: 4.6,
    reviewCount: 134,
    pageCount: 225,
    hasAudiobook: true,
    hasVideo: false,
    featured: false,
  },
  {
    id: '6',
    title: 'Organic Chemistry Mastery',
    subtitle: 'From Molecules to Life',
    description: 'A comprehensive guide to organic chemistry for advanced high school students.',
    author: 'Prof. Linda White',
    gradeLevel: '11-12',
    subject: 'Chemistry',
    difficulty: 'Advanced',
    ageGroup: '16-18',
    price: 24.99,
    isFree: false,
    coverImage: 'https://via.placeholder.com/200x300/ff6b6b/ffffff?text=Chemistry',
    rating: 4.8,
    reviewCount: 178,
    pageCount: 420,
    hasAudiobook: false,
    hasVideo: true,
    featured: false,
  },
];

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English', 'Philosophy'];
const gradeLevels = ['All', 'K-6', '7-8', '9-10', '11-12'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function Catalog() {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    filterAndSortBooks();
  }, [searchTerm, selectedSubject, selectedGrade, selectedDifficulty, showFreeOnly, sortBy]);

  const filterAndSortBooks = () => {
    let filtered = [...books];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Subject filter
    if (selectedSubject !== 'All') {
      filtered = filtered.filter(book => book.subject === selectedSubject);
    }

    // Grade filter
    if (selectedGrade !== 'All') {
      filtered = filtered.filter(book => book.gradeLevel.includes(selectedGrade));
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(book => book.difficulty === selectedDifficulty);
    }

    // Free books filter
    if (showFreeOnly) {
      filtered = filtered.filter(book => book.isFree);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return 0; // Would use creation date in real app
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <HiSparkles className="text-3xl text-blue-900" />
              <h1 className="text-2xl font-bold">
                <span className="gradient-text">Medha</span>
                <span className="text-gray-800"> Publish</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-900 transition font-medium">Home</Link>
              <Link href="#" className="text-blue-900 font-semibold">Catalog</Link>
              <Link href="/submit" className="text-gray-700 hover:text-blue-900 transition font-medium">Submit</Link>
              <Link href="/login" className="btn-primary text-sm">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Explore Our <span className="gradient-text">Digital Library</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Advanced educational materials for gifted learners
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search books, authors, or subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            >
              {gradeLevels.map(grade => (
                <option key={grade} value={grade}>Grade: {grade}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <label className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={showFreeOnly}
                onChange={(e) => setShowFreeOnly(e.target.checked)}
                className="text-blue-600"
              />
              <span>Free Books Only</span>
            </label>
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-600 mb-4">
            Showing {filteredBooks.length} of {books.length} books
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
              >
                {/* Book Cover */}
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  {book.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                      FEATURED
                    </div>
                  )}
                  {book.isFree && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FREE
                    </div>
                  )}
                  
                  {/* Quick Actions (shown on hover) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                    <button className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition">
                      <FaBookOpen className="text-xl" />
                    </button>
                    {book.hasVideo && (
                      <button className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition">
                        <FaPlay className="text-xl" />
                      </button>
                    )}
                    {book.hasAudiobook && (
                      <button className="bg-white text-blue-900 p-3 rounded-full hover:scale-110 transition">
                        <FaHeadphones className="text-xl" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-2">{book.title}</h3>
                  {book.subtitle && (
                    <p className="text-sm text-gray-500 mb-2 line-clamp-1">{book.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center">
                      <FaGraduationCap className="mr-1" />
                      {book.gradeLevel}
                    </span>
                    <span className="flex items-center">
                      <FaChartLine className="mr-1" />
                      {book.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.floor(book.rating) ? '' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {book.rating} ({book.reviewCount})
                    </span>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      {book.isFree ? (
                        <span className="text-green-600 font-bold">FREE</span>
                      ) : (
                        <span className="text-2xl font-bold text-blue-900">${book.price}</span>
                      )}
                    </div>
                    <Link
                      href={`/book/${book.id}`}
                      className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 hover:shadow-lg transition"
                    >
                      View Details
                    </Link>
                  </div>

                  {/* Format Icons */}
                  <div className="flex items-center space-x-2 mt-3 pt-3 border-t">
                    <FaFilePdf className="text-red-500" title="PDF Available" />
                    <FaBook className="text-blue-500" title="EPUB Available" />
                    {book.hasAudiobook && (
                      <FaHeadphones className="text-green-500" title="Audiobook Available" />
                    )}
                    {book.hasVideo && (
                      <FaPlay className="text-blue-600" title="Video Content Available" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20">
              <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}