import React from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'


import {
	NavLink
} from "react-router-dom";

import styled from "styled-components";

import {
	HeaderContainer
} from 'utils/Layout';

const StyledHeader = styled(HeaderContainer)
`
	top: 0;
`;

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class extends React.Component {
	state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })


	render() {
		const { visible } = this.state

		return(
			<StyledHeader>
					{ visible ? <FixedMenu /> : null }

				 <Visibility
					 onBottomPassed={this.showFixedMenu}
					 onBottomVisible={this.hideFixedMenu}
					 once={false}
				 >
					 <Segment
						 inverted
						 textAlign='center'
						 style={{ minHeight: '100vh', padding: '1em 0em' }}
						 vertical
					 >
						 <Container>
							 <Menu inverted pointing secondary size='large'>
								 <Menu.Item as='a' active>Home</Menu.Item>
								 <Menu.Item as='a'>Work</Menu.Item>
								 <Menu.Item as='a'>Company</Menu.Item>
								 <Menu.Item as='a'>Careers</Menu.Item>
								 <Menu.Item position='right'>
									 <Button as='a' inverted>Log in</Button>
									 <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
								 </Menu.Item>
							 </Menu>
						 </Container>

						 <Container text>
							 <Header
								 as='h1'
								 content='Imagine-a-Company'
								 inverted
								 style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
							 />
							 <Header
								 as='h2'
								 content='Do whatever you want when you want to.'
								 inverted
								 style={{ fontSize: '1.7em', fontWeight: 'normal' }}
							 />
							 <Button primary size='huge'>
								 Get Started
								 <Icon name='right arrow' />
							 </Button>
						 </Container>
					 </Segment>
				 </Visibility>
			</StyledHeader>
		);
	}
}
