//This uses the public economy api Roblox created for users to use. You will not get banned for this because it is an intended feature Roblox added.

var ProductId = 1235118569 //Change this to the product id of the item you want to buy. This will remove the amount of robux this item costs from your account.

fetch("https://economy.roblox.com/v2/user-products/" + ProductId + "/purchase", { //This is the official Roblox api link purchase data is being sent to.
    body: JSON.stringify( //This is the sent data that determines we are buying it from the Roblox account and that we expect it costs 1 robux, and if it doesn't we won't buy it.
        {
            "expectedCurrency": 1,
            "expectedPrice": 1,
            "expectedSellerId": 1
        }
    ),

    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "x-csrf-token": Roblox.XsrfToken.getToken() //This is your roblox X-CSRF-TOKEN which is used to authorize the purchase for your account.
    }
})
