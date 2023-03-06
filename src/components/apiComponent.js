import React, {useEffect, useState} from 'react';
import Badge from './Badge';

const url = 'https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY';

const ApiComp = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('res is @@', res);
            setData(res);
        })
    }, []);

    return (
        <div className='apiComp'>
            <p>{data?.date} @@ {data?.id} </p>
            <p>{data?.resource?.dataset} @@ {data?.resource?.planet} </p>
            <Badge value={data?.service_version} />
            <hr />
            <img src={data?.url} width={200} height={200} />
        </div>
    );
};

export default ApiComp;