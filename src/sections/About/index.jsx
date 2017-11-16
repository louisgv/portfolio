import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Label,
	Icon,
	Header,
	Segment,
	Grid,
	Image,
	Responsive,
	List
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

import {
	INTERESTS as interests
} from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
width: 100vw;
padding: 5vh;
background: #222;
`

export default class About extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>
				<Grid container centered padded container columns={2} verticalAlign={'middle'}>
					<Grid.Column computer={4} tablet={6} mobile={16} floated={'right'}>
						<Responsive as={Image}
									size='medium' rounded src='selfid.jpg'
									minWidth={Responsive.onlyTablet.minWidth} />

						<Responsive as={Image}
									size='medium' rounded src='selfid-small.jpg'
									{...Responsive.onlyMobile}/>

					</Grid.Column>

					<Grid.Column textAlign={"justified"} stretched computer={8} tablet={10} mobile={16} floated={'left'}>
						<Header as='h2' inverted>
							About Me
						</Header>

						<Segment inverted>
							<p>
								I automate my job as soon and as much as possible.
							</p>
						</Segment>
						<Header inverted>
							Interests
						</Header>
						<List>
							{
								interests.map(({name, color, icon, url}, i) =>
									<List.Item key={i}>
										<Label as='a' color={color} size={'huge'} href={url}>
											<Icon name={icon}/>
											{name}
										</Label>
									</List.Item>
								)
							}
						</List>

						<Header inverted>
							Contact Details
						</Header>

						<List>
							<List.Item>
								<Label as='a' color='blue' size={'huge'} href='https://en.wikipedia.org/wiki/Seattle' target='_blank' icon='map' content='Seattle, Washington'/>
							</List.Item>

							<List.Item>
								<Label as='a' color='teal' size={'huge'} href='mailto:lgvichy@gmail.com' icon='envelope' content='lgvichy@gmail.com' />
							</List.Item>
						</List>

					</Grid.Column>
				</Grid>


			</StyledContainer>
		);
	}
}
