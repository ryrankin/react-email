import React from 'react';
import InboxEmail from '.inbox_email';

export default function InboxEmails(props){
	const inbox = Object.keys(props.emails.inbox).map((emailID, index) =>{
	const email = props.emails.inbox[emailID];
	return (
		<li key={index}>
				InboxEmail id={email.id}
				from={email.from}
				to={email.to}
				title={email.title}/>
		</li>
		);
	});

	return (
		<ul>
			{inbox}
		</ul>
	);
};