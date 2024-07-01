import Question from "../components/Questions"
import dataDejepis from "../data/dataDejepis"
import SubjectName from "../components/SubjectName"
const Dejepis = () => {


    return(
        <div>
            <SubjectName name={"Dejepis"}></SubjectName>
            <Question data={dataDejepis} subject={"dejepis"}/>
            
        </div>
    )
}

export default Dejepis
