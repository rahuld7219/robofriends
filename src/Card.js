//this file name is capitalized by convention as it is a react component
import React from 'react';

const Card = (props) => {
    const { name, email, id} = props; // can be destructured directly as function parameter
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		{/* used tachyons CSS classes 
			tc=>text center
			dib=>display inline block
			grow=>	
					-moz-osx-font-smoothing:grayscale
					backface-visibility:hidden
					transform:translateZ(0)
					transition:transform 0.25s ease-out
			bw=>border width
			shadow-5=> box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )
		*/}
			<img src={`https://robohash.org/${id}?size=200x200`} alt="a robot"/>
			<div>
				<h2>{name}</h2>{/*we can also write it as props.name*/}
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;