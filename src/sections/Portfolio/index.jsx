import React, {
	PureComponent
} from "react";

import styled from 'styled-components';

import {
	Button as Label,
	Header,
	Grid,
	Image,
} from 'semantic-ui-react';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

import {
	PORTFOLIOS as portfolios
} from 'resume';

const AutoPlaySwipeableViews = styled(autoPlay(SwipeableViews))`
	width: 100vw;
	.react-swipeable-view-container {
		min-height: 360px;
	}
`;

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: #F9F9F9;
`

export default class Portfolio extends PureComponent {
	render() {
		return(
			<StyledContainer id={this.props.id}>
				<br/>
				<Header as="h2">
					PORTFOLIO
				</Header>
				
				<hr className='section-decorator'/>

				<AutoPlaySwipeableViews autoplay
					animateHeight={false} enableMouseEvents interval={4500}
					slideStyle={{
						width: '100vw',
						display: 'flex',
						justifyContent: 'center',
						padding: '1em',
						overflow: 'hidden'
					}}>
					{
						portfolios.map(({name, type, color, description, image, technology, url }, i) =>

						<Grid container columns={2} key={i}>
							<Grid.Column computer={7} tablet={7} mobile={16} floated={'right'}>
								<Image size='medium' rounded src={image}/>
							</Grid.Column>

							<Grid.Column computer={9} tablet={9} mobile={16} floated={'left'}>
								<Header as='h2'>
									{name}
									<Header sub>
										{type}
									</Header>
								</Header>
								<p>
									{description}
								</p>

								<Header>
									Technology
								</Header>
								<p>
									{technology}
								</p>
								<Label as='a' labelPosition='left' color='teal' size={'huge'} href={url} rel="noopener noreferrer" target="_blank" icon='external' content='Link' />

							</Grid.Column>
						</Grid>
					)}
				</AutoPlaySwipeableViews>
			</StyledContainer>
		);
	}
}
