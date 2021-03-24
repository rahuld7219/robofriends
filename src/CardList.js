//this file name is capitalized(each word) by convention as it is a react component
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardsArray = robots.map( user => {
		return <Card 
				key={user.id} 
				name={user.name} 
				id={user.id} 
				email={user.email} 
				/>
	});
	
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;