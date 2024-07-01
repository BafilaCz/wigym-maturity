import "./SubjectLink.css"

const SubjectLink = (props) => {

    const subject = props.subject
    const subjectCapitalized = subject.charAt(0).toUpperCase() + subject.slice(1)
    const icon = props.icon

    return(
        
        <a href={subject} className="subjectLink" id={subject}>{icon} {subjectCapitalized}</a>
    )
}

export default SubjectLink