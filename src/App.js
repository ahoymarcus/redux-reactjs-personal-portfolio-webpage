import React from 'react';
import { useDispatch } from 'react-redux';

import { 
	setFrontendProjects,
	setBackendProjects,
	setVanillaJsProjects,
	setWebDesignProjects
} from './redux/actions/projectsActions';

// styles
import './App.css'; 

// components
import Navbar from './components/Navbar';
import AggregationTab from './components/AggregationTab';
import ProjectList from './components/ProjectList';
import OtherProjectsSlider from './components/OtherProjectsSlider';
import Footer from './components/Footer';

import { frontendProjects } from './data/frontendProjects';
import { backendProjects } from './data/backendProjects';
import { vanillaJSProjects } from './data/vanillaJSProjects';
import { webdesignProjects } from './data/webdesignProjects';


 
function App() {
	const dispatch = useDispatch();


	dispatch(setFrontendProjects(frontendProjects));
	dispatch(setBackendProjects(backendProjects));
	dispatch(setVanillaJsProjects(vanillaJSProjects));
	dispatch(setWebDesignProjects(webdesignProjects));


  return (
    <>
      <header>
				<Navbar />
			</header>
      <main>
				<section 
					id="welcome-section" 
					aria-label="Welcome"
				>
					<h1>Ahoooy, there! My name is Marcus Richa</h1>
					<p>Welcome to my Portfolio Webpage.</p>
				</section>
				
				<section 
					id="aggregation"
					aria-label="Aggregation Information"
				>
					
					<AggregationTab />
				</section>
				
				<section 
					id="projects" 
					aria-label="Web Development Projects"
				>
					<h2>These are some of my projects</h2>
				
					<ProjectList type="frontend" />
					<ProjectList type="backend" />		
				</section>
				
				<section 
					id="other-projects" 
					aria-label="Web Development Projects"
				>
					<h2>Other Projects</h2>
					
					<OtherProjectsSlider />
					
					<h3>Vanilla JavaScript and Web Desing</h3>
						 
				</section>
				
				
				<section id="contact" aria-label="Contacts">
					<div className="contact-header">
						<h2>Jump on board skipper...</h2>
						<p>How do you take your coffee?</p>
					</div> 
					<div className="contact-links-container">
						<div className="contact-links">
							<a id="profile-link" target="_blank" href="https://www.linkedin.com/in/marcus-vinicius-richa-183104199/"><i className="fa fa-github" aria-hidden="true"></i> @Linkedin</a>
							<a id="profile-link" target="_blank" href="https://www.freecodecamp.org/ahoymarcus"><i className="fa fa-free-code-camp" aria-hidden="true"></i> @FreeCodeCamp</a>
							
						</div>
						<div className="contact-links">
							<a id="profile-link" target="_blank" href="https://github.com/ahoymarcus"><i className="fa fa-github" aria-hidden="true"></i> @GitHub</a>
							<a id="profile-link" target="_blank" href="https://web.digitalinnovation.one/home"><i className=""></i> @Digital-Innovation-One</a>
						</div>
					</div>
			
				</section>
				
			</main>
			
			<Footer />
    </>
  );
}



export default App;



