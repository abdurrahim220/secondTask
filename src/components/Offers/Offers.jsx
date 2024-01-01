import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import InfiniteScroll from "react-infinite-scroll-component";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeCard from "../HomeCard/HomeCard";
import SingleProductCard from "../SingleProuductCard/SingleProductCard";
import productData from "../../../public/productData";

const Offers = () => {
  const [items, setItems] = useState(productData);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    const moreItems = productData.slice(page * 10, (page + 1) * 10);
    if (moreItems.length === 0) {
      setHasMore(false);
      return;
    }
    setItems((prevItems) => [...prevItems, ...moreItems]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="my-10">
      <div className="py-10 text-primary-text font-black text-[40px]">
        Offers
      </div>

      <div>
        <h1>Actions</h1>
        <div className="mt-5">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 6,
              },
              1500: {
                slidesPerView: 5,
                spaceBetween: 8,
              },
            }}
          >
            {items.map((shop) => (
              <SwiperSlide key={shop.id}>
                <HomeCard shop={shop} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex my-5 flex-wrap gap-8 justify-center items-center">
            {items.map((shop, index) => (
              <SingleProductCard key={index} shop={shop} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Offers;
