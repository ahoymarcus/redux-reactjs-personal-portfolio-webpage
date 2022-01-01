import { useState } from 'react';



const ProjectItem = ({ type, title, image, urlApp, urlRepository, description, tags }) => {
	const [ active, setActive ] = useState('description');
	const [ descBtnText, setDescBtnText ] = useState(' show more');
	const [ descText, setDescText ] = useState(description.slice(0, 130) + '...');
		
	
	
	let href;
	if (type === 'frontend') {
		href = urlApp;
	} else if (type === 'backend') {
		href = urlRepository;
	}
		
	
	const handleClick = (btnInfo) => {
		setActive(btnInfo);
	};
	
	const renderInfo = () => {
		if (active === 'description') {
			return (
				<div className="info-content">
					<h4>Description</h4>
					<p>
						{descText} 
						<button onClick={toggleBtnText} className="btn-toggle-description" >
							{descBtnText}
						</button>
					</p>
				</div>
			);
		} else if (active === 'tags') {
			return (
				<div className="info-content">
					<h4>Tags</h4>
					<p>
						{tags.map((tag, index) => {
							return <span key={index} className="tag" >{tag} </span>;
						})}
					</p>
				</div>
			);
		}
	};
	
	const toggleBtnText = () => {
		if (descText === description) {
			setDescText(description.slice(0, 130) + '...');
			setDescBtnText(' Read More');
		} else {
			setDescText(description);
			setDescBtnText(' Show Less');
		}
	};
	
	
	
	return (
		<div className="project-item" >
			<a 
				target="_blank" 
				href={href}
				className="project-container"
			>
				<img className="project-icon" src={image} alt={`Projeto ${title}`} />
			</a>
			<article className="info-container">
				<div className="btn-container">
					<h4 className="tab-header" >
						<a 
							target="_blank" 
							href={href}
						>
							{title}
						</a>
					</h4>
					<button  
						onClick={() => handleClick('description')} 
						className="tab-header btn" 
						>
							description
						</button>
					<button 
						onClick={() => handleClick('tags')}
						className="tab-header btn" 
					>
						tags
					</button>
				</div>			
				{renderInfo()}
			</article>
		</div>
	);
};



export default ProjectItem



