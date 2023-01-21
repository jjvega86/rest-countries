export const getUniqueRegions = (data) => {
  return ["All Regions", ...new Set(data.map((country) => country.region))];
};
