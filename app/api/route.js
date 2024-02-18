export async function GET(){
    const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=d54d5768df024b09b9e114a48f124fdc")

    const data = await response.json()
    return Response.json({data})

}