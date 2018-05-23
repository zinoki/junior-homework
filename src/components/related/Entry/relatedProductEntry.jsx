import React from 'react';
import './relatedProductEntry.css';

const RelatedProductsEntry = (props) => {
  console.log(props.price);
  let check = props.description.replace(/<(?:.|\n)*?>/gm, '');;
  return (
    <div>
      <div className="related-left related-middle">
        <img className="related-image" src={props.picture} alt="" />
      </div>
      <div className="related-body">
        <div className="related-title">{props.title}</div>
        <div className="related-price">{props.price}</div>
        <div className="related-description">{(check)}</div>
      </div>
    </div>
  )
}

export default RelatedProductsEntry;