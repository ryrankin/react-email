import React from 'react';
import {Link} from 'react-router';

export default function SpamEmail(props){
	return (
		</div className="EmailBox">
			To: {props.to} <br/>
			From: {props.from} <br/>
			<Link to={'/spam/' + props.id}>
			Title: {props.title} </Link>
		</div>
		);
	};