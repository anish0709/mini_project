import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };
    const total = localStorage.getItem('total');
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <h2>Select Payment Method</h2>
                <div className="mb-3">
                    <StripeCheckout
                        token={onToken}
                        stripeKey="pk_test_51PDMuGSJd4IFsnd8idKFVlNvBiKmuqLvvRfuIDwLBT9z5Gm6sZAMrynA8CEI44naKLyxhnMRp26w2Qf9vm3AiSO200K6Ahb9Jl"
                        amount={total*100}
                        name="Pay with Card"
                        currency='INR'
                    />
                </div>
                <div className='d-flex gap-5'>
                <button className="btn btn-primary mb-3">Pay with Net Banking</button>
                <button className="btn btn-primary mb-3">Pay with UPI</button>
                <button className="btn btn-primary mb-3">Pay with Wallets</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
