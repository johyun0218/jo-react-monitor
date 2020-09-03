import React from 'react';

function ContentList(props) {
    return (
        <ul>
            {props.servers.map((row, i) => {
                return <li key={i}>{row.server} {row.cpuPer}</li>;
            })}
        </ul>
    )
}


export default ContentList;