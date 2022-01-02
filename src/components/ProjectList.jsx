import ProjectItem from './ProjectItem';
import { useSelector } from 'react-redux';

// styles
import './ProjectList.css'



const ProjectList = ({ type }) => {
	const frontendProjects = useSelector((state) => state.allProjects.frontend);
	const backendProjects = useSelector((state) => state.allProjects.backend);
	
	
	
	// const resultFront = frontendProjects.map((project, index) => (
				// <ProjectItem key={index} type={type} data={project} />
			// ));
	// const resultBack = backendProjects.map((project, index) => (
				 // <ProjectItem key={index} type={type} data={project} />
			// ));
			
			
	const renderList = (type) => {
		if (Object.keys(`${type}Projects`).length === 0) {
			return <p>Não há projetos</p>;
		} else if (type === 'frontend') { 
			
			return frontendProjects.map((project, index) => (
					<ProjectItem key={index} type={type} data={project} />
				));
		} else if (type === 'backend') {
			
			return backendProjects.map((project, index) => (
				  <ProjectItem key={index} type={type} data={project} />
				));
		}
	};
	
	
	return (
		<div 
			className={`projects ${type}-section`} 
			aria-label={`${type} projects`}
		>
			<h3>{type} projects</h3>
			
			<div className="projects-container-grid">
				{renderList}
			</div>
		</div>		
	);
};



export default ProjectList



