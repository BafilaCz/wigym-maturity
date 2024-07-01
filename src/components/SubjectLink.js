import { Link } from 'react-router-dom'
import "./SubjectLink.css"

const SubjectLink = (props) => {

    const subject = props.subject
    const subjectCapitalized = subject.charAt(0).toUpperCase() + subject.slice(1)
    const icon = props.icon

    return(
        
        <Link to={`/${subject}`} className="subjectLink" id={subject}>{icon} {subjectCapitalized}</Link>
    )
}

export default SubjectLink