import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<React.Fragment>
			<input
				className='pa3 b--green bg-lightest-blue mb3'
				type='search'
				placeholder='search robots'
				onChange={searchChange}
			/>
		</React.Fragment>
	)
}

export default SearchBox