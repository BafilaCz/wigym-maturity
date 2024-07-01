import Question from "../components/Questions"
import dataFyzika from "../data/dataFyzika"
import SubjectName from "../components/SubjectName"
const Fyzika = () => {


    return(
        <div>
            <SubjectName name={"Fyzika"}></SubjectName>
            <Question data={dataFyzika} subject={"fyzika"}/>
            
        </div>
    )
}

export default Fyzika
