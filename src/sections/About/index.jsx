import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Button as Label,
	Icon,
	Header,
	Segment,
	Grid,
	Image,
	Responsive,
	List,
	Divider
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
				<br/>
				<Header as='h2' inverted>
					ABOUT ME
				</Header>

				<hr className='section-decorator'/>

				<Grid container centered padded columns={2} verticalAlign={'middle'}>
					<Grid.Column computer={4} tablet={6} mobile={16} floated={'right'}>
						<Responsive as={Image}
									size='medium' rounded src='selfid.jpg'
									minWidth={Responsive.onlyTablet.minWidth} />

						<Responsive as={Image}
									size='medium' rounded src='selfid-small.jpg'
									{...Responsive.onlyMobile}/>

					</Grid.Column>

					<Grid.Column textAlign={"justified"} stretched computer={8} tablet={10} mobile={16} floated={'left'}>

						<Segment inverted>
							<p>
								I automate my job as soon and as much as possible.
							</p>
						</Segment>
						{/* <Header inverted>
							Interests
						</Header> */}
						<Divider horizontal inverted>Interests</Divider>
						<List animated>
							{
								interests.map(({name, color, icon, url}, i) =>
									<List.Item key={i}>
										<Label as='a' fluid color={color} size={'huge'} href={url} labelPosition='left'
											icon={icon} content={name}/>
									</List.Item>
								)
							}
						</List>

						{/* <Header inverted>
							Contact Details
						</Header> */}
						<Divider horizontal inverted>Contact Details</Divider>

						<List animated>
							<List.Item>
								<Label as='a' fluid color='blue' labelPosition='left' size={'huge'} href='https://en.wikipedia.org/wiki/Seattle' target='_blank' icon='map' content='Seattle, Washington'/>
							</List.Item>

							<List.Item>
								<Label as='a' fluid color='teal' labelPosition='left' size={'huge'} href='mailto:lgvichy@gmail.com' icon='envelope' content='lgvichy@gmail.com' />
							</List.Item>
						</List>

					</Grid.Column>
				</Grid>


			</StyledContainer>
		);
	}
}
