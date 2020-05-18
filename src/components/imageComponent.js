import React from 'react';

const ImageComponent = (img)=>(
    <div>
        <img src={img.url}/>
        {img.description}
    </div>
);

export default ImageComponent;
