import React from 'react';

const Error = props => {
    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
            <h1>{props.error.code}</h1>
			</div>
			<h2>{props.error.title }</h2>
			<p>{props.error.content }. <a href="#">Return to homepage</a></p>
			<div class="notfound-social">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-pinterest"></i></a>
				<a href="#"><i class="fa fa-google-plus"></i></a>
			</div>

		</div>
	</div>
    );
};

export default Error;