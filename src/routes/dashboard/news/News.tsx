import React from 'react';
import { Row, Col } from 'react-bootstrap';

import TopNews from 'src/routes/dashboard/news/TopNews';
import NepalNews from 'src/routes/dashboard/news/NepalNews';
import GlobalNews from 'src/routes/dashboard/news/GlobalNews';

const News = () => {
  return (
    <div className="container-fluid py-4 news-page">
      <Row>
        <Col md="4">
          <TopNews />
        </Col>
        <Col md="4">
          <NepalNews />
        </Col>
        <Col md="4">
          <GlobalNews />
        </Col>
      </Row>
    </div>
  );
}

export default News;