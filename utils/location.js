const API_KEY = "AIzaSyDM9mLN1jj7bB7NftbVdEZnBj1Ti_FJwR8";

export function getMapLocation(lat, lgt) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lgt}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lgt}&key=${API_KEY}`;
}

export async function getAddress(lat, lgt) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lgt}&key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  return data.results[0].formatted_address;
}
