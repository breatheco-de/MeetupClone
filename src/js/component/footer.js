import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer">
		<div className="row">
			<div className="col-md-6">
				<div className="container-footer">
					<p className="footer-text">
						Made with <i className="fa fa-heart text-danger" /> by Rebecca Willett
					</p>
				</div>
			</div>
			<div className="col-md-6">
				<div className="container-footer">
					<p className="footer-p">
						<a href="https://twitter.com/rebeccaAwillett" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter-square footer-icon" />
						</a>
						<a href="https://www.linkedin.com/in/willettrebecca/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin footer-icon" />
						</a>
						<a href="https://github.com/rebwill" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github footer-icon" />
						</a>
						<a href="mailto:willett.rebecca@gmail.com" target="_blank" rel="noopener noreferrer">
							<i className="fas fa-envelope-square footer-icon" />
						</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
);
