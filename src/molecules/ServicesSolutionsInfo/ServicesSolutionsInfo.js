import './ServicesSolutionsInfo.css';
import { useEffect, useState } from 'react';

export default function ServicesSolutionsInfo (props){
    const [ending, setEnding] = useState();
    function checkEnding(num, one, fiveToNine, secondToFour) {
            num = Number(num)
            if (num<=9 && num>=0) {
                let smNum = num;
                if (smNum===1){
                    return one;
                }else if (smNum>=2 && smNum<=4){
                    return secondToFour
                }else{
                    return fiveToNine;
                }
            }else if (num>9){
                let arr = num.split("")
                let smNum = arr.splice(arr.length-1, 1)
                if (smNum[0]===1 && smNum[1]<=4 && smNum[1]>=0){
                    return fiveToNine;
                }else{
                    if (smNum[1]===1){
                        return one;
                    }else if (smNum[1]>=2 && smNum[1]<=4){
                        return secondToFour
                    }else{
                        return fiveToNine;
                    }
                }
            }
            
    }
    useEffect(()=>{
        setEnding(checkEnding( props.item.deadline, "и", "ь", "ь"));
    },[])
    
    return (
        <div className="services-solutions-info">
            {props.item.deadline?(
            <div className='services-solutions-info__container'>
                <h4 className="services-solutions-info__title">{props.item.title}</h4>
                <h4 className="services-solutions-menu__deadline">от {props.item.deadline} недел{ending}</h4>
            </div>):(
                <h4 className="services-solutions-info__title">{props.item.title}</h4>
            )}
            <p className="services-solutions-info__subtitle" style={{textAlign: 'justify',color:'#C4C4C4'}}>{props.item.subtitle}</p>
        </div>
    )
}