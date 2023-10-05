import Image from 'next/image';
// import dayjs from 'dayjs';

import { NewsType } from 'types/news.types';
import Link from 'next/link';
import { Infos } from 'components/shared/Infos';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { seoData } from 'seo/seo.data';
import JsonToHtml from 'helpers/JsonToHtml';

interface Props {
  post: NewsType;
  allNews: NewsType[];
}

const SingleNewsPage = ({ post, allNews }: Props) => {
  const newestNews = allNews.slice(0, 3);

  return (
    <>
      <NextSeo
        title={seoData.newsSinglePage.title(post.title)}
        description={seoData.newsSinglePage.description}
      />
      <BreadcrumbJsonLd
        itemListElements={seoData.newsSinglePage.breadcrumbList(post.title)}
      />
      <div className="singleNewsPage pageHolder">
        <div className="container">
          {/* <span className="date">
            {dayjs(post.created_at).format('MMM DD YYYY - HH:MM')}
          </span> */}
          <div className="left">
            <div className="photo">
              <Image src={post.image} alt={post.title} fill priority />
            </div>
            <div className="newsContent">
              <div>
                <h1 className="pageTitle">{post.title}</h1>
                {/* {JSON.parse(post.body).blocks.map(
                  ({ text }: any, i: number) => (
                    <div
                      key={i}
                      className="postBody"
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></div>
                  )
                )} */}
                {/* <div
                  className="postBody"
                  dangerouslySetInnerHTML={renderedContent}
                ></div> */}
                <JsonToHtml json={post.body} />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="newestNews">
              {newestNews.length < 1 && (
                <div className="top">
                  <h2>Najnovije vesti</h2>
                  <Link href="/novosti">Pogledaj sve</Link>
                </div>
              )}

              {newestNews
                .filter((news) => post.id !== news.id)
                .slice(0, 2)
                .map((n) => (
                  <div className="singleNewestNew">
                    <Link href={`/novosti/${n.id}`}>
                      <Image
                        src={n.image}
                        alt={n.title}
                        key={n.id}
                        height={300}
                        width={370}
                      ></Image>
                      <div className="info">
                        <h4>{n.title}</h4>
                        {JSON.parse(n.body).blocks.map(
                          ({ text }: any, i: number) => (
                            <div
                              key={i}
                              className="newsBody"
                              dangerouslySetInnerHTML={{
                                __html: text.substring(0, 300) + '...',
                              }}
                            ></div>
                          )
                        )}
                        <Link href={`/novosti/${n.id}`} className="btn-primary">
                          Pročitaj više
                        </Link>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          <Infos />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}news/${query.slug}`);
  const { data } = await res.json();
  const allNews = await fetch(`${baseURL}news`);
  const allNewsRes = await allNews.json();

  return { props: { post: data, allNews: allNewsRes.data } };
}

export default SingleNewsPage;
