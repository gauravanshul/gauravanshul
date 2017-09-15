import React from 'react';
import ReactDOM,{render} from 'react-dom';


//CommentsHeader.jsx
const CommentsHeader = () => {
    const element = (
        <div class="commonent-header">
               <h1>Comments Header </h1>
           </div>
  
    );
    return element;
}
//Comment.jsx
const Comment = () => {
      const element = (
        <div class="comment">
               <h1>React is good</h1>
           </div>
      );
    return element;
}
//CommentList.jsx
const CommentList = () => {
    const element = (
     <div class="comments-list">
            <Comment />
            <Comment />
     </div>    
    );
    return element;
}
//CommentBox.jsx
const CommentsBox = () => {
    const element = (
        <div class="comments-box">
            <CommentsHeader />
            <CommentList/>
        </div>    
    );
    return element;    
}

//App.js
const Application = () => {
     const element = (
         <div class="container">
           <CommentsBox/>
        </div>    
    );
    return element; 
}

//index.js
render(< Application />, root);

//http://paste.ubuntu.com/25450189/