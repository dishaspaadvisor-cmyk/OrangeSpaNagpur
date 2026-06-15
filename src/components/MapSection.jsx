"use client";

import { MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";

export default function MapSection() {
  return (
    <section className="bg-[#FFF7ED] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium uppercase tracking-[0.2em]"
            style={{
              backgroundColor: `${SITE.brand}15`,
              color: SITE.brand,
            }}
          >
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Visit Orange Spa Nagpur
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Conveniently located in the heart of Nagpur for a premium
            spa and wellness experience.
          </p>
        </div>

        {/* Map Card */}
        <div
          className="overflow-hidden rounded-[32px] bg-white shadow-xl"
          style={{
            border: `1px solid ${SITE.brand}20`,
          }}
        >
          {/* Address Bar */}
          <div className="flex flex-col gap-4 border-b border-slate-100 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${SITE.brand}15`,
                }}
              >
                <MapPin
                  size={24}
                  style={{ color: SITE.brand }}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Orange Spa Nagpur
                </h3>

                <p className="mt-1 text-slate-600">
                  Shirish Building, 16, S Ambazari Rd,
                  Laxminagar, Nagpur,
                  Maharashtra 440022
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Shirish+Building+16+S+Ambazari+Road+Laxminagar+Nagpur+Maharashtra+440022"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
              style={{
                backgroundColor: SITE.brand,
              }}
            >
              Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="h-[350px] md:h-[500px]">
            <iframe
              title="Orange Spa Nagpur Location"
              src="https://maps.google.com/maps?q=Shirish%20Building%2C%2016%2C%20S%20Ambazari%20Rd%2C%20Laxminagar%2C%20Nagpur%2C%20Maharashtra%20440022&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}