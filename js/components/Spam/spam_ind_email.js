import React from 'react';
import Emails from '../../SeedEmails';

export default function SpamIndEmail(Emails) {
	const OneEmail = Object.keys(Emails.spam).map((emailID, index) => {
		const email = Emails.spam[emailID];
		return (
			<div className="OneEmail">
				To: {email.to} <br/>
				From: {email.from} <br/>
				Title: {email.title} <br/>
				{email.content}
			</div>
			)
	})

	return (
		<p>
			{OneEmail}
		</p>
	);
};