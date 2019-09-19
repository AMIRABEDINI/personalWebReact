import React, { Component } from "react";
import getPosts from "../services/fakePosts";
import Like from "./like";
import Pagination from "./pagination";
import _ from "lodash";
import { paginate } from "./utils/paginate";
class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pagesize: 5
    };
    componentDidMount() {
        const posts = getPosts();
        this.setState({ posts: posts });
    }
    handelPageChange = page => {
        this.setState({ currentPage: page })
    }
    getPageDate = () => {
        const { posts: allPosts, currentPage, pagesize } = this.state;
        const posts = paginate(allPosts, currentPage, pagesize);
        return {
            data: posts,
            totalCount: allPosts.length
        };
    };
    render() {
        const { pagesize, currentPage } = this.state;
        const { totalCount, data } = this.getPageDate();

        const count = this.state.posts.length;
        if (count === 0) return <p className="text-center">پستی برای نمایش وجود ندارد</p>
        return (
            <React.Fragment>
                {data.map(post => (
                    <div className="container-fluid">
                        <div className="card shodow-lg bg-light m-2">
                            <article className="p-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <a href="#">{post.postTitle}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-2" />
                                        {post.postDate}
                                    </span>
                                    <img
                                        src={post.postImageUrl}
                                        alt=""
                                        className="card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{post.postContent}</p>
                                </div>
                                <div className="card-footer">
                                    <ul className="list-inline float-right">
                                        <li className="list-inline-item">
                                            <span className="fa fa-link m-1"></span>
                                            برچسب ها :
                    </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                    </ul>
                                    <Like post={post} />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
                <Pagination
                    itemCount={totalCount}
                    pageSize={pagesize}
                    currentPage={currentPage}
                    onPageChange={this.handelPageChange}
                />
            </React.Fragment>
        );
    }
}
export default Posts;