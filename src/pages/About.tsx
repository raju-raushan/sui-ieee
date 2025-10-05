
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Calendar } from "lucide-react";

export default function About() {
  const executiveCommittee = [
    {
      name: "Arjun Sharma",
      position: "Chairperson",
      email: "chair@ieeesbsage.org",
      description: "Final year Computer Science student passionate about AI and machine learning"
    },
    {
      name: "Priya Patel",
      position: "Vice Chairperson",
      email: "vice-chair@ieeesbsage.org",
      description: "Electronics Engineering student specializing in embedded systems"
    },
    {
      name: "Rohan Kumar",
      position: "Secretary",
      email: "secretary@ieeesbsage.org",
      description: "Information Technology student with expertise in web development"
    },
    {
      name: "Sneha Gupta",
      position: "Treasurer",
      email: "treasurer@ieeesbsage.org",
      description: "Mechanical Engineering student interested in automation and robotics"
    }
  ];

  const facultyAdvisors = [
    {
      name: "Dr. Rajesh Verma",
      position: "Faculty Advisor",
      department: "Computer Science & Engineering",
      email: "rajesh.verma@sageuniversity.edu.in"
    },
    {
      name: "Dr. Sunita Agarwal",
      position: "Co-Faculty Advisor",
      department: "Electronics & Communication",
      email: "sunita.agarwal@sageuniversity.edu.in"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About IEEE SB SAGE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students through technology, innovation, and professional development since 2019
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To foster technological innovation, advance the engineering profession, and promote the development 
                of students through high-quality educational programs, professional networking opportunities, and 
                hands-on technical experiences that prepare them for successful careers in engineering and technology.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To be the leading student organization that bridges academia and industry, creating a vibrant 
                community of innovative engineers who contribute meaningfully to technological advancement and 
                societal development, while upholding the highest standards of professional excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700">
              <p>
                The IEEE Student Branch at SAGE University Indore was established in 2019 with the vision of 
                creating a platform for students to explore, learn, and contribute to the field of engineering 
                and technology. Starting with just 25 enthusiastic members, we have grown into one of the most 
                active student branches in Central India.
              </p>
              <p>
                Over the years, we have organized numerous technical workshops, seminars, and competitions that 
                have benefited thousands of students. Our branch has consistently been recognized for its 
                outstanding contributions to student development and community service.
              </p>
              <p>
                Today, we proudly serve over 200 active members across various engineering disciplines, fostering 
                innovation, collaboration, and professional growth among the next generation of engineers and 
                technology leaders.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Advisors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyAdvisors.map((advisor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{advisor.name}</CardTitle>
                      <Badge variant="secondary">{advisor.position}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{advisor.department}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{advisor.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Executive Committee 2024-25</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveCommittee.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-semibold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className="w-fit mx-auto">{member.position}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">{member.description}</CardDescription>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-xs">{member.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Awards & Recognition</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Best Student Branch Award - Central India Region (2024)</li>
                  <li>• Outstanding Membership Development Award (2023)</li>
                  <li>• Excellence in Student Activities Recognition (2022)</li>
                  <li>• Community Service Award for Education Outreach (2023)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Impact & Numbers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 50+ technical events organized</li>
                  <li>• 5000+ students reached through outreach programs</li>
                  <li>• 25+ industry collaborations established</li>
                  <li>• 100+ research projects mentored</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
