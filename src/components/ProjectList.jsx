import ProjectItem from './ProjectItem';

// styles
import './ProjectList.css'




const ProjectList = () => {
	const renderItem = list.map((item, index) => {
		return <ProjectItem key={index} {...item} type={type} />
	});
	
	
	return (
		<div 
			className={`projects ${type}-section`} 
			aria-label={`${type} projects`}
		>
			<h3>{type} projects</h3>
			
			<div className="projects-container-grid">
				{renderItem}
			</div>
		</div>		
	);
};



export default ProjectList



