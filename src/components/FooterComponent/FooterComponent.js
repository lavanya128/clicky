import React from "react";
import "./FooterComponent.css";

const FooterComponent = props => (
<footer className="mt-5">
	<div className="container">
		<p className="text-center">{props.children}</p>
	</div>
</footer>
);

export default FooterComponent;