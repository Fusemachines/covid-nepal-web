import React from 'react';
import { Row, Col } from 'react-bootstrap';

import TopNewsTips from 'src/routes/dashboard/news/TopNewsTips';
import NepalNews from 'src/routes/dashboard/news/NepalNews';
import GlobalNews from 'src/routes/dashboard/news/GlobalNews';

const News = () => {
  return (
    <div className="container-fluid py-4 news-page">
      <Row>
        <Col md="4">
          <TopNewsTips />
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