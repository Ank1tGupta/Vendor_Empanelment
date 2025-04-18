import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const PaymentPage = () => {
  const { vendorId } = useParams();

  useEffect(() => {
    const makePayment = async () => {
      try {
        const res = await api.post(`/payment/create-checkout-session/`, {
          vendor_id: vendorId,
        });
        window.location.href = res.data.checkout_url;
      } catch (err) {
        alert("Failed to start payment");
      }
    };

    makePayment();
  }, [vendorId]);

  return <div className="p-6 text-xl">Redirecting to Stripe Checkout...</div>;
};

export default PaymentPage;
