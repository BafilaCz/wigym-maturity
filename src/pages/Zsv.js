import Question from "../components/Questions"
import dataZsv from "../data/dataZsv"
import SubjectName from "../components/SubjectName"
const Zsv = () => {


    return(
        <div>
            <SubjectName name={"Zsv"}></SubjectName>
            <Question data={dataZsv} subject={"zsv"}/>
            
        </div>
    )
}

export default Zsv
