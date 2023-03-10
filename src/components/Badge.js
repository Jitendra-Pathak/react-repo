import React from 'react';

const Badge = (props) => {
  const { heading = '', subHeading = '', img = '', desc = '', title = '', videoUrl = '' } = props;
  const [data, setData] = React.useState('Default Page Title');

  React.useEffect(() => {
    console.log('use effect');
    setData('updated Page Title');
  }, [])

  return (
    <div className={`badge `}>
      <h4 className="heavy">{data}</h4>
      <p className='title'>{title}</p>
      <h2>{heading}--{subHeading}</h2>
      <hr />
      <img alt='' src={img} />
      <p>From state##{desc}</p>

      <hr />

      <video width="200" height="200" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {data}
    </div>
  );
}

export default Badge;