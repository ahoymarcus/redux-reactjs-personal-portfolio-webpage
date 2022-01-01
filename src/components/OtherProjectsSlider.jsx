import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//import { webdesignProjects } from '../data/webdesignProjects';



const OtherProjects = ({ otherProjects }) => {
	const [ index, setIndex ] = useState(0);
	
	const { title, image, urlApp, urlRepository, description, tags } = otherProjects[index];
	
	//console.log(tags);
	
	const checkNumber = (number) => {
    if (number > otherProjects.length - 1) {
      return 0;
    }
    if (number < 0) {
      return otherProjects.length - 1;
    }
    return number;
  };
	
	
	const nextProject = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevProject = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
	
	
	return (
		<div >
			<div className="btn-container">
				<button className="prev-btn" onClick={prevProject}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextProject}>
					<FaChevronRight />
				</button>
			</div>
			
			<div className="other-projects">	
				<article className="other-projects-img-container">
					<img src={image} alt={`projeto ${title}`} className="other-project-img" />
				</article>
				<article className="other-projects-info">
					<h4>{title}</h4>
					<p>
						{description}
					</p>
					<div className="tags">
						<ul>
							{tags.map((tag, index) => {
								return <p key={index} style={{color: 'rgb(36 151 36)'}}>#{tag}</p>;
							})}
						</ul>
					</div>
					<div className="repositories">
						<h6><a target="_blank" href={urlApp}>NetLify App</a></h6>
						<h6><a target="_blank" href={urlRepository}>Github repository</a></h6>
					</div>
					
				</article>
			</div>
		</div>
	);
};



export default OtherProjects


