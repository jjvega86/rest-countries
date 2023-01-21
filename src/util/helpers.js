export const getUniqueRegions = (data) => {
  return ["All Regions", ...new Set(data.map((country) => country.region))];
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
