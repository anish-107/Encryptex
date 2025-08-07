import React from "react";
import {
  Twitter,
  Instagram,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FacebookIcon size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            <GithubIcon size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Encryptex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
