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
    className="bg-black-200 p-10 rounded-3xl xs:w-[400px] w-full mb-10"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div>
      <p className="text-white tracking-wider text-[0.8rem]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-next text-white text-1xl p-2 rounded-full bg-gray-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-200"
      onClick={onClick}
    >
      &#8594;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-prev text-white text-1xl p-2 rounded-full bg-gray-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-200"
      onClick={onClick}
    >
      &#8592;
    </div>
  );
};

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <div className={`${styles.paddingSlider}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>recomendações do linkedin</p>
          <h2 className={styles.sectionHeadText}>Feedbacks.</h2>
        </motion.div>
        </div>
      </div>
      <div className={`${styles.paddingSlider} -mt-20 pb-7`}>
      <div className={`${styles.paddingSlider} -mt-20 pb-7`}>
        <Slider {...settings} className={`slider-container ${styles.paddingSlider} mx-auto`}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="">
              <FeedbackCard index={index} {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default Feedbacks;