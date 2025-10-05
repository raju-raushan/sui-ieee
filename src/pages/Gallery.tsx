
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Calendar, Users } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "AI Workshop Series 2024",
      date: "November 2024",
      category: "workshops",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      participants: 60,
      description: "Three-day intensive workshop on artificial intelligence and machine learning"
    },
    {
      id: 2,
      title: "IEEE Day Celebration 2023",
      date: "October 2023",
      category: "events",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      participants: 200,
      description: "Annual IEEE Day celebration with technical presentations and networking"
    },
    {
      id: 3,
      title: "Robotics Competition Highlights",
      date: "September 2024",
      category: "competitions",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      participants: 80,
      description: "Exciting moments from the inter-college robotics competition"
    },
    {
      id: 4,
      title: "Women in Engineering Seminar",
      date: "March 2024",
      category: "seminars",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=500&h=300&fit=crop",
      participants: 45,
      description: "Empowering women in engineering through mentorship and networking"
    },
    {
      id: 5,
      title: "Power Systems Workshop",
      date: "August 2024",
      category: "workshops",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      participants: 35,
      description: "Hands-on workshop on renewable energy systems and smart grids"
    },
    {
      id: 6,
      title: "Technical Paper Presentation Contest",
      date: "July 2024",
      category: "competitions",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      participants: 25,
      description: "Students presenting innovative research projects and technical solutions"
    },
    {
      id: 7,
      title: "Industry Expert Talk - 5G Technology",
      date: "June 2024",
      category: "seminars",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
      participants: 90,
      description: "Expert session on the future of 5G and wireless communication"
    },
    {
      id: 8,
      title: "Hackathon 2024 - Smart Cities",
      date: "May 2024",
      category: "events",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
      participants: 120,
      description: "48-hour hackathon focused on developing smart city solutions"
    },
    {
      id: 9,
      title: "Circuit Design Workshop",
      date: "April 2024",
      category: "workshops",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      participants: 40,
      description: "Practical workshop on analog and digital circuit design"
    }
  ];

  const categories = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "workshops", name: "Workshops", count: galleryItems.filter(item => item.category === "workshops").length },
    { id: "seminars", name: "Seminars", count: galleryItems.filter(item => item.category === "seminars").length },
    { id: "competitions", name: "Competitions", count: galleryItems.filter(item => item.category === "competitions").length },
    { id: "events", name: "Events", count: galleryItems.filter(item => item.category === "events").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of photos and videos from various events, workshops, seminars, and competitions
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{galleryItems.length}</div>
            <div className="text-gray-700">Total Items</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {galleryItems.filter(item => item.type === "image").length}
            </div>
            <div className="text-gray-700">Photos</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {galleryItems.filter(item => item.type === "video").length}
            </div>
            <div className="text-gray-700">Videos</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700">Events Covered</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-800">
                    {item.type === "image" ? "Photo" : "Video"}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{item.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Albums */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Featured Albums</h2>
          
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems.slice(0, 3).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems
                  .sort((a, b) => b.participants - a.participants)
                  .slice(0, 3)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-32 object-cover"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.participants} participants</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryItems
                  .filter(item => item.category === "competitions")
                  .slice(0, 3)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-32 object-cover"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 text-center">
          <CardContent className="p-8">
            <Image className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Share Your Photos</h3>
            <p className="text-gray-600 mb-6">
              Have photos or videos from our events? Share them with the community!
            </p>
            <Button size="lg">Submit Photos</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
