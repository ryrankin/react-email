import React from 'react';
import Inbox from './inbox';
import Emails from '../../SeedEmails';

export default function InboxContainer(props){
	return (
			<Inbox emails={Emails} />
			)
};