import React from 'react';

const Check = ({checked, onClick}) => {
    if(checked === true){
        return(
            <span className="material-icons text-success" 
                  style={{ cursor:"pointer" }}
                  onClick={ onClick }>
                check_circle
            </span>
        );
    }else{
        return(
            <span className="material-icons text-muted" 
                  style={{ cursor:"pointer" }}
                  onClick={ onClick }>
                check_circle
            </span>
        );
    }    
    
}

export default Check;