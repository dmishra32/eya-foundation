import React, { useState, useEffect } from "react";

const SocialMediaFeed = () => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const posts = [
    {
      name: "Priya Rao",
      platform: "facebook",
      comment: "Just witnessed the most beautiful blood donation drive organized by Eyaa Foundation. The youth volunteers were so passionate and professional. Made me believe in the power of community service again! 🩸❤️",
      avatar: "https://i.pravatar.cc/150?img=1",
      timeAgo: "2 hours ago",
      likes: 42,
      shares: 8,
      verified: true
    },
    {
      name: "Rohan Khanna",
      platform: "instagram",
      comment: "The energy at Eyaa Foundation's events is absolutely infectious! Volunteered at their education support program and saw kids' faces light up. This is what real change looks like. Keep inspiring us! 📚✨",
      avatar: "https://i.pravatar.cc/150?img=2",
      timeAgo: "5 hours ago",
      likes: 89,
      shares: 15,
      verified: false
    },
    {
      name: "Ananya Sharma",
      platform: "youtube",
      comment: "Watched their birthday celebration video and I'm literally crying happy tears! The way they spread joy to underprivileged kids is pure magic. Subscribing and sharing with everyone I know! 🎂🌟",
      avatar: "https://i.pravatar.cc/150?img=3",
      timeAgo: "1 day ago",
      likes: 156,
      shares: 23,
      verified: true
    },
    {
      name: "Arjun Patel",
      platform: "facebook",
      comment: "Attended their community outreach program last weekend. The dedication and compassion of these young changemakers is remarkable. Proud to support such meaningful work in our community! 🤝",
      avatar: "https://i.pravatar.cc/150?img=4",
      timeAgo: "3 days ago",
      likes: 67,
      shares: 12,
      verified: false
    },
    {
      name: "Kavya Singh",
      platform: "instagram",
      comment: "The LGBTQIA+ support event was life-changing! Finally found a safe space where acceptance isn't just preached but practiced. Thank you Eyaa Foundation for embracing diversity with open hearts! 🏳️‍🌈💕",
      avatar: "https://i.pravatar.cc/150?img=5",
      timeAgo: "4 days ago",
      likes: 203,
      shares: 45,
      verified: true
    },
    {
      name: "Vikram Joshi",
      platform: "youtube",
      comment: "Their food distribution initiative is incredible! Watched the whole documentary and couldn't stop sharing. These volunteers are true heroes working tirelessly to fight hunger. Much respect! 🍽️❤️",
      avatar: "https://i.pravatar.cc/150?img=6",
      timeAgo: "1 week ago",
      likes: 134,
      shares: 28,
      verified: false
    }
  ];

  // Auto-cycle through posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(posts.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length]);

  // Get current 3 posts to display
  const getCurrentPosts = () => {
    const startIndex = currentIndex * 3;
    return posts.slice(startIndex, startIndex + 3);
  };

  // Animation effect
  useEffect(() => {
    setVisiblePosts([]);
    const timer = setTimeout(() => {
      setVisiblePosts(getCurrentPosts());
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return (
          <div className="bg-blue-600 p-2 rounded-full">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        );
      case "instagram":
        return (
          <div className="bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 p-2 rounded-full">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        );
      case "youtube":
        return (
          <div className="bg-red-600 p-2 rounded-full">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(posts.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(posts.length / 3)) % Math.ceil(posts.length / 3));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent mb-4">
            What People Are Saying
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group shadow-lg border border-gray-200"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-orange-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group shadow-lg border border-gray-200"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
          {(visiblePosts.length > 0 ? visiblePosts : getCurrentPosts()).map((post, index) => (
            <div
              key={`${post.name}-${currentIndex}-${index}`}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group border border-white/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Platform Badge */}
              <div className="absolute top-4 right-4 z-10">
                {getPlatformIcon(post.platform)}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={post.avatar}
                      alt={post.name}
                      className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg ring-2 ring-gray-100"
                    />
                    {post.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-800">{post.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{post.timeAgo}</p>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed italic">"{post.comment}"</p>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>{post.shares}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 capitalize">
                    via {post.platform}
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaFeed;