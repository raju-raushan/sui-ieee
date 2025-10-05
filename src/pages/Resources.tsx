
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Users, Calendar, Search } from "lucide-react";

export default function Resources() {
  const studyMaterials = [
    {
      title: "Data Structures and Algorithms",
      category: "Computer Science",
      type: "PDF",
      size: "15 MB",
      downloads: 245,
      description: "Comprehensive guide covering all major data structures and algorithms with examples and practice problems."
    },
    {
      title: "Circuit Analysis and Design",
      category: "Electronics",
      type: "PDF",
      size: "22 MB",
      downloads: 189,
      description: "Complete material for analog and digital circuit analysis with SPICE simulations and practical examples."
    },
    {
      title: "Machine Learning Fundamentals",
      category: "Artificial Intelligence",
      type: "Video Course",
      size: "2.1 GB",
      downloads: 356,
      description: "Video lecture series covering ML basics, algorithms, and hands-on Python implementations."
    },
    {
      title: "Power Systems Protection",
      category: "Electrical Engineering",
      type: "PDF",
      size: "18 MB",
      downloads: 167,
      description: "Advanced concepts in power system protection, relay coordination, and fault analysis."
    }
  ];

  const projectRepositories = [
    {
      title: "IoT Smart Home System",
      category: "Internet of Things",
      tech: ["Arduino", "ESP32", "Node.js", "React"],
      contributors: 8,
      stars: 45,
      description: "Complete IoT solution for home automation with mobile app and web dashboard."
    },
    {
      title: "AI Chatbot for Student Support",
      category: "Artificial Intelligence",
      tech: ["Python", "TensorFlow", "Flask", "NLP"],
      contributors: 12,
      stars: 67,
      description: "Intelligent chatbot to assist students with academic queries and campus information."
    },
    {
      title: "Solar Panel Monitoring System",
      category: "Renewable Energy",
      tech: ["Raspberry Pi", "Python", "MongoDB", "Dashboard"],
      contributors: 6,
      stars: 34,
      description: "Real-time monitoring and analytics system for solar panel performance optimization."
    },
    {
      title: "Blockchain Voting System",
      category: "Blockchain",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      contributors: 10,
      stars: 78,
      description: "Secure and transparent voting system built on blockchain technology."
    }
  ];

  const membershipGuidelines = [
    {
      title: "How to Become an IEEE Member",
      type: "Guide",
      lastUpdated: "Nov 2024",
      description: "Step-by-step process to join IEEE as a student member with benefits and requirements."
    },
    {
      title: "Chapter Participation Rules",
      type: "Policy",
      lastUpdated: "Oct 2024",
      description: "Guidelines for active participation in various technical chapters and societies."
    },
    {
      title: "Event Organization Handbook",
      type: "Manual",
      lastUpdated: "Sep 2024",
      description: "Complete guide for organizing technical events, workshops, and competitions."
    },
    {
      title: "Research Publication Guidelines",
      type: "Guide",
      lastUpdated: "Nov 2024",
      description: "Best practices for publishing research papers in IEEE conferences and journals."
    }
  ];

  const usefulLinks = [
    {
      category: "IEEE Official",
      links: [
        { name: "IEEE Main Website", url: "https://www.ieee.org" },
        { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org" },
        { name: "IEEE Student Branch Resources", url: "https://students.ieee.org" },
        { name: "IEEE Central India Region", url: "https://ieer10.org" }
      ]
    },
    {
      category: "Technical Resources",
      links: [
        { name: "GitHub Student Pack", url: "https://education.github.com/pack" },
        { name: "Coursera for Students", url: "https://www.coursera.org/students" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
        { name: "Khan Academy", url: "https://www.khanacademy.org" }
      ]
    },
    {
      category: "Career Development",
      links: [
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning" },
        { name: "HackerRank", url: "https://www.hackerrank.com" },
        { name: "LeetCode", url: "https://leetcode.com" },
        { name: "IEEE Job Site", url: "https://careers.ieee.org" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access study materials, project repositories, guidelines, and useful links to support your academic and professional journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="study-materials" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="study-materials">Study Materials</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
            <TabsTrigger value="links">Useful Links</TabsTrigger>
          </TabsList>

          {/* Study Materials */}
          <TabsContent value="study-materials" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {studyMaterials.map((material, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{material.category}</Badge>
                      <Badge variant="outline">{material.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                      <span>Size: {material.size}</span>
                      <span>{material.downloads} downloads</span>
                    </div>
                    <Button className="w-full">Download</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Project Repositories */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectRepositories.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>⭐ {project.stars}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{project.contributors} contributors</span>
                        </div>
                        <Button size="sm">View Repository</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Guidelines */}
          <TabsContent value="guidelines" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {membershipGuidelines.map((guideline, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{guideline.type}</Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{guideline.lastUpdated}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{guideline.title}</CardTitle>
                    <CardDescription>{guideline.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Read Guidelines</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Useful Links */}
          <TabsContent value="links" className="space-y-8">
            {usefulLinks.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Link className="h-5 w-5 text-blue-600" />
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                          {link.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Resource Request */}
        <Card className="mt-12 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Can't Find What You're Looking For?</CardTitle>
            <CardDescription>
              Request specific resources or suggest new materials that would benefit the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg">Request Resource</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
