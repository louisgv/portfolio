import React from "react";

import {
	Header,
	Responsive
} from 'semantic-ui-react';


const HackerBanner =({anchorClass})=> (
	<a target="_blank" rel="noopener noreferrer" className={anchorClass} href="http://catb.org/jargon/html/H/hacker.html">
		<Header
			as='h2'
			content={'#hacker'}
			inverted
			style={{ fontSize: '1.7em', fontWeight: 'normal' }}
		/>
	</a>
)

export const MobileHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow mobile"
		{...Responsive.onlyMobile}
	/>
)

export const DesktopHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow"
		minWidth={Responsive.onlyTablet.minWidth}
	/>
)
