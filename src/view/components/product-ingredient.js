import React from 'react';
import PropTypes from 'prop-types';

export const ProductIngredient = (props) => {

    const styles = {
        image: {
            height: '300px',
            objectFit: 'contain'
        },
        content: {
            padding: '20px 10px 75px 10px'
        }
    }

    return (
        <div>
            <div >
                <img src={props.urlIngredient} alt="" style={styles.image}/>
            </div>
            <p style={styles.content}>{props.content}</p>
        </div>
    );
}

ProductIngredient.propTypes = {
    urlIngredient: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired 
}


