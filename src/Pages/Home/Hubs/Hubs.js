import React from 'react';
import hub1 from '../../../images/experts/expert-1.jpg';
import hub2 from '../../../images/experts/expert-2.jpg';
import hub3 from '../../../images/experts/expert-3.jpg';
import hub4 from '../../../images/experts/expert-4.jpg';
import hub5 from '../../../images/experts/expert-5.jpg';
import hub6 from '../../../images/experts/expert-6.png';
import Hub from '../Hub/Hub';

const hubs = [
    {_id: 1, name: 'London, UK', img: hub1},
    {_id: 2, name: 'Los Angeles, USA', img: hub2},
    {_id: 3, name: 'Sydney, Australia', img: hub3},
    {_id: 4, name: 'Dubai, UAE', img: hub4},
    {_id: 5, name: 'Mumbai, India', img: hub5},
    {_id: 6, name: 'Milan, Italy', img: hub6},
]

const Hubs = () => {
    return (
        <div id='hubs' className='container'>
            <h2 className='mt-5 mb-3 text-center text-info'>Our Other Hubs:</h2>
            <div className='row'>
                {
                    hubs.map(hub => <Hub key={hub._id} hub={hub}>

                    </Hub>)
                }
            </div>
        </div>
    );
};

export default Hubs;