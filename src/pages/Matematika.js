import Question from "../components/Questions"
import dataMatematika from "../data/dataMatematika"
import SubjectName from "../components/SubjectName"
const Matematika = () => {


    return(
        <div>
            <SubjectName name={"Matematika"}></SubjectName>
            <Question data={dataMatematika} subject={"matematika"}/>
            
        </div>
    )
}

export default Matematika
