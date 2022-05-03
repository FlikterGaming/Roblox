//How to use:
//Go on the Roblox website page at the layered clothing item you want to purchase.
//Open the console window in your browser (in most browsers you press Ctrl + Shift + I on your keyboard and then click the "Console" button at the top of the newly oppened window.
//Now you can copy and paste this code inside the console command line.
//Then, copy the product id of the layered clothing item by inspecting the purchase button using inspect element and looking inside the "s of the "data-product-id" tag.
//In the ProductId variable inside the code located in the console command line, remove the number and paste the product id number as the new value and run the code by pressing Enter on your keyboard.
//It should work shortly, if it doesn't, Roblox fixed this way of purchasing layered clothing items.
//More info is available in the code below.

//This uses the public economy API Roblox created for users to use. You will not get banned for this because it is an intended feature Roblox added. This will not steal your Roblox account or any associated info.

var ProductId = 1235118569 //Change this to the product id of the item you want to buy. This will remove the amount of robux this item costs from your account.
var X_CSRF_TOKEN = Roblox.XsrfToken.getToken() //This is your Roblox X-CSRF-TOKEN request header which is used to authorize the purchase for your account.

fetch("https://economy.roblox.com/v2/user-products/" + ProductId + "/purchase", { //This is the official Roblox API link purchase data is being sent to.
    method: "POST",
    credentials: "include",
    
    headers: {
        "Content-Type": "application/json",
        "x-csrf-token": X_CSRF_TOKEN
    },
    
    body: JSON.stringify( //This is the sent data determining that we are buying it from the Roblox account and that we expect it costs 1 robux, and if it doesn't we won't buy it.
        {
            "expectedCurrency": 1,
            "expectedPrice": 1,
            "expectedSellerId": 1
        }
    )
})
