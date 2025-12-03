"use client";

import Link from "next/link";
import { Instagram, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAF9F7] border-t border-[#EFE9E4] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 pb-20 border-b border-[#EFE9E4]/50">

          {/* BRAND + LOCATION */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1F1F1F]">
                NF Studio
              </h2>
              <p className="mt-4 text-[#5A3E36] font-light">
                Hair Therapy & Braiding
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-1 text-[#C2A878]/60 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[#5A3E36] font-light">
                    Leeds, UK
                  </p>
                  <a
                    href="https://maps.google.com/?q=Leeds+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#C2A878] hover:underline mt-2 inline-block"
                  >
                    View on maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 mt-1 text-[#C2A878]/60 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[#5A3E36] font-light">
                    By appointment only
                  </p>
                  <p className="text-sm text-[#5A3E36]/70 mt-1">
                    Monday to Saturday • 9am–6pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT + BOOKING */}
          <div className="md:col-span-4 space-y-10">
            <div className="space-y-6">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase">
                Contact
              </h3>

              <div className="space-y-4">

                {/* EMAIL */}
                <a
                  href="mailto:hello@narcisafilipe.com"
                  className="group flex items-center gap-3 text-[#5A3E36] hover:text-[#C2A878] transition-colors duration-300"
                >
                  <Mail
                    className="w-4 h-4 text-[#C2A878]/60 group-hover:text-[#C2A878] transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-light">hello@narcisafilipe.com</span>
                </a>

                {/* WhatsApp placeholder (inactive until UK number) */}
                <a
                  href="https://wa.me/+447737891334?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment.%20Can%20you%20assist%20me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block text-[#5A3E36] hover:text-[#C2A878] transition-colors duration-300 text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <Link
                href="https://wa.me/+447737891334?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment.%20Can%20you%20assist%20me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
              >
                Book an appointment →
              </Link>

            </div>
          </div>

          {/* SOCIAL + LINKS */}
          <div className="md:col-span-4 space-y-10">
            <div className="space-y-6">

              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase">
                Connect
              </h3>

              <Link
                href="https://www.instagram.com/narcisafilipe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[#5A3E36] hover:text-[#C2A878] transition-colors duration-300"
              >
                <Instagram
                  className="w-5 h-5 text-[#C2A878]/60 group-hover:text-[#C2A878] transition-colors"
                  aria-hidden="true"
                />
                <span className="text-lg font-light tracking-wide">@narcisafilipe</span>
              </Link>

              <p className="text-sm text-[#5A3E36]/70 font-light max-w-xs">
                Follow for studio moments, care insights and new work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-[#C2A878] font-light tracking-widest uppercase">
                Explore
              </h3>

              <nav className="flex flex-col gap-3">
                <Link
                  href="/hair-therapy"
                  className="text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
                >
                  Hair Therapy
                </Link>

                <Link
                  href="/braids"
                  className="text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
                >
                  Braids
                </Link>

                {/* <Link
                  href="/studio"
                  className="text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
                >
                  The Studio
                </Link>

                <Link
                  href="/contact"
                  className="text-[#5A3E36] hover:text-[#C2A878] font-light transition-colors duration-300"
                >
                  Contact
                </Link> */}
              </nav>
            </div>
          </div>
        </div>

        {/* COPYRIGHT AREA */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#5A3E36]/70 font-light">
              © {currentYear} NF Studio. All rights reserved.
            </p>
            <p className="text-xs text-[#A8A29E] font-light mt-2">
              Leeds, UK • By appointment only
            </p>
          </div>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-xs text-[#5A3E36]/60 hover:text-[#C2A878] font-light transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#5A3E36]/60 hover:text-[#C2A878] font-light transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cancellation"
              className="text-xs text-[#5A3E36]/60 hover:text-[#C2A878] font-light transition-colors duration-300"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
