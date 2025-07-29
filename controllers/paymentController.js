import { instance } from "../index.js";

const makePayment = async (req, res) => {
  try {
    const { amount, tip, name, email, phone ,anonymous } = req.body;
    const total = amount + tip;
    const donorName = anonymous ? "Anonymous" : name
    console.log(total, name, email, phone);

    const options = {
      amount: total * 100, //amount in paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await instance.orders.create(options);

    console.log(order);

    res.status(200).json({success:true,order,razpekey:process.env.RAZORPAY_KEY_ID,name:donorName })
      
  } catch (error) {
    console.log("something went wrong");
    res.status(500).json({ error: "Internal Server error" });
  }
};

export { makePayment };
