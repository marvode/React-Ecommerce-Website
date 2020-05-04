import React from 'react';
import Category from '../components/Category';

import data from '../shopData';

const Homepage = () => {	
	return (
		<div>
			<Category data={data}/>
		</div>
	);
}

export default Homepage;
