import { Palavra } from '../../data/entities/Palavra';
import ListaDicionario from '../../presentation/components/ListaDicionario';
import style from "../../styles/Home.module.css";


export default function Dicionario({ filteredList } : {filteredList: Palavra[]}) {
  
  return (
    <div className={style.dicionarioPrincipal}>
      <ListaDicionario filteredList={filteredList} doOnClick={() => null}/>
    
    </div>
  );
}