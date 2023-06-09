import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
	return (
		<React.Fragment>
		  {robots.map(user => {
		  	return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
		  })}
		</React.Fragment>
	)
}

export default CardList