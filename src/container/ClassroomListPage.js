import React from 'react';
import ClassroomList from 'src/components/classroom/ClassroomList';
import ClassroomControlPanel from 'src/components/classroom/ClassroomControlPanel';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// ReactDOM.render(<div className='container'><Header /><p>Loading...</p></div>, document.getElementById('app'));

// store.dispatch(startSetBuildings()).then(() => {
//     ReactDOM.render(jsx, document.getElementById('app'));    
// });
const ClassroomListPage = (props) => (
    <div>
        <ClassroomControlPanel bid={props.match.params.id} />
        <ClassroomList bid={props.match.params.id} />
    </div>
);

export default ClassroomListPage;

ClassroomListPage.propTypes = {
    match: PropTypes.object.isRequired,
};