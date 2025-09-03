"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaStar, FaBook, FaFilePdf, FaHeadphones, FaPlay, 
  FaShoppingCart, FaLock, FaDownload, FaChartLine,
  FaGraduationCap, FaCheckCircle, FaEye, FaShareAlt,
  FaHeart, FaQuoteLeft
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

// Mock data - in production this would come from API/database
const bookData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Quantum Physics Made Simple',
    subtitle: 'Understanding the Universe at Its Smallest Scale',
    author: 'Prof. James Mitchell',
    authorBio: 'Professor of Physics at MIT with 20 years of experience in quantum mechanics education.',
    description: 'A comprehensive introduction to quantum mechanics designed specifically for exceptional young scientists. This book breaks down complex quantum concepts into digestible, visual explanations that maintain scientific rigor while being accessible to gifted high school students.',
    longDescription: `This groundbreaking textbook revolutionizes how quantum physics is taught to advanced students. Through innovative visual representations and intuitive explanations, readers will explore:

    • Wave-particle duality and the double-slit experiment
    • Quantum entanglement and spooky action at a distance
    • Heisenberg's uncertainty principle
    • Schrödinger's equation and wave functions
    • Quantum tunneling and its applications
    • Introduction to quantum computing

    Each chapter includes challenging problem sets, real-world applications, and connections to cutting-edge research. Perfect for gifted students preparing for physics olympiads or early university courses.`,
    coverImage: 'https://via.placeholder.com/400x600/764ba2/ffffff?text=Quantum+Physics',
    price: 19.99,
    originalPrice: 29.99,
    isFree: false,
    rating: 4.9,
    reviewCount: 203,
    gradeLevel: '10-12',
    subject: 'Physics',
    difficulty: 'Advanced',
    ageGroup: '15-18',
    pageCount: 312,
    language: 'English',
    isbn: '978-1234567890',
    publishDate: '2024-01-15',
    formats: {
      pdf: true,
      epub: true,
      audiobook: true,
      video: true,
    },
    features: [
      'Interactive simulations',
      'Video lectures included',
      'Practice problems with solutions',
      'Quarterly updates with new content',
    ],
    tableOfContents: [
      'Introduction to Quantum World',
      'Mathematical Foundations',
      'Wave-Particle Duality',
      'The Uncertainty Principle',
      'Quantum Entanglement',
      'Applications in Technology',
      'Future of Quantum Computing',
    ],
    samplePages: [1, 2, 3, 15, 16, 17],
    reviews: [
      {
        id: '1',
        userName: 'Sarah K.',
        rating: 5,
        date: '2024-02-15',
        comment: 'Perfect for my advanced physics class. The explanations are clear and the problems are challenging.',
        verified: true,
      },
      {
        id: '2',
        userName: 'Dr. Michael Chen',
        rating: 5,
        date: '2024-01-20',
        comment: 'As an educator, I highly recommend this book for gifted students. It bridges the gap between high school and university physics beautifully.',
        verified: true,
      },
    ],
    relatedBooks: ['2', '3', '4'],
  },
};

export default function BookDetail() {
  const params = useParams();
  const router = useRouter();
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [showPreview, setShowPreview] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const book = bookData[params.id as string] || bookData['1'];

  const handlePurchase = () => {
    // In production, this would integrate with Stripe
    router.push('/checkout');
  };

  const handleFreeDownload = () => {
    // In production, this would check authentication and trigger download
    router.push('/register');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white backdrop-blur-md border-b border-gray-200">
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
              <Link href="/catalog" className="text-gray-700 hover:text-blue-900 transition font-medium">Catalog</Link>
              <Link href="/login" className="btn-primary text-sm">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-blue-900">Catalog</Link>
          <span>/</span>
          <span className="text-gray-900">{book.subject}</span>
        </div>
      </div>

      {/* Book Details */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Book Cover & Preview */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <div className="relative bg-gray-100 rounded-xl p-8 shadow-xl">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  {!book.isFree && book.originalPrice > book.price && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{Math.round((1 - book.price / book.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                {/* Format Selection */}
                <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
                  <h3 className="font-semibold mb-3">Available Formats:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {book.formats.pdf && (
                      <button
                        onClick={() => setSelectedFormat('pdf')}
                        className={`p-3 rounded-lg border-2 transition ${
                          selectedFormat === 'pdf'
                            ? 'border-blue-900 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <FaFilePdf className="text-red-500 mx-auto mb-1" />
                        <span className="text-xs">PDF</span>
                      </button>
                    )}
                    {book.formats.epub && (
                      <button
                        onClick={() => setSelectedFormat('epub')}
                        className={`p-3 rounded-lg border-2 transition ${
                          selectedFormat === 'epub'
                            ? 'border-blue-900 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <FaBook className="text-blue-500 mx-auto mb-1" />
                        <span className="text-xs">EPUB</span>
                      </button>
                    )}
                    {book.formats.audiobook && (
                      <button
                        onClick={() => setSelectedFormat('audiobook')}
                        className={`p-3 rounded-lg border-2 transition ${
                          selectedFormat === 'audiobook'
                            ? 'border-blue-900 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <FaHeadphones className="text-green-500 mx-auto mb-1" />
                        <span className="text-xs">Audio</span>
                      </button>
                    )}
                    {book.formats.video && (
                      <button
                        className="p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition"
                      >
                        <FaPlay className="text-purple-500 mx-auto mb-1" />
                        <span className="text-xs">Video</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Preview Button */}
                <button
                  onClick={() => setShowPreview(true)}
                  className="w-full mt-4 bg-white border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition flex items-center justify-center"
                >
                  <FaEye className="mr-2" />
                  Preview Sample Pages
                </button>
              </motion.div>
            </div>

            {/* Right Column - Book Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {/* Title and Author */}
                <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                {book.subtitle && (
                  <h2 className="text-xl text-gray-600 mb-4">{book.subtitle}</h2>
                )}
                <p className="text-lg text-gray-700 mb-4">
                  by <span className="font-semibold text-blue-900">{book.author}</span>
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(book.rating) ? '' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {book.rating} ({book.reviewCount} reviews)
                  </span>
                </div>

                {/* Price and Purchase */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                  {book.isFree ? (
                    <div>
                      <p className="text-3xl font-bold text-green-600 mb-4">FREE</p>
                      <button
                        onClick={handleFreeDownload}
                        className="w-full btn-primary flex items-center justify-center"
                      >
                        <FaDownload className="mr-2" />
                        Download Free (with watermark)
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-blue-900">${book.price}</span>
                        {book.originalPrice > book.price && (
                          <span className="ml-2 text-lg text-gray-500 line-through">
                            ${book.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3 mb-4">
                        <button
                          onClick={handlePurchase}
                          className="flex-1 btn-primary flex items-center justify-center"
                        >
                          <FaShoppingCart className="mr-2" />
                          Buy Now
                        </button>
                        <button
                          onClick={() => setIsWishlisted(!isWishlisted)}
                          className={`p-3 rounded-lg border-2 transition ${
                            isWishlisted
                              ? 'bg-red-50 border-red-500 text-red-500'
                              : 'bg-white border-gray-300 hover:border-blue-600'
                          }`}
                        >
                          <FaHeart className={isWishlisted ? 'text-red-500' : ''} />
                        </button>
                        <button className="p-3 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-600 transition">
                          <FaShareAlt />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Book Meta */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <FaGraduationCap className="text-blue-900 mb-1" />
                    <p className="text-xs text-gray-600">Grade Level</p>
                    <p className="font-semibold">{book.gradeLevel}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <FaChartLine className="text-blue-900 mb-1" />
                    <p className="text-xs text-gray-600">Difficulty</p>
                    <p className="font-semibold">{book.difficulty}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <FaBook className="text-blue-900 mb-1" />
                    <p className="text-xs text-gray-600">Pages</p>
                    <p className="font-semibold">{book.pageCount}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <FaStar className="text-blue-900 mb-1" />
                    <p className="text-xs text-gray-600">Subject</p>
                    <p className="font-semibold">{book.subject}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">About This Book</h3>
                  <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {book.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-blue-600 mt-1 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Author Bio */}
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h3 className="font-semibold mb-2">About the Author</h3>
                  <p className="text-gray-600 text-sm">{book.authorBio}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  <button className="pb-3 border-b-2 border-blue-900 text-blue-900 font-semibold">
                    Description
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-blue-900 transition">
                    Table of Contents
                  </button>
                  <button className="pb-3 text-gray-600 hover:text-blue-900 transition">
                    Reviews ({book.reviewCount})
                  </button>
                </div>
              </div>

              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700">
                  {book.longDescription}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
            <div className="space-y-4">
              {book.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center">
                        <span className="font-semibold">{review.userName}</span>
                        {review.verified && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <div className="flex text-yellow-400 text-sm mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < review.rating ? '' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}