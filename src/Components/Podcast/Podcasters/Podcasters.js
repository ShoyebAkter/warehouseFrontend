import React from 'react';

const Podcaster = () => {
    const podCasters=[
        {
            "id":1,
            "img":'../../../image/pod/pod1.jpg'
        },
        {
            "id":2,
            "img":'../../../image/pod/pod2.jpg.opdownload'
        }
        
    ]
    return (
        <div>
            <h2>THE Car PODCAST: CHANGING LANES</h2>
            <p>"Changing Lanes” is the official podcast of BMW. Featuring new episodes each week,
                 in which our hosts take you on exciting journeys and talk about innovative technologies,
                 lifestyle, design, cars and more. Find and subscribe to Changing Lanes on all major
                  podcasting platforms</p>
            {
                podCasters.map(podCaster=> <Podcaster
                key={podCasters.id}
                podCaster={podCaster}
                ></Podcaster>)
            }
                
        </div>
    );
};

export default Podcaster;