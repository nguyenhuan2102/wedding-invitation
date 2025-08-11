import { useState } from 'react';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const AboutUs = () => {
  const [showLetter, setShowLetter] = useState(false);

  const toggleLetter = () => {
    setShowLetter(!showLetter);
  };

  return (
    <div className="py-12 bg-[#F1DDDB] relative overflow-hidden" id="about-us">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-[#C29897] tracking-wider animate-pulse">
        Về Chúng Tôi
      </h2>
      <div className="max-w-4xl mx-auto text-center space-y-12 relative">
        
        {/* Thẻ câu chuyện */}
        <div className="relative bg-[#FBE4E4] p-8 rounded-lg shadow-lg border border-[#DFC1BE] mx-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-t from-[#DFC1BE] via-[#F1DDDB] to-[#FBE4E4] opacity-20"></div>
          <div className="relative z-10">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <HeartIcon className="h-12 w-12 text-[#fc8987] mx-auto animate-bounce" />
              </div>
              <button 
                onClick={toggleLetter} 
                className="bg-[#C29897] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#B58685] focus:outline-none">
                Đọc Câu Chuyện Của Chúng Tôi
              </button>
            </div>
            {showLetter && (
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-[#DFC1BE] text-left">
                <p className="text-lg text-[#775E5C]">
                  Chúng tôi lần đầu gặp nhau tại một sự kiện thật tình cờ. Tia lửa yêu thương bắt đầu từ đó, và rồi hạt giống tình yêu cứ thế lớn dần. Năm tháng trôi qua, tình cảm của chúng tôi càng thêm bền chặt. Với tất cả yêu thương và niềm tin, chúng tôi đã quyết định bước tới một chặng đường mới và trao cho nhau lời thề nguyện thiêng liêng.
                </p>
                <p className="text-lg text-[#775E5C] mt-4">
                  Chúng tôi vô cùng hạnh phúc khi được chia sẻ khoảnh khắc này với bạn bè và gia đình thân yêu. Cảm ơn vì đã là một phần trong hành trình của chúng tôi. Chúng tôi rất mong được cùng bạn kỷ niệm ngày đặc biệt này.
                </p>
              </div>
            )}
          </div>
          <div className="absolute top-0 left-0 transform -translate-y-8 translate-x-4">
            <div className="w-20 h-20 bg-[#f8dbdd] rounded-full absolute -top-4 -left-4 border-4 border-[#f2cdca] z-0"></div>
          </div>
        </div>

        {/* Trích dẫn trung tính */}
        <div className="relative bg-[#FBE4E4] p-8 rounded-lg shadow-lg border border-[#DFC1BE] mx-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in">
          <div className="absolute inset-0 pointer-events-none">
            <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
            <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4" />
            <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
          </div>
          <blockquote className="relative text-lg italic text-[#775E5C] font-serif">
            <p className="mb-4">
              {"Tình yêu không chỉ là nhìn nhau, mà là cùng nhìn về một hướng."}
            </p>
            <footer>
              <cite className="block text-base text-[#302625]">
                – Antoine de Saint-Exupéry
              </cite>
            </footer>
          </blockquote>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute top-0 left-1/4" />
          <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute bottom-0 right-1/4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
