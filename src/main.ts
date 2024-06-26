import { setMapView } from "./map";

type LocationDataError = { code: number; messages: string };
type LocationData = {
  ip: number;
  isp: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    region: string;
    timezone: string;
    postalCode: string;
  };
};

type LocationDataResponse = LocationDataError | LocationData;

const searchForm = document.querySelector<HTMLFormElement>("#js-search");

const pIp = document.querySelector("#js-ip")!;
const pLocation = document.querySelector("#js-location")!;
const pTimezone = document.querySelector("#js-timezone")!;
const pIsp = document.querySelector("#js-isp")!;

function fillLocation(data: LocationDataResponse) {
  if ("code" in data) {
    console.error(data.messages);
    pIp.textContent = "--";
    pLocation.textContent = "--";
    pTimezone.textContent = "--";
    pIsp.textContent = "--";
    return;
  }

  pIp.textContent = data.ip.toString();
  pLocation.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
  pTimezone.textContent = `UTC ${data.location.timezone}`;
  pIsp.textContent = data.isp;

  setMapView(data.location.lat, data.location.lng);
}

async function fetchLocation(
  ipOrDomain?: string,
): Promise<LocationDataResponse> {
  const query = ipOrDomain ? `?q=${encodeURIComponent(ipOrDomain)}` : "";

  const response = await fetch(`.netlify/functions/fetch-location${query}`);
  return response.json();
}

searchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const search = formData.get("search");

  if (!search) {
    return;
  }

  const data = await fetchLocation(search.toString());
  fillLocation(data);
});

const data = await fetchLocation();
fillLocation(data);

export {};
