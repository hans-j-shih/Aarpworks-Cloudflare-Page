export async function onRequest(context) {
    return new Response(JSON.stringify({ message: "Hello from your attached Cloudflare Worker on aarpworks.com!" }), {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    });
}
