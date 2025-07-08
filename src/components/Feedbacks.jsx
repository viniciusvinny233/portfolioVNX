import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl w-full max-w-[340px] mx-auto min-h-[400px] flex flex-col justify-between"
  >
    <div>
      <p className="text-white font-black text-[36px] sm:text-[42px]">"</p>
      <p className="text-white tracking-wider text-[0.75rem] sm:text-[0.8rem] mt-2">{testimonial}</p>
    </div>

    <div className="mt-auto pt-6 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[14px] sm:text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[10px] sm:text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-next text-white text-sm sm:text-1xl p-1 sm:p-2 rounded-full bg-gray-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-200 flex items-center justify-center z-10"
      onClick={onClick}
      style={{ 
        right: '25px', 
        width: '30px', 
        height: '30px'
      }}
    >
      &#8594;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-prev text-white text-sm sm:text-1xl p-1 sm:p-2 rounded-full bg-gray-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-200 flex items-center justify-center z-10"
      onClick={onClick}
      style={{ 
        left: '25px', 
        width: '30px', 
        height: '30px'
      }}
    >
      &#8592;
    </div>
  );
};

const Feedbacks = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    variableWidth: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  return (
    <div className="w-screen relative left-[calc(-50vw+49.5%)] mt-12 bg-black-100 overflow-hidden">
      <div className={`${styles.padding} bg-tertiary min-h-[200px] sm:min-h-[250px] md:min-h-[300px] text-center`}>
        <div className="container mx-auto">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-sm sm:text-base`}>recomendações do linkedin</p>
            <h2 className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>Feedbacks.</h2>
          </motion.div>
        </div>
      </div>

      <div className="-mt-16 sm:-mt-18 md:-mt-20 pb-7 container mx-auto">
        <Slider {...settings} className="slider-container">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="px-2 sm:px-3 md:px-4 py-2">
              <FeedbackCard index={index} {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");