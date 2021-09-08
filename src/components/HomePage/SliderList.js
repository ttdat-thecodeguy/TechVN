import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendRequest } from "../../store/action/blogAction";
import SliderItem from "../Blog/SliderItem";

const Slide = () => {
  const dispatch = useDispatch();
  const [posts] = useSelector((state) => [state.blogReducers.recommend]);

  useEffect(() => {
    dispatch(getRecommendRequest());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div class="site-section py-0">
      <Slider {...settings}>
        { posts.map((post) => {
          return <SliderItem post={post} />;
        })}
      </Slider>
    </div>
  );
};

export default Slide;
