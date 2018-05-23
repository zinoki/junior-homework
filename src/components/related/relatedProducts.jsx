import React, { Component } from 'react';
import * as data from '../../data/data';
import RelatedProductsEntry from './Entry/relatedProductEntry';

// console.log('data', data);

class RelatedProductsComponent extends Component {
  render() {
    let relatedArray = data.fields.relatedProducts
    console.log('data', relatedArray);
    return (
      <div className="related-list">
        {relatedArray.map(entry => {
          console.log(entry);
          return (<RelatedProductsEntry description ={entry.fields.shopifyProduct.body_html} 
            title={entry.fields.name} 
            price={entry.fields.shopifyProduct.variants[0].price}
            key={entry.fields.shopifyProductId}
            picture={entry.fields.shopifyProduct.image.src}
            />)
        }
        )}
      </div>
    )
  }
}
export default RelatedProductsComponent;

// class ControlModule extends Component {
// 	render() {
// 		let {played, mouseDown, change, mouseUp, loaded} = this.props;
// 		return (
// 			<div className="progress-container">
// 				<input
// 					type='range' min={0} max={1} step='any'
// 					value={played}
// 					onMouseDown={mouseDown}
// 					onChange={change}
// 					onMouseUp={mouseUp}
// 				/>
// 				<progress className='played' max={1} value={played} />
// 				<progress className='video-load' max={1} value={loaded} />
// 			</div>
// 		);
// 	}
// }