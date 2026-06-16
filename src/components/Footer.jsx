"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Accent Border */}
      <div className="h-1 w-full bg-[#F97519]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-[#F97519]">
              Orange Spa
            </h3>

            <p className="leading-8 text-gray-300">
              Premium spa and wellness experience in Laxminagar, Nagpur Maharastra.
              Enjoy luxury massage therapies, peaceful ambience, professional
              care, and complete relaxation.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://in.pinterest.com/orangespanagpur12/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-orange-700 hover:text-white"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://www.facebook.com/orangespa.nagpur/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300  hover:from-pink-500 hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/919371000458"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@Orangespa.nagpur"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#F97519]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-[#F97519]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#F97519]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-[#F97519]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-[#F97519]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="transition hover:text-[#F97519]"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#F97519]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#F97519]">
              Our Services
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>Full Body Massage</li>
              <li>Female to Male Massage</li>
              <li>Four Hand Massage</li>
              <li>Thai Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Hot Oil Massage</li>
              <li>Swedish Massage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-[#F97519]">
              Contact Info
            </h4>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#F97519]" />
                <p>
                 Shirish Building, 16, S Ambazari Rd, Laxminagar, Nagpur, Maharashtra 440022
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#F97519]" />
                <a
                  href="tel:+919371000458"
                  className="transition hover:text-[#F97519]"
                >
                  +91 7030747904
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#F97519]" />
                <a
                  href="mailto:delightspa.nagpur@gmail.com"
                  className="transition hover:text-[#F97519]"
                >
                  delightspa.nagpur@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-[#F97519]" />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Orange Spa. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <span className="transition hover:text-[#EC268F]">
              Here Relaxation Meets Luxury and Wellness
           </span>
          </div>
        </div>
      </div>
    </footer>
  );
}