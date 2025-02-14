import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Simple Card component to replace shadcn/ui Card
const Card = ({ children, className = '' }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

// Simple Lock icon component to replace lucide-react
const Lock = ({ size = 24, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// Custom Tailwind animations
const customStyles = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(3deg);
    }
  }

  .animate-bounce-slow {
    animation: bounce-slow 4s infinite;
  }

  .animate-wiggle {
    animation: wiggle 2s infinite;
  }
`;

const OurWebsite = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const correctPassword = '122124'; // Password format: mmddyy for December 21, 2024

  const photos = [
    { url: 'https://via.placeholder.com/400x300', caption: 'First date with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Beach day with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Date night with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Movie time with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Coffee with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Park walk with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Dinner with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Shopping with Yaya' },
    { url: 'https://via.placeholder.com/400x300', caption: 'Weekend with Yaya' }
  ];

  const messages = [
    { content: 'I love you very much Yaya 💕', timestamp: '2025-02-14' },
    { content: 'Miss you already Yaya 💖', timestamp: '2025-02-13' },
    { content: 'Thinking of you Yaya', timestamp: '2025-02-12' },
    { content: 'Can\'t wait to see you again Yaya', timestamp: '2025-02-11' },
    { content: 'You make me so happy Yaya', timestamp: '2025-02-10' },
    { content: 'Sweet dreams my Yaya', timestamp: '2025-02-09' },
    { content: 'You\'re the best thing that happened to me Yaya', timestamp: '2025-02-08' },
    { content: 'Forever yours Yaya 💖', timestamp: '2025-02-07' },
    { content: 'My heart belongs to you Yaya', timestamp: '2025-02-06' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      // Get current time in LA
      const laOptions = { timeZone: 'America/Los_Angeles' };
      const now = new Date().toLocaleString('en-US', laOptions);
      const currentLA = new Date(now);
      
      // Get start date in LA timezone
      const startLA = new Date('2024-12-21T00:00:00').toLocaleString('en-US', laOptions);
      const startDate = new Date(startLA);
      
      const difference = currentLA - startDate;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const checkPassword = () => {
    if (password.trim() === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password! Hint: Try our anniversary date (mmddyy)');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-6">
            <Lock className="mx-auto text-pink-500 mb-4" size={40} />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Yaya</h1>
            <p className="text-gray-600">Enter our anniversary date (mmddyy)</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  checkPassword();
                }
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter password"
            />
            <button
              onClick={checkPassword}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Enter
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100 p-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Countdown Timer */}
        <Card className="p-6 bg-white rounded-lg shadow-xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-500 to-pink-200"></div>
          <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
            Our Time Together 🤍
          </h2>
          <p className="text-center text-gray-600 mb-4">Since December 21, 2024 (LA Time)</p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors duration-300">
                <div className="text-4xl font-bold text-pink-600">{timeLeft.days}</div>
                <div className="text-pink-500 font-medium">Days</div>
              </div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors duration-300">
                <div className="text-4xl font-bold text-pink-600">{timeLeft.hours}</div>
                <div className="text-pink-500 font-medium">Hours</div>
              </div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors duration-300">
                <div className="text-4xl font-bold text-pink-600">{timeLeft.minutes}</div>
                <div className="text-pink-500 font-medium">Minutes</div>
              </div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="bg-pink-100 rounded-lg p-4 hover:bg-pink-200 transition-colors duration-300">
                <div className="text-4xl font-bold text-pink-600">{timeLeft.seconds}</div>
                <div className="text-pink-500 font-medium">Seconds</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Photo Gallery */}
        <Card className="p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-xl font-bold text-center mb-6 text-pink-600">Our Precious Moments 📸</h2>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Messages */}
        <Card className="p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-xl font-bold text-center mb-6 text-pink-600">I could read these all day 💌</h2>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-102 hover:shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="bg-pink-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] hover:bg-pink-200 transition-colors duration-300">
                      <p className="text-gray-800">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-2">{message.timestamp}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Appreciation Letter */}
        <Card className="p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-xl font-bold text-center mb-4">My Love Letter to Yaya</h2>
          <p className="text-gray-800 leading-relaxed">
            Dear Yaya, every day with you feels like a celebration of love. I want to take a moment to tell you just how much you mean to me...
          </p>
        </Card>
      </div>
    </div>
  );
};

// Create root element and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OurWebsite />
  </React.StrictMode>
);

export default OurWebsite;
