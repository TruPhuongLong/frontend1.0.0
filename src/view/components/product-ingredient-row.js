import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductIngredient } from './product-ingredient';

export const ProductIngredientRow = ({ option, index, arrayIngredient }) => {

    //validate option
    if (option) {
        if (option.kindScreen !== 'xs' || option.kindScreen !== 'sm' || option.kindScreen !== 'md' || option.kindScreen !== 'lg') {
            option.kindScreen = 'md';
        }
        const cols = option.cols;
        option.cols = cols >= 1 ? (cols <= 6 ? cols : 6) : 1;
    }

    console.log(option)

    //validate cols:
    const _cols = Math.round(12 / option.cols)

    const colsArray = new Array(option.cols).fill(0);

    // 12 % _cols is get Module, / 2 for two margin balance
    const offsetCol = Math.round(12 % option.cols / 2);

    return (
        <div className="row">

            {
                offsetCol ?
                    <div className={`col-${option.kindScreen}-${offsetCol}`}></div>
                    : null
            }

            {

                colsArray.map((item, i) => {
                    console.log(`==== ${i}, ${index + i}`)
                    return (
                        <div className={`col-${option.kindScreen}-${_cols}`} key={i}>
                            {
                                arrayIngredient[index + i] ?
                                    <ProductIngredient
                                        urlIngredient={arrayIngredient[index + i].url}
                                        content={arrayIngredient[index + i].content}
                                    />
                                    : null
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}


ProductIngredientRow.propTypes = {
    option: PropTypes.shape({
        kindScreen: PropTypes.string.isRequired,
        cols: PropTypes.number.isRequired
    })
}