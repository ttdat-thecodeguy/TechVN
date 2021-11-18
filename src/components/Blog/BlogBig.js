import React from 'react';
import ContentLoader from 'react-content-loader'
import { formatPublishDate } from '../../utils/datetimejs'
import * as Config from '../../constraints/Config'

import { Link } from 'react-router-dom'

export const BlogBig = props => {
    const { post } = props;
    return (
        <div class="post-entry-1">
                            <Link to={'/blog/' + post.link}><img src={Config.IMG_URL_BLOG  +  post.image.name} alt="img" class="img-fluid" /></Link>
                            <h2><Link to={'/blog/' + post.link}>{post.title}</Link></h2>
                            <p>{props.post.description}</p>
                            <div class="post-meta">
                            <span class="d-block" >
                                <a href="#">{post.account.name}</a> Trong <a href="#">{post.types[0].name}</a></span>
                                <span class="date-read">{formatPublishDate(post.publishDate)}<span class="mx-1">&bull;</span></span>
                                <span class="icon-star2 "></span>
                            </div>
        </div>
    );
}   

export const LoaderBlogBig = () => {
    return (
        <ContentLoader viewBox="0 0 360 430">            
            <rect x="0" y="0" rx="5" ry="5" width="360" height="216" /> 
            <rect x="0" y="223" rx="5" ry="5" width="360" height="20" />
            <rect x="0" y="250" rx="5" ry="5" width="200" height="20" />  
            <rect x="0" y="290" rx="5" ry="5" width="350" height="10" />
            <rect x="0" y="310" rx="5" ry="5" width="350" height="10" /> 
            <rect x="0" y="330" rx="5" ry="5" width="340" height="10" />
            <rect x="0" y="350" rx="5" ry="5" width="350" height="10" />
            <rect x="0" y="390" rx="5" ry="5" width="120" height="8" />
            <rect x="0" y="410" rx="5" ry="5" width="150" height="8" />
        </ContentLoader>
    )
}
