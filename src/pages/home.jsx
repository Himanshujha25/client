import React, { useEffect, useState } from 'react';
import { ChevronRight, Users, ShoppingCart, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const PruchoHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStat, setCurrentStat] = useState(0);

    const stats = [
        { value: "10+", label: "Suppliers", icon: Users },
        { value: "50+", label: "Orders Processed", icon: ShoppingCart },
        { value: "98%", label: "Success Rate", icon: TrendingUp },
        { value: "24/7", label: "Support", icon: Shield }
    ];

    const floatingElements = [
        { id: 1, delay: '0s', duration: '6s' },
        { id: 2, delay: '2s', duration: '8s' },
        { id: 3, delay: '4s', duration: '7s' },
        { id: 4, delay: '1s', duration: '9s' },
        { id: 5, delay: '3s', duration: '5s' }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentStat(prev => (prev + 1) % stats.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden ">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {floatingElements.map((element) => (
                    <div
                        key={element.id}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${element.duration} ease-in-out infinite`,
                            animationDelay: element.delay,
                        }}
                    >
                        <div className="w-20 h-20 bg-white rounded-full blur-xl"></div>
                    </div>
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navigation */}


                {/* Main Hero Content */}
                <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
                    <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Content */}
                        <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                            {/* Badge */}



                            {/* Main Headline */}
                            <div className="space-y-2">
                                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 mt-24">
                                    <Globe className="w-4 h-4" />
                                    <span>Trusted by 5+ companies worldwide</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Seamless
                                    </span>
                                    <br />
                                    Procurement
                                    <br />
                                    <span className="text-3xl md:text-4xl lg:text-5xl text-white/80">
                                        from Supplier to Delivery
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
                                    Discover, qualify, negotiate & manage orders—all in one integrated platform.
                                    Transform your procurement process with AI-powered efficiency.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl">
                                    <span className="flex items-center space-x-2">
                                        <span>Enquiry</span>
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200">
                                    Watch Demo
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center space-x-8 pt-8">
                                <div className="text-white/60 text-sm">Trusted by:</div>
                                <div className="flex items-center space-x-6">
                                    {['Company A', 'Company B', 'Company C'].map((company, index) => (
                                        <div key={index} className="text-white/40 font-medium">
                                            {company}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Interactive Stats/Visual */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                            {/* Main Stats Card */}
                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">

                                    {/* Animated Stat Display */}
                                    <div className="text-center mb-8">
                                        <div className="flex items-center justify-center mb-4">
                                            {React.createElement(stats[currentStat].icon, {
                                                className: "w-12 h-12 text-blue-400"
                                            })}
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2">
                                            {stats[currentStat].value}
                                        </div>
                                        <div className="text-white/70 text-lg">
                                            {stats[currentStat].label}
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {stats.map((stat, index) => (
                                            <div
                                                key={index}
                                                className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${currentStat === index
                                                        ? 'bg-white/20 scale-105'
                                                        : 'bg-white/5 hover:bg-white/10'
                                                    }`}
                                                onClick={() => setCurrentStat(index)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    {React.createElement(stat.icon, {
                                                        className: `w-6 h-6 ${currentStat === index ? 'text-blue-400' : 'text-white/60'}`
                                                    })}
                                                    <div>
                                                        <div className="text-white font-semibold text-lg">{stat.value}</div>
                                                        <div className="text-white/60 text-sm">{stat.label}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Elements Around Card */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Scroll Indicator */}
                <div className="text-center pb-8">
                    {/* <div className="inline-flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </div> */}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
        </div>
    );
};

export default PruchoHero;