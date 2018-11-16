import React from 'react';

import { ButtonElipse } from './core/button-elipse';

import urlIngredient1 from '../../assets/ingredient1.png';

const ProductDetail = ({ onShrink = f => f, product = {} }) => {
	return (
		<section>
			<span></span>
			<div className="hide-parent">
				<div className="intro-video">
					<img src={urlIngredient1} alt="" />
				</div>
				<div className="description-video">
					<p>{product.contentDetail}</p>
					<div className="btn-viewmore">
						<ButtonElipse style={{ backgroundColor: '#d8d8d8' }} onClick={onShrink}>Ẩn Bớt</ButtonElipse>
						<ButtonElipse style={{ backgroundColor: '#ffe72c' }} linkTo="/order">sản phẩm</ButtonElipse>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductDetail;