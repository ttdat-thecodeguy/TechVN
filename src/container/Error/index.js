import React from 'react';
import { withTranslation } from 'react-i18next';

const Error = props => {
	const error = props.code === 404 ? 'error.404' : props.code === 500 ? 'error.500' : props.code === 401 ? 'error.401' : 'error.403';

    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
            <h1>
				{props.t(`${error}.code`, { framework: "react-i18next" })}
			</h1>
			</div>
			<h2>
			{props.t(`${error}.title`, { framework: "react-i18next" })}
			</h2>
			<p>
			{props.t(`${error}.content`, { framework: "react-i18next" })}
			<a href="/">Return to homepage</a></p>
			<div class="notfound-social">
				<a href="fb.com"><i class="fa fa-facebook"></i></a>
				<a href="twitter.com"><i class="fa fa-twitter"></i></a>
				<a href="pinterest.com"><i class="fa fa-pinterest"></i></a>
				<a href="gg.com"><i class="fa fa-google-plus"></i></a>
			</div>
		</div>
	</div>
    );
};
export default withTranslation('common')(Error);