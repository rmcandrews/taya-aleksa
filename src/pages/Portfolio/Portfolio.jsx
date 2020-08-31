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
        <div style={{ position: "relative" }}>
          <ProgressiveImage
            src={image.medium}
            srcSetData={{
              srcSet: `${image.small} 500w, ${image.medium} 1000w, ${image.large} 1500w`,
              sizes: "(max-width: 575px) 75vw, (max-width: 575px) 45vw, 30vw"
            }}
            placeholder={image.placeholder}
          >
            {(src, loading, srcSetData) => (
              <img
                width="90%"
                style={{
                  height: "auto",
                  opacity: loading ? 0.75 : 1
                }}
                src={src}
                srcSet={srcSetData.srcSet}
                sizes={srcSetData.sizes}
                alt={title}
              />
            )}
          </ProgressiveImage>
          <div>{title}</div>
        </div>
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
