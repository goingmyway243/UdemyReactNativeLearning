const API_KEY = "AIzaSyDM9mLN1jj7bB7NftbVdEZnBj1Ti_FJwR8";
export function getMapLocation(lat, lgt) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lgt}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lgt}&key=${API_KEY}`;
}
