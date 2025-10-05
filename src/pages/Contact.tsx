
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Calendar, Users } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ieee@sageuniversity.edu.in",
      description: "General inquiries and information"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "SAGE University Indore",
      description: "Kailod Kartal, Indore, MP 452020"
    },
    {
      icon: Calendar,
      title: "Meetings",
      details: "Every Friday, 4:00 PM",
      description: "Room 201, Computer Science Block"
    },
    {
      icon: Users,
      title: "Membership",
      details: "200+ Active Members",
      description: "Open to all engineering students"
    }
  ];

  const teamContacts = [
    {
      name: "Arjun Sharma",
      position: "Chairperson",
      email: "chair@ieeesbsage.org",
      responsibilities: ["Strategic planning", "External relations", "Overall coordination"]
    },
    {
      name: "Priya Patel",
      position: "Vice Chairperson",
      email: "vice-chair@ieeesbsage.org",
      responsibilities: ["Event coordination", "Chapter management", "Technical activities"]
    },
    {
      name: "Rohan Kumar",
      position: "Secretary",
      email: "secretary@ieeesbsage.org",
      responsibilities: ["Documentation", "Communications", "Meeting coordination"]
    },
    {
      name: "Sneha Gupta",
      position: "Treasurer",
      email: "treasurer@ieeesbsage.org",
      responsibilities: ["Financial management", "Budget planning", "Expense tracking"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for inquiries, suggestions, or to learn more about joining our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <info.icon className="h-6 w-6 text-blue-600" />
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                      </div>
                      <p className="font-medium text-gray-900 mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team Contacts */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Team</h3>
              <div className="space-y-4">
                {teamContacts.map((member, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-gray-900">{member.name}</h4>
                          <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            <Mail className="h-4 w-4" />
                            <span>{member.email}</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Responsibilities: </span>
                            {member.responsibilities.join(", ")}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <CardDescription>SAGE University Indore Campus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">SAGE University Indore</p>
                    <p className="text-sm">Kailod Kartal, Indore, MP 452020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                      Student ID (if applicable)
                    </label>
                    <Input
                      type="text"
                      id="studentId"
                      placeholder="Your student ID"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by IEEE SB SAGE regarding my inquiry *
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">How can I become a member?</h4>
                  <p className="text-gray-600">
                    Any student enrolled at SAGE University can join IEEE SB. Contact us via email or attend our weekly meetings for more information.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Are there membership fees?</h4>
                  <p className="text-gray-600">
                    IEEE student membership has nominal annual fees. Local chapter participation is free for all university students.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">What events do you organize?</h4>
                  <p className="text-gray-600">
                    We organize technical workshops, seminars, competitions, hackathons, and networking events throughout the academic year.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Can non-engineering students join?</h4>
                  <p className="text-gray-600">
                    While our focus is on engineering and technology, students from related fields are welcome to participate in our events and activities.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
