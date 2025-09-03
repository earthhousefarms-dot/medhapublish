"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link');
      return;
    }

    verifyEmail(token);
  }, [searchParams]);

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Verification failed');
      }

      setStatus('success');
      setMessage('Your email has been verified successfully!');
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <HiSparkles className="text-3xl text-blue-900" />
            <h1 className="text-2xl font-bold">
              <span className="gradient-text">Medha</span>
              <span className="text-gray-800"> Publish</span>
            </h1>
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
        >
          {status === 'verifying' && (
            <>
              <FaSpinner className="text-5xl text-blue-900 mx-auto mb-4 animate-spin" />
              <h2 className="text-2xl font-bold mb-2">Verifying Email</h2>
              <p className="text-gray-600">Please wait while we verify your email address...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Email Verified!</h2>
              <p className="text-gray-600 mb-6">{message}</p>
              <p className="text-sm text-gray-500">Redirecting to login...</p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <FaTimesCircle className="text-4xl text-red-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Verification Failed</h2>
              <p className="text-gray-600 mb-6">{message}</p>
              <Link href="/register" className="btn-primary inline-block">
                Try Again
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FaSpinner className="text-5xl text-blue-900 animate-spin" />
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}