import React from 'react';

const Badge = (props) => {
  const [data, setData] = React.useState('default value');

  React.useEffect(()=>{
    console.log('use effect');
    setData('updated value @@@@@@@@@@@@@@@@@@@@@@@');
  },[])

   return (
    <div className={`badge ${!props.value ? 'badge--none' :''} `}>
      <h4 className="heavy">{props.value || 0}</h4>
      {data}
    </div>
   );
}

export default Badge;