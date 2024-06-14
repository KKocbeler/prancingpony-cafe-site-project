import React from 'react';
import './HomeOpportunity.css';
import { Link } from 'react-router-dom';

const HomeOpportunity = () => {
  return (
    <div className='opportunity container'>
        <div className='opportunity-main'>
            <div className="opport_left">
                <img loading='layz' src="/images/home/opportunity.jpg" alt="" />
            </div>
            <div className="opport_right">
                <h2>Beat the summer heat, sip on your iced coffee!</h2>
                <p>
                    Have you ever tried iced coffee? It's a fantastic way to cool down during summer.
                    Refreshing and energizing, it's perfect for hot days. A sip can lift your spirits and keep you cool.
                    If you haven't tried it yet, you're missing out!
                </p>
                <Link>Try Now!</Link>
            </div>
        </div>
        <div className='opportunity-footer'>
            Experience the ultimate refreshment with every sip!
        </div>
    </div>
  )
}

export default HomeOpportunity