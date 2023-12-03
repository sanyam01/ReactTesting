import React from 'react';
interface IProps {
    name?: string;
}
const Greed = (props: IProps) => {
    return (
        <div>
            {`Hello ${props.name}`}
        </div>

    );
}

export default Greed;