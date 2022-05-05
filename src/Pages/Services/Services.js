import React from 'react';
import security from '../../../src/images/services/security.jpg';
import support from '../../../src/images/services/support.jpg';
import delivery from '../../../src/images/services/delivery.jpg';
import rating from '../../../src/images/services/rating.jpg';
import Service from '../Service/Service';

const services = [
    {_id: 1, name: 'Unlimited Support', description: 'You can easily contact with us and get the support. We only live for giving you the best support. Its our responsibility not yours.', img: support },
    {_id: 2, name: 'Speedy Delivery', description: "We promise you to take the products from you within 24 hours. It doesn't matter wherever you are, we'll take care of it", img: delivery },
    {_id: 3, name: 'Encrypted Security', description: "The securest door in the universe. Hackers don't have the power to crack it. Give your passwords to us, you can sleep now.", img:security },
    {_id: 4, name: 'Customer Satisfaction', description: "Thousands of people have trusted us over the years and we have hardly disappointed them. Our customers are our topmost priority.", img:rating },
    
]

const Services = () => {
    return (
        <div className='container'>
            <h2 className='mt-5 mb-3 text-center text-info'>Why should you trust us?</h2>
            <div className='row'>
                {
                    services.map(service => <Service key={service._id} service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;