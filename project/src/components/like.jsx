import React, { Component } from 'react';

class Like extends Component {
    state = {
        post: this.props.post
    };
    handelLikeClick = post => {
        const likePost ={...post};
        likePost.like++;
        this.setState({ post : likePost })

    }
    render() {
        const {post} = this.state;
        return (
            <div 
            className="fa fa-heart float-left"
            style={{color:'red' , cursor:'pointer'}}
            onClick={() => this.handelLikeClick(post)}
            >
            <span className="badge-primary badge-pill m-1">
                {post.like}
            </span>
            </div>
        );
    }
}

export default Like;