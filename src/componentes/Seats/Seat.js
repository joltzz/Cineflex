import { useState } from "react";

function Seat({classSeat, name, id , handle}){
    const [isSelected, setIsSelected]=useState(classSeat);

    function choosenSeat(selectedSeat, idSelectedSeat){
        if(selectedSeat=== 'circle available'){
            if(idSelectedSeat==='circle selected'){
                handle(id,false);
                setIsSelected('circle available');
            }
            else{
                handle(id, true);
                setIsSelected('circle selected');
            }
        }
        else{
            alert('Este assento não está disponível!');
        }
    }
    return (
        <div className={isSelected} onClick={()=>choosenSeat(classSeat,isSelected)}>
            {name}
        </div>
    );
}

export default Seat;
