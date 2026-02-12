'use client';

import React, { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const [status, setStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    info: {
      error: boolean;
      msg: string | null;
    };
  }>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [timestamp, setTimestamp] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.charAt(0).toUpperCase() + id.slice(1);
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    if (formRef.current) {
      formRef.current.action =
        'https://script.google.com/macros/s/AKfycby9N0McxiDDT5mhiW4Pm9ekmxiBk5kscyoHTWhi6KVjhDsFmCQAH7O2fiInHyNmv_fI0g/exec';
      formRef.current.target = 'hidden_iframe';
      formRef.current.submit();

      setTimeout(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Pesan berhasil dikirim!' }
        });

        setFormData({
          Name: '',
          Email: '',
          Message: ''
        });
        setTimestamp(new Date().toLocaleString()); // reset timestamp
      }, 1000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
      {status.info.msg && (
        <div
          className={`mb-4 p-4 rounded-md ${
            status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}
        >
          {status.info.msg}
        </div>
      )}

      {/* iframe tersembunyi untuk menerima response */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        ref={iframeRef}
        style={{ display: 'none' }}
        title="Form Submission"
      />

      <form ref={formRef} className="space-y-4" onSubmit={handleSubmit} method="POST">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="Message"
            rows={5}
            value={formData.Message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <input type="hidden" name="Timestamp" value={timestamp} />
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full px-6 py-3 ${
            status.submitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } text-white rounded-lg transition-colors`}
        >
          {status.submitting ? 'Mengirim...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;