const neas = [
  {
    "full_name": "1566 Icarus (1949 MA)",
    "a": "1.078076432",
    "e": "0.827072914",
    "i": "22.81881892",
    "om": "87.98911327",
    "w": "31.40697081",
    "ma": "8.160598893"
  },
  {
    "full_name": "1620 Geographos (1951 RA)",
    "a": "1.245655278",
    "e": "0.33545381",
    "i": "13.33739043",
    "om": "337.1856335",
    "w": "276.9638903",
    "ma": "16.89243004"
  },
  {
    "full_name": "1862 Apollo (1932 HA)",
    "a": "1.470372413",
    "e": "0.559950159",
    "i": "6.354774105",
    "om": "35.61719647",
    "w": "285.9919159",
    "ma": "199.087018"
  },
  {
    "full_name": "1981 Midas (1973 EA)",
    "a": "1.7763363",
    "e": "0.650335103",
    "i": "39.83111805",
    "om": "356.8629785",
    "w": "267.8249087",
    "ma": "35.9911584"
  },
  {
    "full_name": "2101 Adonis (1936 CA)",
    "a": "1.874240001",
    "e": "0.763956935",
    "i": "1.322075868",
    "om": "349.4986766",
    "w": "43.60366893",
    "ma": "52.96872422"
  },
  {
    "full_name": "2102 Tantalus (1975 YA)",
    "a": "1.290033303",
    "e": "0.29927236",
    "i": "64.00479642",
    "om": "94.36039279",
    "w": "61.53675306",
    "ma": "216.5140406"
  },
  {
    "full_name": "2135 Aristaeus (1977 HA)",
    "a": "1.599790251",
    "e": "0.503134536",
    "i": "23.06648429",
    "om": "191.1342704",
    "w": "290.9712244",
    "ma": "240.2898378"
  },
  {
    "full_name": "2201 Oljato (1947 XC)",
    "a": "2.174221328",
    "e": "0.712911358",
    "i": "2.522413345",
    "om": "74.98751471",
    "w": "98.23956125",
    "ma": "264.6362825"
  },
  {
    "full_name": "2340 Hathor (1976 UA)",
    "a": "0.843829246",
    "e": "0.449884166",
    "i": "5.854591233",
    "om": "211.5421371",
    "w": "39.92629417",
    "ma": "42.10443295"
  }
];

const users = [
  {
    "name"   : "user1",
    "age"     : 27,
    "latiude" : 42,
    "longitude"    : 144,
    "hotspot_asteroids" : 0,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 40,
    "latiude" : -44,
    "longitude"    : -106,
    "hotspot_asteroids" : 0,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 22,
    "latiude" : -27,
    "longitude"    : 68,
    "hotspot_asteroids" : 0,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 54,
    "latiude" : 7,
    "longitude"    : 53,
    "hotspot_asteroids" : 0,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 44,
    "latitude" : 112,
    "longitude"    : 32,
    "hotspot_asteroids" : 0,
    "price" : 0
  }
];

const neas_coords = [
  {
    "full_name": "1566 Icarus (1949 MA)",
    "a": "1.078076432",
    "e": "0.827072914",
    "i": "22.81881892",
    "om": "87.98911327",
    "w": "31.40697081",
    "ma": "8.160598893",
    "latitude" : 100,
    "longitude" : 20
  },
  {
    "full_name": "1620 Geographos (1951 RA)",
    "a": "1.245655278",
    "e": "0.33545381",
    "i": "13.33739043",
    "om": "337.1856335",
    "w": "276.9638903",
    "ma": "16.89243004",
    "latitude" : 80,
    "longitude" : 110
  },
  {
    "full_name": "1862 Apollo (1932 HA)",
    "a": "1.470372413",
    "e": "0.559950159",
    "i": "6.354774105",
    "om": "35.61719647",
    "w": "285.9919159",
    "ma": "199.087018",
    "latitude" : 110,
    "longitude" : 120
  }
];

const users_hotspot = [
  {
    "name"   : "user1",
    "age"     : 22,
    "latiude" : -27,
    "longitude"    : 68,
    "hotspot_asteroids" : 10,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 54,
    "latiude" : 7,
    "longitude"    : 53,
    "hotspot_asteroids" : 5,
    "price" : 0
  },
  {
    "name"   : "user1",
    "age"     : 44,
    "latiude" : 1,
    "longitude"    : -26,
    "hotspot_asteroids" : 4,
    "price" : 0
  }
]

module.exports.neas = neas;
module.exports.users = users;
module.exports.neas_coords = neas_coords;
module.exports.users_hotspot = users_hotspot;