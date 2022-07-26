import { Palavra } from '../../data/entities/Palavra';
import ListaDicionario from '../../presentation/components/ListaDicionario';



export default function Dicionario({ filteredList } : {filteredList: Palavra[]}) {
  
  return (
    <>
    <ListaDicionario filteredList={filteredList} doOnClick={() => null}/>
    
    </>
  );
}