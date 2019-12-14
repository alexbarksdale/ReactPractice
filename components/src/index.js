import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail
                author='Alex'
                timeAgo='Today at 4:45pm'
                commentMsg='Super cool'
                profileAvatar={faker.image.avatar()}
            />
            <CommentDetail
                author='Abby'
                timeAgo='Today at 2:45pm'
                commentMsg='Wowzah'
                profileAvatar={faker.image.avatar()}
            />
            <CommentDetail
                author='Vick'
                timeAgo='Today at 6:45pm'
                commentMsg='Wicked'
                profileAvatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
