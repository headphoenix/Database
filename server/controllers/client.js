import Region from "../models/Region.js";
import RegionStat from "../models/RegionStat.js";
import User from "../models/User.js";


export const getRegions = async (req, res) => {
    try {
      const regions = await Region.find();
  
      const regionsWithStats = await Promise.all(
        regions.map(async (region) => {
          const stat = await RegionStat.find({
            regionId: region._id,
          });
          return {
            ...region._doc,
            stat,
          };
        })
      );
  
      res.status(200).json(regionsWithStats);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  export const getMembers = async (req, res) => {
    try {
      const members = await User.find();
      res.status(200).json(members);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
//   export const getTransactions = async (req, res) => {
//     try {
//       // sort should look like this: { "field": "userId", "sort": "desc"}
//       const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;
  
//       // formatted sort should look like { userId: -1 }
//       const generateSort = () => {
//         const sortParsed = JSON.parse(sort);
//         const sortFormatted = {
//           [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
//         };
  
//         return sortFormatted;
//       };
//       const sortFormatted = Boolean(sort) ? generateSort() : {};
  
//       const transactions = await Transaction.find({
//         $or: [
//           { cost: { $regex: new RegExp(search, "i") } },
//           { userId: { $regex: new RegExp(search, "i") } },
//         ],
//       })
//         .sort(sortFormatted)
//         .skip(page * pageSize)
//         .limit(pageSize);
  
//       const total = await Transaction.countDocuments({
//         name: { $regex: search, $options: "i" },
//       });
  
//       res.status(200).json({
//         transactions,
//         total,
//       });
//     } catch (error) {
//       res.status(404).json({ message: error.message });
//     }
//   };
  
  export const getGeography = async (req, res) => {
    try {
      const users = await User.find();
  
      const mappedLocations = users.reduce((acc, { country }) => {
        const countryISO3 = getCountryIso3(country);
        if (!acc[countryISO3]) {
          acc[countryISO3] = 0;
        }
        acc[countryISO3]++;
        return acc;
      }, {});
  
      const formattedLocations = Object.entries(mappedLocations).map(
        ([country, count]) => {
          return { id: country, value: count };
        }
      );
  
      res.status(200).json(formattedLocations);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };