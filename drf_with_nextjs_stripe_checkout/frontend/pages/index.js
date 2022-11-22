import { useEffect, useState } from "react";
import Image from 'next/image'


const API_URL = "http://localhost:8000";
const NEXT_URL = "http://localhost:3000"

function AddCredits() {
    const [showcredits, setshowcredits] = useState('')
    const [price, setprice] = useState('')
    const [user_id, setuser_id] = useState("")
    const [apiurl, setapiurl] = useState("")
    const [sucesss_url, setsucesss_url] = useState("")
    const [faild_url, setfaild_url] = useState("")

    useEffect(() => {
        setuser_id(localStorage.getItem("user_id"))
        setapiurl(API_URL + "/payment/stripe/create-checkout/")
        setsucesss_url(NEXT_URL + "/success")
        setfaild_url(NEXT_URL + "/failed")
    }, [user_id, price])

    console.log(user_id, sucesss_url, faild_url)
    function usdtocredits(e) {
        var usd = e.target.value;
        var cover_to_credits = parseFloat(usd) * 10
        var pricevalue = parseFloat(usd) * 100
        setprice(pricevalue)
        console.log(usd)
        if (cover_to_credits) {
            var creditsshow = "$" + usd + " = " + cover_to_credits + " credit points"
            setshowcredits(creditsshow)
        }
        else {
            setshowcredits("")
        }

    }
    return (
        <>
            <div>
                <h1 className="font-[700] text-[30px] mx-auto text-center mt-10 ">Stripe Payment</h1>
            </div>
           

            <div className="w-fit mx-auto mt-10  border border-black p-10 drop-shadow-lg rounded-[10px] bg-blue-600">
                <Image src={'/image1.jpg'} width={150} height={60} className=" rounded-[5px]" />
                <div className="space-y-3">
                    <h1 className="text-white text-[24px] font-[700]">Nike shoes </h1>
                    <h2 className="text-white text-[24px] font-[700]">Buy For $125</h2>
                    <form action={apiurl} method="post">
                        <input type="hidden" value="12500" name="price" />
                        <input type="hidden" value={sucesss_url} name="redirect-sucesss-url" />
                        <input type="hidden" value={faild_url} name="redirect-failed-url" />
                        <input type="hidden" name='product_name' value="Topup"></input>
                        <input
                            className="text-white text-[24px] font-[700] bg-green-700 w-[100px] rounded-[10px] drop-shadow-lg"
                            type="submit" value="Buy" />
                        <input className="w-28 text-black text-center ml-2 rounded-sm" value={12500} type='hidden' name='amount' min="0.1" step="0.1" required></input>
                        <br></br>
                        <input type="hidden" className="w-28 text-black text-center ml-2 rounded-sm" name='user_name' value={"demo"}></input>
                        <div>&nbsp;</div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default AddCredits;