import SubjectLink from "../components/SubjectLink"
import { FaLanguage } from "react-icons/fa6"
import { TbFlower } from "react-icons/tb"
import { GiSwordwoman } from "react-icons/gi"
import { GiAtom } from "react-icons/gi"
import { SlChemistry } from "react-icons/sl"
import { FaComputer } from "react-icons/fa6"
import { TbMathSymbols } from "react-icons/tb"
import { FaPerson } from "react-icons/fa6"
import { FaEarthAmericas } from "react-icons/fa6"
const Home = () =>{

    
    return(

        <div>

            <h1>Maturity Wigym</h1>

            <SubjectLink subject={"ivt"} icon={<FaComputer />}/>
            <SubjectLink subject={"zemepis"} icon={<FaEarthAmericas />}/>
            <SubjectLink subject={"biologie"} icon={<TbFlower />}/>
            <SubjectLink subject={"jazyky"} icon={<FaLanguage />}/>
            <SubjectLink subject={"zsv"} icon={<FaPerson />}/>
            <SubjectLink subject={"dejepis"} icon={<GiSwordwoman />}/>
            <SubjectLink subject={"chemie"} icon={<SlChemistry/>}/>
            <SubjectLink subject={"fyzika"} icon={<GiAtom />}/>
            <SubjectLink subject={"matematika"} icon={<TbMathSymbols />}/>
          
       
    


        </div>
    )
}


export default Home


