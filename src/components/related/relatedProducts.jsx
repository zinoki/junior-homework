import React, { Component } from 'react';
import * as data from '../../data/data';
import './relatedProducts.css';
import RelatedProductsEntry from './Entry/relatedProductEntry';

class RelatedProductsComponent extends Component {
  render() {
    let relatedArray = data.fields.relatedProducts
    return (
      <div className="related-list">
        <h2>Related Products</h2>
          {relatedArray.map(entry => {
            return (<RelatedProductsEntry description ={entry.fields.shopifyProduct.body_html} 
              title={entry.fields.name} 
              price={entry.fields.shopifyProduct.variants[0].price}
              picture={entry.fields.shopifyProduct.image.src}
              key={entry.fields.shopifyProductId}
              />)
          }
          )}
      </div>
    )
  }
}
export default RelatedProductsComponent;