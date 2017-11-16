import React, {
	PureComponent
} from "react";

import styled from 'styled-components';

import {
	Header,
	Grid,
	Image,
	Divider,
	Responsive,
	Button,
	Icon
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: black;
`

export default class Portfolio extends PureComponent {
	render() {
		return(
			<StyledContainer id={this.props.id}>
				<br/>
				<Header as="h2" inverted>
					RESUME
				</Header>
				<hr className='section-decorator'/>

				<Button
					content='Read on google doc' icon='bookmark outline'
					labelPosition='left' inverted as='a' color='red' size={'huge'} rel="noopener noreferrer" target="_blank" href={'https://docs.google.com/document/d/1_UE4yS3lA81l3HdBwhKABcKXAJIO0HyDkcaOxNAjJPs/edit?usp=sharing'} />
				<Divider horizontal inverted>Or</Divider>
				<Responsive as={'iframe'}
						title='resume'
						style={{
							width:'80vw',
							height: '90vh'
						}}
						src="https://docs.google.com/document/d/e/2PACX-1vT9bDNvMitcORMx7nmL0-zOwDkTPMRZXuwR8OwN0j_1A1IMqm9hX4X5zY7_a27Os_CSGGnCJPkHwVYp/pub?embedded=true"
						minWidth={Responsive.onlyTablet.minWidth}/>
				<Responsive as={Header} inverted
						{...Responsive.onlyMobile}>
						Open this site on a desktop browser
				</Responsive>
			</StyledContainer>
		);
	}
}
