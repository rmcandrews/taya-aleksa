import React, { useEffect, useRef } from "react";
import p5 from "p5";
import PropTypes from "prop-types";

export default function() {
  let canvas = null;

  function P5Wrapper({ sketch = () => {} }) {
    const sketchContainer = useRef(null);

    useEffect(() => {
      canvas = new p5(sketch, sketchContainer.current);

      return () => {
        canvas.remove();
      };
    }, [sketch]);

    return <div ref={sketchContainer} style={{ textAlign: "center" }}></div>;
  }

  P5Wrapper.propTypes = {
    sketch: PropTypes.func
  };

  P5Wrapper.defaultProps = {
    sketch: () => {}
  };

  return P5Wrapper;
}
