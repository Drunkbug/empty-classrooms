import React from 'react';
import PropTypes from 'prop-types';

const Classrooms = (props) => {
    return (
        <div>
            this is the classroom list page. The building is: {props.match.params.id}
        </div>
    );
};

Classrooms.propTypes = {
    match: PropTypes.object.isRequired,
};

export default Classrooms;