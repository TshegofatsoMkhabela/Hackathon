function isIPad() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const iPadDimensions = [
    { width: 768, height: 1024 }, // iPad Mini, iPad 9th Gen
    { width: 820, height: 1180 }, // iPad Air (4th & 5th Gen), iPad 10th Gen
    { width: 834, height: 1194 }, // iPad Pro 11-inch
    { width: 1024, height: 1366 }, // iPad Pro 12.9-inch
  ];

  return iPadDimensions.some(
    (dim) =>
      (width === dim.width && height === dim.height) ||
      (width === dim.height && height === dim.width) // Check both portrait & landscape
  );
}

if (isIPad()) {
  alert(
    "Hey we noticed you are using an iPad. We do not currently support your device"
  );
  window.location.href = "https://github.com/CODINGCLUB404";
}
