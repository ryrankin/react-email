import React from 'react';
import {Link} from 'react-router';

export default function App(props){
	return (
			<div>
				<nav className="sidenav">
					<ul>
						<li><Link to={'/'}>Inbox</Link></li>
						<li><Link to={'/spam'}>Spam</Link></li>
					</ul>
				</nav>
				<div className="mailbox">
					{props.children}
				</div>
			</div>
		);
}