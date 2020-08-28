import React from "react";
import "./Portfolio.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import PortfolioCategory from "./PortfolioCategory";
import ProgressiveImage from "react-progressive-graceful-image";
import categories from "./categories";

let subPaths = [];
categories.forEach(category => {
  subPaths.push(`/portfolio/${category.path}`);
});

const categoryOverviews = categories.map(category => {
  const { image, title, path } = category;
  return (
    <Col xs={12} sm={6} lg={4} className="col" key={title}>
      <Link to={`/portfolio/${path}`}>
        <div>
          <ProgressiveImage src={image.src} placeholder={image.placeholder}>
            {(src, loading) => (
              <img
                width="90%"
                style={{
                  filter: loading ? "blur(3px)" : "",
                  transition: "500ms -webkit-filter linear",
                  height: "auto"
                }}
                src={src}
                alt={title}
              />
            )}
          </ProgressiveImage>
        </div>
        <div>{title}</div>
      </Link>
    </Col>
  );
});

const Portfolio = () => {
  return (
    <div>
      <Grid fluid>
        <Switch>
          <Route exact path="/portfolio">
            <Row style={{ marginTop: -32 }}>{categoryOverviews}</Row>
          </Route>
          <Route path={subPaths} component={PortfolioCategory} />
          <Route>
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </Grid>
    </div>
  );
};

export default Portfolio;
