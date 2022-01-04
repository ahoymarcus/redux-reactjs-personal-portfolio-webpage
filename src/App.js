import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
	setFrontendProjects,
	setBackendProjects,
	setVanillaJsProjects,
	setWebDesignProjects,
	setMainTags,
	setAllProjects
} from './redux/actions/projectsActions';

// styles
import './App.css'; 

// components
import Navbar from './components/Navbar';
import SelectSection from './components/SelectSection';
import { MemoizedAggregationTab } from './components/AggregationTab';
import ProjectList from './components/ProjectList';
import OtherProjectsSlider from './components/OtherProjectsSlider';
import Footer from './components/Footer';

// dados
import { frontendProjects } from './data/frontendProjects';
import { backendProjects } from './data/backendProjects';
import { vanillaJSProjects } from './data/vanillaJSProjects';
import { webdesignProjects } from './data/webdesignProjects';
import { mainTags } from './common/main-tags';


 
function App() {
	const dispatch = useDispatch();


	dispatch(setFrontendProjects(frontendProjects));
	dispatch(setBackendProjects(backendProjects));
	dispatch(setVanillaJsProjects(vanillaJSProjects));
	dispatch(setWebDesignProjects(webdesignProjects));
	dispatch(setAllProjects([...frontendProjects, ...backendProjects, ...vanillaJSProjects, ...webdesignProjects]));
	
	dispatch(setMainTags(mainTags));
	
	
	/* REFERENTE AO COMPONENTE SELECTEDSECTION */
	const selectedSection = useSelector((state) => state.selectedSection.selectedSection);
	console.log(selectedSection);
	
	
  return (
    <>
      <header>
				<Navbar />
			</header>
      <main>
				<section 
					id="welcome-section" 
					className="welcome-section" 
					aria-label="Welcome"
				>
					<h1>Ahoooy, there! My name is Marcus Richa</h1>
					<p>Welcome to my Portfolio Webpage.</p>
				</section>
				
				<section 
					id="select-projects-section"
					className="select-section"
					aria-label="Aggregation Information"
				>
					<SelectSection />
				</section>
				
				<section 
					id="aggregation"
					className="aggregation"
					aria-label="Aggregation Information"
				>
					<MemoizedAggregationTab />
				</section>
				
				{selectedSection === 'All' || selectedSection === 'Frontend' ? 
					<section 
						id="frontend-projects"
						className="projects" 
						aria-label="Web Development Projects"
					>
						<ProjectList type="frontend" />
					</section>
				 : null}
				
				{selectedSection === 'All' || selectedSection === 'Backend' ? 
					<section 
						id="backend-projects"
						className="projects" 
						aria-label="Web Development Projects"
					>	
						<ProjectList type="backend" />
					</section>
				 : null}
				
				{selectedSection === 'All' || selectedSection === 'VanillaJS' ? 
					<section 
						id="other-projects" 
						className="other-projects" 
						aria-label="Web Development Projects"
					>
						<OtherProjectsSlider />
					</section>
				 : null}
				
				
				<section 
					id="contact" 
					className="contact" 
					aria-label="Contacts"
				>
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



