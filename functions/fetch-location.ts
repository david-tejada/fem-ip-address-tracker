import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  const IPIFY_API_KEY = process.env.IPIFY_API_KEY;

  // When the request is for the user's location we need to pass the user's ip
  // address or we would get the location where the Netlify function is run.
  const clientIp = event.headers["x-nf-client-connection-ip"];
  const isLocalhost = clientIp === "127.0.0.1" || clientIp === "::1";

  const q = event.queryStringParameters?.q || (isLocalhost ? "" : clientIp);

  try {
    const domainQuery = q ? `&domain=${q}` : "";
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY}${domainQuery}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

export { handler };
