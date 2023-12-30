import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name:"남기혁",
        comment:"안녕하세요 남기혁입니다"
    },
    {
        name:"호돌이",
        comment:"안녕하세요 호돌이입니다"
    },
    {
        name:"호순이",
        comment:"안녕하세요 호순이입니다"
    }
];

function CommentList(props) {
  return (
    <div>
        {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment}/>
            );
        })}

    </div>
  )
}

export default CommentList