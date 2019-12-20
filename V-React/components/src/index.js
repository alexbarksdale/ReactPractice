import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                {/*NOTE: Must pass props.children in approval card*/}
                <CommentDetail
                    author='Alex'
                    timeAgo='Today at 4:45pm'
                    commentMsg='Super cool'
                    profileAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Abby'
                    timeAgo='Today at 2:45pm'
                    commentMsg='Wowzah'
                    profileAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Vick'
                    timeAgo='Today at 6:45pm'
                    commentMsg='Wicked'
                    profileAvatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
