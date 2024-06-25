import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full body-font">
      <div className="container px-5 py-8 mx-auto justify-around flex items-center sm:flex-row flex-col">
        <>
          <a className="flex flex-col md:flex-row gap-2 title-font font-medium items-center md:justify-start justify-center text-white">
            <Image src={"/oonkoo_logo_b.svg"} height={50} width={50} alt="logo" />
            <span className="ml-3 text-xl">OonkoO</span>
          </a>
          <p className="text-sm text-primary sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200/20 sm:py-2 sm:mt-0 mt-4">
            © 2024 OonkoO
          </p>
        </>
        <>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-primary" href="https://www.facebook.com/OonkoOHQ" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-primary" href="https://x.com/OonkoOHQ" target="_blank" rel="noopener noreferrer">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 50 50"
            >
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
            </a>
            <a className="ml-3 text-primary" href="https://www.instagram.com/OonkoOHQ/" target="_blank" rel="noopener noreferrer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-primary" href="https://www.linkedin.com/company/oonkoo/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </>
      </div>
    </footer>
  );
};

export default Footer;
