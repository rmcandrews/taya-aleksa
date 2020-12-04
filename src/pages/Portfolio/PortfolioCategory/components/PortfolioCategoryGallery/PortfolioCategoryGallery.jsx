import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Viewer from "react-viewer";

const PortfolioCategoryGallery = ({ category }) => {
  const [viewerProps, setViewerProps] = useState({
    visible: false,
    activeIndex: 0
  });
  const [viewerImages, setViewerImages] = useState([]);

  useEffect(() => {
    const tempViewerImages = [];
    category.photos.forEach(photo => {
      tempViewerImages.push({ src: photo.original });
    });
    setViewerImages(tempViewerImages);
  }, [category]);

  return (
    <div>
      <Gallery
        photos={category.photos}
        direction={"column"}
        margin={20}
        onClick={(_, obj) =>
          setViewerProps({
            visible: true,
            activeIndex: obj.index
          })
        }
      />
      <Viewer
        images={viewerImages}
        onClose={() => setViewerProps({ visible: false })}
        attribute={false}
        noNavbar={true}
        rotatable={false}
        maxScale={3}
        minScale={1}
        zoomSpeed={1}
        zIndex={999999}
        disableMouseZoom={true}
        customToolbar={toolbars => toolbars.slice(0, 5)}
        {...viewerProps}
      />
    </div>
  );
};

export default PortfolioCategoryGallery;
