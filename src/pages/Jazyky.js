import Question from "../components/Questions"
import dataJazyky from "../data/dataJazyky"
import SubjectName from "../components/SubjectName"
const Jazyky = () => {


    return(
        <div>
            <SubjectName name={"Jazyky"}></SubjectName>
            <Question data={dataJazyky} subject={"jazyky"}/>
            
        </div>
    )
}

export default Jazyky
