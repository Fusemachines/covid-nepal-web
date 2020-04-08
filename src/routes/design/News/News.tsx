import React from 'react';
import Menu from '../Navbar';
import { Row, Col, Media } from 'react-bootstrap';

const News = () => (
  <>
    <Menu />
    
    <div className="container-fluid py-4 news-page">
      <Row>
        <Col md="4">
          <div className="mb-3">
            <div className="title">COVID-19 Top News</div>
          </div>

          <div className="main-news bg-white mb-4">
            <img src="/images/news/main-img.jpg" alt="" className="img-fluid mx-auto d-block"></img>
            <div className="p-4">
              <div className="font-14">Questions arise after teen’s death was initially linked to coronavirus in California</div>
              <div className="small-xs text-light"><span>CNN</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
            </div>
          </div>

          <div className="news-block bg-white">
            <div className="bg-grey text-primary p-2">
              TIPS
            </div>
              <div className="news-list px-3">

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news1.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light">March 22, 2020</div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news2.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light">March 22, 2020</div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news3.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light">March 22, 2020</div>
                  </Media.Body>
                </Media>

              </div>

          </div>
        </Col>

        <Col md="4">
          <div className="my-3">
            <img alt="" src="/images/news/nepal.jpg" /> <span className="font-weight-bold">Nepal</span>
          </div>

            <div className="news-list px-3 h-80">

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news1.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news2.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news3.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news1.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news2.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news3.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <div className="text-center my-3">
                  <button className="btn btn-primary">Load More</button>
                </div>

            </div>
        </Col>

        <Col md="4">
          <div className="my-3">
            <img alt="" src="/images/news/global.jpg" /> <span className="font-weight-bold">Global</span>
          </div>

            <div className="news-list px-3 h-80">

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news1.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news2.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news3.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news1.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news2.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <Media>
                  <div className="mr-2 align-self-center">
                    <img alt="" src="/images/news/news3.jpg" className="img-fluid" />
                  </div>
                  <Media.Body className="align-self-center">
                    <div className="font-weight-semibold">Global research and innovation forum: towards a research</div>
                    <div className="small-xs text-light"><span>www.nepalitimes.com</span><span className="mx-1">|</span> <span>2 hours ago</span></div>
                    <div className="small-xs mt-1">Ever since the nationwide lockdown was announced on 23 March, the fear of being </div>
                  </Media.Body>
                </Media>

                <div className="text-center my-3">
                  <button className="btn btn-primary">Load More</button>
                </div>

            </div>
        </Col>


      </Row>
    </div>

  </>
);

export default News;
