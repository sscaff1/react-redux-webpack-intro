import React from 'react';
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	MarkdownSlides,
	CodePane,
	S,
	Image
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import JSXExample from '../assets/JSXExample';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
	thinkingReact: require('../assets/thinking-react.png'),
	dataflow: require('../assets/data-event-flow.png')
};

preloader(images);

const theme = createTheme(
	{
		primary: '#1F2022',
		secondary: '#fff',
		tertiary: '#03A9FC',
		quartenary: '#CECECE'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['fade', 'slide']}
				transitionDuration={500}
				theme={theme}
				contentWidth={1600}
				contentHeight={1200}
			>
				<Slide>
					<Heading fit caps lineHeight={1} textColor="secondary">
						React, Redux, Webpack
					</Heading>
					<Heading size={3} caps textColor="secondary">
						Introduction
					</Heading>
				</Slide>
				<Slide bgColor="tertiary">
					<Heading size={1} textColor="secondary">
						Agenda
					</Heading>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<List>
							<ListItem>Brief Overviews</ListItem>
							<List style={{ marginLeft: 60 }}>
								<ListItem>Webpack</ListItem>
								<ListItem>React</ListItem>
								<ListItem>Redux</ListItem>
							</List>
							<ListItem>Thinking in React</ListItem>
							<ListItem>JSX</ListItem>
							<ListItem>Styling with style-jsx</ListItem>
							<ListItem>Writing Components</ListItem>
							<List style={{ marginLeft: 60 }}>
								<ListItem>Functional</ListItem>
								<ListItem>Class Components</ListItem>
							</List>
						</List>
						<List>
							<ListItem>React API</ListItem>
							<ListItem>Event Handling</ListItem>
							<ListItem>Iterations</ListItem>
							<ListItem>Data Flow</ListItem>
							<ListItem>Maintaining State → Redux</ListItem>
							<ListItem>Redux</ListItem>
							<List style={{ marginLeft: 60 }}>
								<ListItem>Action Creators</ListItem>
								<ListItem>Reducers</ListItem>
								<ListItem>Store</ListItem>
							</List>
						</List>
					</div>
				</Slide>
				<Slide>
					<Heading caps>Webpack</Heading>
					<Text textColor="secondary">A way to bundle your js, css, images,</Text>
					<Text textColor="secondary">and everything else you might use</Text>
				</Slide>
				<CodeSlide
					lang="js"
					textSize={20}
					code={require('raw-loader!../assets/webpack.example')}
					ranges={[
						{ loc: [0, 0], title: 'Step through major areas of a config' },
						{ loc: [4, 10], title: 'Entry' },
						{ loc: [10, 15], title: 'Output' },
						{ loc: [15, 22], title: 'DevServer' },
						{ loc: [22, 43], title: 'Module Rules' },
						{ loc: [43, 44], title: 'Plugins' }
					]}
					showLineNumbers={false}
				/>
				<Slide>
					<Heading>React</Heading>
					<Text textColor="secondary">
						A JavaScript <S type="bold">library</S> for building user interfaces
					</Text>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>Declarative</ListItem>
							<ListItem>Isomorphic</ListItem>
							<ListItem>Component-Based Architecture</ListItem>
							<ListItem>Very fast - Virtual DOM</ListItem>
							<ListItem>Small API</ListItem>
							<ListItem>One way data-flow</ListItem>
						</List>
					</div>
				</Slide>
				<Slide>
					<Heading>Redux</Heading>
					<Text textColor="secondary">A state management library</Text>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>An opinionated architecture for your app</ListItem>
							<ListItem>Great developer tools</ListItem>
							<ListItem>Tiny (2kbs)</ListItem>
							<ListItem>Single source of truth</ListItem>
							<ListItem>State is read-only</ListItem>
							<ListItem>Changes are made with pure functions</ListItem>
						</List>
					</div>
				</Slide>
				<Slide>
					<Heading>Thinking in React</Heading>
					<Text textColor="secondary">Each box below is a reusable component</Text>
					<Image src={images.thinkingReact.replace('/', '')} />
				</Slide>
				<Slide>
					<Heading>JSX</Heading>
					<Text textColor="secondary">A syntax extension for JavaScript</Text>
					<CodePane lang="js" source={require('raw-loader!../assets/JSX.example')} />
					<JSXExample />
				</Slide>
				<Slide>
					<Heading>Styling with style-jsx</Heading>
					<Text textColor="secondary">Component friendly CSS support for JSX</Text>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>Full CSS support</ListItem>
							<ListItem>Tiny (2kbs)</ListItem>
							<ListItem>Automatic vendor prefixing</ListItem>
							<ListItem>Works like the depreciated {`<style scoped>`}</ListItem>
						</List>
					</div>
					<Text textColor="secondary">
						If you find yourself needing SCSS, you're probably not thinking in React!
					</Text>
				</Slide>
				<Slide>
					<Heading>Writing Components</Heading>
					<Text textColor="secondary">((JSX !== HTML) && (JSX === JS)) === true</Text>
					<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
						<div>
							<Text textColor="secondary">Functional</Text>
							<CodePane
								textSize={16}
								lang="js"
								source={require('raw-loader!../assets/Functional.example')}
							/>
						</div>
						<div>
							<Text textColor="secondary">Class Components</Text>
							<CodePane textSize={16} lang="js" source={require('raw-loader!../assets/JSX.example')} />
						</div>
					</div>
				</Slide>
				<Slide>
					<Heading>React API</Heading>
					<Text textColor="secondary">Component Lifecycle</Text>
					<List>
						<ListItem>constructor(props: object)</ListItem>
						<ListItem>componentWillMount() - mostly depreciated</ListItem>
						<ListItem>componentDidMount()</ListItem>
						<ListItem>componentWillReceiveProps(nextProps: object)</ListItem>
						<ListItem>shouldComponentUpdate(nextProps: object, nextState: object)</ListItem>
						<ListItem>componentWillUpdate(nextProps: object, nextState: object)</ListItem>
						<ListItem>componentDidUpdate(prevProps: object, prevState: object)</ListItem>
						<ListItem>componentWillUnmount()</ListItem>
					</List>
					<Text textColor="secondary">State</Text>
					<Text textColor="tertiary">
						<List>
							<ListItem>State should be treated as immutable</ListItem>
							<ListItem>
								Use setState to change the components state setState(setter: func | object, callback:
								func)
							</ListItem>
						</List>
					</Text>
				</Slide>
				<Slide>
					<Heading>Event Handling</Heading>
					<CodePane lang="js" source={require('raw-loader!../assets/JSX.example')} />
					<JSXExample />
				</Slide>
				<Slide>
					<Heading>Iterations</Heading>
					<Text textColor="secondary">Using functional JS</Text>
					<CodePane lang="js" source={require('raw-loader!../assets/iteration.example')} />
				</Slide>
				<Slide>
					<Heading>Data Flow</Heading>
					<Text textColor="secondary">One Way Data Flow</Text>
					<Image src={images.dataflow.replace('/', '')} />
				</Slide>
				<Slide>
					<Heading>Maintaining State → Redux</Heading>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>Large component trees can lead to complexities in maintaining state</ListItem>
							<ListItem>
								Multiple ways to implement state maintenance making it difficult for team work
							</ListItem>
							<ListItem>
								Application state (especially in large apps) can be difficult to visualize
							</ListItem>
							<ListItem>
								How do you work on large apps with a team and maintain state in a predictable manner?
								One answer is Redux
							</ListItem>
						</List>
					</div>
				</Slide>
				<Slide>
					<Heading>Redux</Heading>
					<Text textColor="secondary">A state management library</Text>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>An opinionated architecture for your app</ListItem>
							<ListItem>Great developer tools</ListItem>
							<ListItem>Tiny (2kbs)</ListItem>
							<ListItem>Single source of truth</ListItem>
							<ListItem>State is read-only</ListItem>
							<ListItem>Changes are made with pure functions</ListItem>
						</List>
					</div>
				</Slide>
				<Slide>
					<Heading>Action Creators</Heading>
					<Text textColor="secondary">
						Actions are payloads of information that send data from your application to your store. They are
						the only source of information for the store. You send them to the store using store.dispatch().
					</Text>
					<CodePane textSize={16} lang="js" source={require('raw-loader!../assets/action-creator.example')} />
				</Slide>
				<Slide>
					<Heading>Reducers</Heading>
					<Text textColor="secondary">
						Reducers respond to actions by producing a new state. State is never mutated by the reducer.
						Reducers create a brand new application state.
					</Text>
					<CodePane textSize={16} lang="js" source={require('raw-loader!../assets/reducer.example')} />
				</Slide>
				<Slide>
					<Heading>Store</Heading>
					<Text textColor="secondary">
						Stores hold your application state. There is exactly 1 store in your application.
					</Text>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<List>
							<ListItem>Holds application state</ListItem>
							<ListItem>Allows access to state via getState()</ListItem>
							<ListItem>Allows state to be updated via dispatch(action)</ListItem>
							<ListItem>Registers listeners via subscribe(listener)</ListItem>
							<ListItem>
								Handles unregistering of listeners via the function returned by subscribe(listener)
							</ListItem>
						</List>
					</div>
					<Text textColor="secondary">
						The last two bullets are not often used in React application in favor of React's unidirectional
						data-flow model
					</Text>
				</Slide>
				<CodeSlide
					lang="js"
					textSize={20}
					code={require('raw-loader!../assets/store.example')}
					ranges={[
						{ loc: [0, 0], title: 'Step through overall use in React Apps' },
						{ loc: [5, 14], title: 'Configure Store' },
						{ loc: [8, 11], title: 'Configure Middleware' },
						{ loc: [11, 12], title: 'Return Store' },
						{ loc: [20, 21], title: 'Import configureStore function' },
						{ loc: [23, 24], title: 'Create your store' },
						{ loc: [26, 29], title: 'Wrap your app with the store using Provider' },
						{ loc: [35, 36], title: 'Import connect from react-redux' },
						{ loc: [235, 238], title: 'Define how state will be mapped to your component' },
						{ loc: [239, 259], title: 'Define how dispatch will be mapped to your component' },
						{ loc: [260, 261], title: 'Export your connected component' },
					]}
					showLineNumbers={true}
				/>
				<Slide bgColor="tertiary">
					<Heading size={1} textColor="secondary">
						Questions
					</Heading>
				</Slide>
			</Deck>
		);
	}
}
