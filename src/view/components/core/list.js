import React from 'react';

const List = ({ itemSource = [], renderRows = f => f, style }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        ...style
    }}>
        {itemSource.map((item, index, array) =>
            renderRows(item, index, array)
        )}
    </div>
)

export default List;
