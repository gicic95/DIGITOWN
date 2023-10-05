import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { getNews } from 'api/news';

export const News = () => {
  const { data } = useQuery('news', getNews);

  //console.log(data);

  if (!data || data?.length < 1) {
    return null;
  }

  return (
    <div className="newsBlock">
      <h2>Budi uvek u toku</h2>
      <div className="sliderWrap">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          speed={300}
          modules={[Navigation]}
          loop={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            1500: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            700: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            100: {
              spaceBetween: 10,
              slidesPerView: 1, // Adjust slidesPerView for mobile devices
            },
          }}
        >
          {data &&
            data.length > 0 &&
            data?.map((el) => (
              <SwiperSlide key={el.id}>
                <Link href={`/novosti/${el.id}`} className="newsSlide">
                  <div className="newsSlide">
                    <div className="newsSlideTop">
                      <Image
                        src={el.image}
                        alt={el.title}
                        width={478}
                        height={285}
                      />
                    </div>
                    <div className="newsSlideBottom">
                      <h3>{el.title}</h3>
                      <div className="newsBody">
                        {JSON.parse(el.body).blocks.map(
                          ({ text }: any, i: number) => (
                            <div
                              key={i}
                              //className="newsBody"
                              dangerouslySetInnerHTML={{
                                __html: text,
                              }}
                            ></div>
                          )
                        )}
                      </div>
                      <button className="btn-primary">Prikaži više</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev">
          <DownArrowIcon />
        </div>
        <div className="swiper-button-next">
          <DownArrowIcon />
        </div>
      </div>
    </div>
  );
};
