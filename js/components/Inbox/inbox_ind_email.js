import React from 'react';
import Emails from '../../SeedEmails';

export default function InBoxIndEmail(){
	const emails = {Emails};
	const email = emails.inbox[index];
	return (
		<div className="OneEmail">
			To: {email.to} </br>
			From: {email.from} </br>
			Title: {email.title} </br>
			{email.content}
		</div>
	);
};