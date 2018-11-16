import React from 'react';

const List = ({ itemSource = [], renderRows = f => f, styles }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        ...styles
    }}>
        {itemSource.map((item, index, array) =>
            renderRows(item, index, array)
        )}
    </div>
)

export default List;
