import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from '../../images/mobile.png'
import mobile1 from '../../images/mobile1.png'
import mobile2 from '../../images/mobile2.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = () => {
    const images = [
        {
          original: `${mobile}`,
          
        },
        {
          original: `${mobile1}`,
          
        },
        {
          original: `${mobile2}`,
          
        },
      ];
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
      <ReactImageGallery items={images} 
            defaultImage={mobile} 
            showFullscreenButton ={false}
            isRTL ={true}
            showPlayButton={false}
            showThumbnails={false}
            renderLeftNav={LeftButton}
            renderRightNav={RightButton}
      />
    </div>
  )
}

export default ProductGallery