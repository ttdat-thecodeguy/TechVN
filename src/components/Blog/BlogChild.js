import React from 'react';
import ContentLoader from 'react-content-loader'
import { formatPublishDate } from '../../utils/datetimejs'
import * as Config from '../../constraints/Config'


import { Link } from 'react-router-dom'

export const BlogChild = props => {
    const { post } = props;
    return (
        <div class="post-entry-2 d-flex">
                            <div class="thumbnail" style={{ backgroundImage: `url(${Config.IMG_URL_BLOG  +  post.image.name})` , backgroundSize: "cover", backgroundRepeat: "no-repeat" }} ></div>
                            <div class="contents">
                                <h2><Link to={'/blog/' + post.link}>{post.title}</Link></h2>
                                <div class="post-meta">
                                    <span class="d-block"><a href="#">{post.account.name}</a> Trong <a href="#">{post.types[0].name}</a></span>
                                    <span class="date-read">{formatPublishDate(post.publish_date)}<span class="mx-1">&bull;</span> 3 min read <span class="icon-star2"></span></span>
                                </div>
                            </div>
         </div>
    );
};

export const LoaderBlogChild = () => {
    return (
        <ContentLoader viewBox="0 0 360 120">
            <rect x="0" y="0" rx="5" ry="5" width="120" height="105" />
            <rect x="130" y="0" rx="5" ry="5" width="190" height="18" />
            <rect x="130" y="25" rx="5" ry="5" width="210" height="18" />
            <rect x="130" y="75" rx="5" ry="5" width="120" height="8" />
             <rect x="130" y="90" rx="5" ry="5" width="150" height="8" />
        </ContentLoader>
    )
}
