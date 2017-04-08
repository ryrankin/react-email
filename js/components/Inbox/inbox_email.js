import React from 'react';
import {Link} from 'react-router';

export default function InboxEmail(props){
	return (
		<div className="EmailBox">
			To: {props.to} </br>
			From: {props.from} </br>
			<Link to={'/' + props.id}>
			Title: {props.title} </Link>
		</div>
		);
};