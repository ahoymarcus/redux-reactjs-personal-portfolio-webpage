import ProjectItem from './ProjectItem';
import { useSelector } from 'react-redux';

// styles
import './ProjectList.css'



const ProjectList = ({ type }) => {
	const frontendProjects = useSelector((state) => state.allProjects.frontend);
	const backendProjects = useSelector((state) => state.allProjects.backend);
	
	
	
	if (Object.keys(`${type}Projects`).length === 0) {
		return <p>não há projetos disponíveis</p>;
	}
	
	
	return (
		<div 
			className={`projects ${type}-section`} 
			aria-label={`${type} projects`}
		>
			<h2>{type} projects</h2>
			
			<div className="projects-container-grid">
				{type === 'frontend' ? (
					frontendProjects.map((project, index) => {
						return <ProjectItem key={index} type={type} {...project} />
					})
				) : (
					backendProjects.map((project, index) => {
						return <ProjectItem key={index} type={type} {...project} />
					})
				)}
			</div>
		</div>		
	);
};



export default ProjectList



