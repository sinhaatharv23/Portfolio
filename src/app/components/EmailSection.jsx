'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus(`Failed: ${data.error.message || 'Something went wrong'}`);
      }
    } catch (err) {
      setStatus('Error sending message');
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 md:scroll-mt-96 grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sinhaatharv23" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github-icon.svg" alt="Github Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/sinhaatharva23/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin-icon.svg" alt="Linkedin Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
              placeholder="jacob@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
