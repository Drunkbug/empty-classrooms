import React from 'react';
import PropTypes from 'prop-types';

const Classroom = (props) => {
    return (
        <div>
            this is the edit single page. The classroom is: {props.match.params.id}
        </div>
    );
};

Classroom.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Classroom;