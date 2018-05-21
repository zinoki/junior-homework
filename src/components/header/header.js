import React from 'react';
import "./header.css";

class Header extends React.Component {
	render() {
		return (
			<header>
				<img alt="" src='https://www-tastemade-com.akamaized.net/dist/images/logos/tm-logo-53f031ea8a.png' />
				<ul className="" role="menubar">
					<li className="" data-current-page="false">
						<span className="" role="menuitem" tabIndex="0">
							Food
						</span>
					</li>
					<li className="" data-current-page="false">
						<span className="" role="menuitem" tabIndex="0">
							Travel
						</span>
					</li>
					<li className="" data-current-page="false">
						<span className="" role="menuitem" tabIndex="0">
							Home
						</span>
					</li>
					<li className="">
						<span className="" role="menuitem" tabIndex="0">
							Shop
						</span>
					</li>
					<li className="">
						<span className="" role="menuitem" tabIndex="0" aria-haspopup="true">
							More
						</span>
						<ul className="" aria-label="More">
							<li>
								<span role="menuitem">Shows</span>
							</li>
							<li>
								<span role="menuitem">About</span>
							</li>
							<li>
								<span role="menuitem">Contact</span>
							</li>
							<li>
								<span role="menuitem">Articles</span>
							</li>
							<li>
								<span>FAQ</span>
							</li>
							<li>
								<span role="menuitem">Advertising</span>
							</li>
							<li>
								<span role="menuitem">Careers</span>
							</li>
						</ul>
					</li>
				</ul>
			</header>
		);
	}
}

export default Header;