
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "IEEE SB SAGE Wins Best Student Branch Award 2024",
      date: "December 1, 2024",
      category: "Achievement",
      summary: "Our student branch has been recognized as the Best Student Branch in Central India Region for outstanding contributions to student development and community service.",
      content: "We are thrilled to announce that IEEE Student Branch SAGE University Indore has been awarded the prestigious 'Best Student Branch Award 2024' by IEEE Central India Region. This recognition comes as a result of our consistent efforts in organizing high-quality technical events, maintaining active membership, and contributing significantly to the engineering community. The award ceremony was held virtually, and our Chairperson Arjun Sharma received the award on behalf of all members.",
      readTime: "3 min read",
      author: "IEEE SB SAGE Admin"
    },
    {
      id: 2,
      title: "Successful Completion of AI Workshop Series",
      date: "November 28, 2024",
      category: "Event Update",
      summary: "Our 3-day AI and Machine Learning workshop concluded with 60 participants gaining hands-on experience in modern AI technologies.",
      content: "The AI and Machine Learning Workshop Series, conducted from November 26-28, 2024, was a resounding success. Over 60 students participated in this comprehensive program covering fundamentals of artificial intelligence, machine learning algorithms, and practical implementation using Python and TensorFlow. The workshop featured expert instructors from industry and academia, hands-on coding sessions, and real-world project development. Participants developed their own ML models and presented innovative solutions to real-world problems.",
      readTime: "4 min read",
      author: "Computer Society Chapter"
    },
    {
      id: 3,
      title: "New Partnership with Tech Mahindra for Internship Program",
      date: "November 20, 2024",
      category: "Partnership",
      summary: "IEEE SB SAGE has partnered with Tech Mahindra to provide exclusive internship opportunities for our members in emerging technologies.",
      content: "We are excited to announce our new partnership with Tech Mahindra, a leading global technology company. This collaboration will provide our members with exclusive internship opportunities in areas such as artificial intelligence, cloud computing, cybersecurity, and digital transformation. The program includes mentorship from industry experts, real project experience, and potential full-time job opportunities for outstanding performers. Applications for the first batch of internships will open in January 2025.",
      readTime: "5 min read",
      author: "Career Development Team"
    },
    {
      id: 4,
      title: "Women in Engineering Chapter Launches Mentorship Program",
      date: "November 15, 2024",
      category: "Initiative",
      summary: "WIE chapter introduces a comprehensive mentorship program connecting female students with industry professionals.",
      content: "The Women in Engineering (WIE) chapter has launched an innovative mentorship program designed to support and empower female engineering students. The program pairs students with experienced professionals from various engineering fields, providing guidance on career development, technical skills, and leadership opportunities. The initiative includes monthly one-on-one mentoring sessions, group workshops, and networking events. Over 25 mentors from leading companies have volunteered to participate in this program.",
      readTime: "4 min read",
      author: "WIE Chapter"
    },
    {
      id: 5,
      title: "Research Paper Competition Results Announced",
      date: "November 10, 2024",
      category: "Competition",
      summary: "Results of the annual IEEE research paper competition have been announced with innovative projects from our members.",
      content: "The annual IEEE Research Paper Competition concluded with outstanding participation from students across various engineering disciplines. This year's competition received 45 submissions covering topics ranging from renewable energy and artificial intelligence to biomedical engineering and smart cities. The winning papers demonstrated innovative solutions to real-world problems and will be recommended for publication in IEEE conferences. Winners will receive cash prizes, certificates, and opportunities to present their work at regional IEEE events.",
      readTime: "3 min read",
      author: "Academic Committee"
    },
    {
      id: 6,
      title: "Upcoming IEEE Day Celebration 2024",
      date: "November 5, 2024",
      category: "Announcement",
      summary: "Join us for the annual IEEE Day celebration featuring technical presentations, poster sessions, and networking opportunities.",
      content: "IEEE Day 2024 will be celebrated on December 20th with a full day of exciting activities and learning opportunities. The event will feature keynote speeches from industry leaders, technical paper presentations by students, poster sessions showcasing innovative projects, and networking opportunities with alumni and industry professionals. This year's theme is 'Advancing Technology for Humanity' and will highlight how engineers are solving global challenges through innovation and collaboration.",
      readTime: "3 min read",
      author: "Event Organizing Committee"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Achievement":
        return "bg-green-100 text-green-800";
      case "Event Update":
        return "bg-blue-100 text-blue-800";
      case "Partnership":
        return "bg-purple-100 text-purple-800";
      case "Initiative":
        return "bg-orange-100 text-orange-800";
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Announcement":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">News & Announcements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and announcements from IEEE Student Branch SAGE University Indore
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className={getCategoryColor(newsItems[0].category)}>
                  {newsItems[0].category}
                </Badge>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{newsItems[0].date}</span>
                  </div>
                  <span>{newsItems[0].readTime}</span>
                </div>
              </div>
              <CardTitle className="text-2xl">{newsItems[0].title}</CardTitle>
              <CardDescription className="text-lg">{newsItems[0].summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">{newsItems[0].content}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>By {newsItems[0].author}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
          <div className="space-y-6">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{item.content}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>By {item.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="mt-12 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Stay Updated</CardTitle>
            <CardDescription>
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
