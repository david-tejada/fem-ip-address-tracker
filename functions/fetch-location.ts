import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  const IPIFY_API_KEY = process.env.IPIFY_API_KEY;
  const q = event.queryStringParameters?.q;

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
