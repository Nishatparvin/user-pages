import React from 'react';

const Add = (props) => {
    const add=props.add;
    console.log(add)
    let total=0;
    for(let i=0;i<add.length;i++){
        const user=add[i];
        total=total+user.yearlyincome;
    }
    return (
        <div>
            <h4>Member summary:</h4>
            <p>Total Added:{add.length}</p>
            <p>Total Yearly Income:{total}</p>
            
        </div>
    );
};

export default Add;