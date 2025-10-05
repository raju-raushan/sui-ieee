"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for inquiries, suggestions, or to learn more
            about joining our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <Card className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Our Location
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  SAGE University Indore Campus
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-900 h-64 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                  <div className="text-center text-gray-600 dark:text-gray-400">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <p>Interactive Map</p>
                    <p className="text-sm">SAGE University Indore</p>
                    <p className="text-sm">Kailod Kartal, Indore, MP 452020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 mt-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900 dark:text-white">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                        How can I become a member?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Any student enrolled at SAGE University can join IEEE
                        SB. Contact us via email or attend our weekly meetings
                        for more information.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                        Are there membership fees?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        IEEE student membership has nominal annual fees. Local
                        chapter participation is free for all university
                        students.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                        What events do you organize?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        We organize technical workshops, seminars, competitions,
                        hackathons, and networking events throughout the
                        academic year.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                        Can non-engineering students join?
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        While our focus is on engineering and technology,
                        students from related fields are welcome to participate
                        in our events and activities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="sticky top-24 bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        First Name *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="Your first name"
                        required
                        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Your last name"
                        required
                        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="studentId"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Student ID (if applicable)
                    </label>
                    <Input
                      type="text"
                      id="studentId"
                      placeholder="Your student ID"
                      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="events">Event Information</option>
                      <option value="chapters">Chapter Information</option>
                      <option value="collaboration">Partnership/Collaboration</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Please provide details about your inquiry..."
                      required
                      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1 accent-blue-600 dark:accent-blue-500"
                      required
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      I consent to being contacted by IEEE SB SAGE regarding my
                      inquiry *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
