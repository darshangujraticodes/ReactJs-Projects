import React from "react";

// image imports
import dish1 from "../assets/swiggy/dishes/dish1.jpeg";
import dish2 from "../assets/swiggy/dishes/dish2.jpeg";
import dish3 from "../assets/swiggy/dishes/dish3.jpeg";
import dish4 from "../assets/swiggy/dishes/dish4.jpeg";
import dish5 from "../assets/swiggy/dishes/dish5.jpeg";
import dish6 from "../assets/swiggy/dishes/dish6.jpeg";
import dish7 from "../assets/swiggy/dishes/dish7.jpeg";
import dish8 from "../assets/swiggy/dishes/dish8.jpeg";
import dish9 from "../assets/swiggy/dishes/dish9.jpeg";
import restpic1 from "../assets/swiggy/restaurant/pic1.jpeg";
import restpic2 from "../assets/swiggy/restaurant/pic2.jpeg";
import restpic3 from "../assets/swiggy/restaurant/pic3.jpeg";
import restpic4 from "../assets/swiggy/restaurant/pic4.jpeg";
import restpic5 from "../assets/swiggy/restaurant/pic5.jpeg";
import restpic6 from "../assets/swiggy/restaurant/pic6.jpeg";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// component imports
import RestaurantCard from "./RestaurantCard";
import DishSection from "./DishSection";

function BodySection() {
  /*
  Learning Point : Config driven UI
  It is the best industry practice when data need to reflected in website as per different location parameter 
  eg swiggy, zomato, amazon or any dynamic sites

  How it is useful ?
  All company run different offers and special ad campaign on regional level which need to restricted to that particular city only and different offer program for different city are controlled though api.
  
  config api consits of segregation of section dedicated with region offer etc.
  
  eg. swiggy creat config ui using config api body section as follows 
  1] regional offer listing 
  2] regional restaurant listing
  3] display type carousel, direct display, etc

  1:46:19

  https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  */

  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const mumbaiRestaurantList = [
    {
      info: {
        id: "28405",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "CST Road",
        areaName: "Santacruz East",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "61955",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Chinese.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Chinese.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹179",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/chinese-wok-cst-road-santacruz-east-mumbai-28405",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "78036",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
        locality: "Central Plaza, Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.4,
        parentId: "166",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 05:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹139",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "32399",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
        locality: "Kalina Artista",
        areaName: "Santacruz East",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 02:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹209",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "243517",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_243517.JPG",
        locality: "Kurla East",
        areaName: "Saki Naka",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.2,
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 51,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:00:00",
          opened: true,
        },

        isOpen: true,
        type: "F",

        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-kurla-east-saki-naka-mumbai-243517",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "24463",
        name: "Domino's Pizza",
        cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
        locality: "Kurla East",
        areaName: "Kurla West",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.7,
        parentId: "2456",
        avgRatingString: "3.7",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 02:55:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-kurla-east-kurla-west-mumbai-24463",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "811336",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "e5f54df4ed8bac458b801ede76ee37d0",
        locality: "Hirachand Desai Road",
        areaName: "LBS MARG GHATKOPAR WEST",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.3,
        veg: true,
        parentId: "4961",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:00:00",
          opened: true,
        },

        isOpen: true,
        type: "F",

        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-hirachand-desai-road-lbs-marg-ghatkopar-west-mumbai-811336",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "41471",
        name: "Wow! Momo",
        cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
        locality: "Kurla West",
        areaName: "Kurla West",
        costForTwo: "₹300 for two",
        cuisines: [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "1776",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 58,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:00:00",
          opened: true,
        },

        isOpen: true,
        type: "F",

        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹119",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "500+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-momo-kurla-west-mumbai-41471",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "535962",
        name: "SLYCE PIZZA",
        cloudinaryImageId: "4c899e0501bef7e4c6acd1fa7cc2c82b",
        locality: "Trade Center Building",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹600 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food"],
        avgRating: 4.3,
        parentId: "321813",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 05:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/slyce-pizza-trade-center-building-bandra-kurla-complex-mumbai-535962",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "33561",
        name: "Juno's Pizza - Baking Fresh Since 1974",
        cloudinaryImageId: "a855f6657b55a1f2c3a7aac9101199bc",
        locality: "JAYANT VILLA",
        areaName: "Ghatkopar East",
        costForTwo: "₹1000 for two",
        cuisines: ["Pizzas", "Pastas", "Jain", "Italian", "Fast Food"],
        avgRating: 4.2,
        parentId: "512339",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},

            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "20+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/junos-pizza-baking-fresh-since-1974-jayant-villa-ghatkopar-east-mumbai-33561",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "788771",
        name: "1441 Pizzeria",
        cloudinaryImageId: "c7fcd9e43f4b995c3cd08d7632b426f0",
        locality: "Trade Center Building",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹600 for two",
        cuisines: ["Italian"],
        avgRating: 4.2,
        parentId: "2697",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹249",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/1441-pizzeria-trade-center-building-bandra-kurla-complex-mumbai-788771",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "391816",
        name: "Louis Burger",
        cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
        locality: "Trade Centre",
        areaName: "Santacruz Bandra east",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.5,
        parentId: "22485",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 05:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/louis-burger-trade-centre-santacruz-bandra-east-mumbai-391816",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "47833",
        name: "Persian Darbar",
        cloudinaryImageId: "7aeb2bbff29d99d6e986240911ce0e71",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹500 for two",
        cuisines: [
          "North Indian",
          "Biryani",
          "Mughlai",
          "Kebabs",
          "Seafood",
          "Chinese",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "711",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹209",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/persian-darbar-bandra-kurla-complex-mumbai-47833",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9052",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_9052.JPG",
        locality: "Central Plaza, Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.4,
        parentId: "2",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 04:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Sandwiches.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-central-plaza-kalina-santacruz-east-mumbai-9052",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "673363",
        name: "Bombay Sweet Shop",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/28/1dd55edb-2651-4660-9bba-8d3dbe528f98_673363.jpg",
        locality: "Vidyanagari Marg",
        areaName: "Scruz Bandra East",
        costForTwo: "₹700 for two",
        cuisines: ["Desserts", "Snacks", "Bakery", "Sweets", "Indian"],
        avgRating: 4.7,
        veg: true,
        parentId: "48883",
        avgRatingString: "4.7",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹1199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-mumbai-673363",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "202836",
        name: "Hangout Cakes & More",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/28e57ec9-0fef-4a97-96d6-fa0c450a3f3f_202836.jpg",
        locality: "CST Road",
        areaName: "Santacruz East",
        costForTwo: "₹150 for two",
        cuisines: ["Bakery"],
        avgRating: 4.3,
        veg: true,
        parentId: "4508",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/hangout-cakes-and-more-cst-road-santacruz-east-mumbai-202836",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "799184",
        name: "B Burger - Bigger Burger",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/e2e574a8-b5f9-4322-9bdf-455df14c17b5_799184.jpg",
        locality: "Khb Colony",
        areaName: "Scruz Bandra East",
        costForTwo: "₹500 for two",
        cuisines: ["Burgers", "Fast Food", "American"],
        avgRating: 4.3,
        parentId: "454391",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/b-burger-bigger-burger-khb-colony-scruz-bandra-east-mumbai-799184",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "699105",
        name: "Harvest Salad Co",
        cloudinaryImageId: "723def125584c6b35d4a1795438c73df",
        locality: "Kalina CST Road",
        areaName: "Scruz Bandra East",
        costForTwo: "₹500 for two",
        cuisines: ["Salads", "Healthy Food", "Snacks"],
        avgRating: 4.5,
        parentId: "301047",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Guiltfree.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Guiltfree.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },

            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹219",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/harvest-salad-co-kalina-cst-road-scruz-bandra-east-mumbai-699105",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "698272",
        name: "Maiz Mexican Kitchen",
        cloudinaryImageId: "8fb434032fdce4f38d98fef761589c25",
        locality: "Kalina Cst Road",
        areaName: "BKC",
        costForTwo: "₹600 for two",
        cuisines: ["Mexican", "Italian", "American"],
        avgRating: 4.5,
        parentId: "11654",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-10 03:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Gourmet.png",
              description: "Delivery!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Gourmet.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹219",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/maiz-mexican-kitchen-kalina-cst-road-bkc-mumbai-698272",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9864",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a5e2b6e1-abbd-492f-9472-44af9dda6103_9864.jpg",
        locality: "Kurla West",
        areaName: "Phoenix Market City",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 59,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "1K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-kurla-west-phoenix-market-city-mumbai-9864",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "100139",
        name: "Sweet Bengal",
        cloudinaryImageId: "wjjghcbr95nkiirq2zg5",
        locality: "Kurla West",
        areaName: "Kurla West",
        costForTwo: "₹150 for two",
        cuisines: ["Sweets", "Indian", "Snacks", "Desserts"],
        avgRating: 4.8,
        veg: true,
        parentId: "1250",
        avgRatingString: "4.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-08-09 19:00:00",
          opened: true,
        },

        isOpen: true,
        type: "F",

        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
          },
        },

        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",

        externalRatings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "20+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },

      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-bengal-kurla-west-mumbai-100139",
        type: "WEBLINK",
      },
    },
  ];

  const bannerDishList = [
    {
      id: "750589",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
      action: {
        link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        text: "Burgers",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for burger",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",

      description: "Burgers",
    },
    {
      id: "750579",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
      action: {
        link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        text: "Pizzas",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for pizza",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",

      description: "Pizzas",
    },
    {
      id: "749768",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
      action: {
        link: "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
        text: "Momos",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for momos",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",

      description: "Momos",
    },
    {
      id: "750587",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
      action: {
        link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
        text: "Chinese",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for chinese",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",

      description: "Chinese",
    },
    {
      id: "749868",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
      action: {
        link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        text: "Cakes",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for cake",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",

      description: "Cakes",
    },
    {
      id: "750222",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
      action: {
        link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
        text: "Rolls",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for roll",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",

      description: "Rolls",
    },
    {
      id: "750248",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
      action: {
        link: "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
        text: "Shawarma",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for shawarma",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",

      description: "Shawarma",
    },
    {
      id: "750206",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
      action: {
        link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
        text: "Pasta",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for pasta",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",

      description: "Pasta",
    },
    {
      id: "750208",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
      action: {
        link: "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
        text: "Pastry",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for Pastry",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",

      description: "Pastry",
    },
    {
      id: "750591",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
      action: {
        link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        text: "Biryani",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for biryani",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",

      description: "Biryani",
    },
    {
      id: "750639",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kachori.png",
      action: {
        link: "https://www.swiggy.com/collections/80448?collection_id=80448&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
        text: "Kachori",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for kachori",
        altTextCta: "open",
      },
      entityId: "80448",

      description: "Kachori",
    },
    {
      id: "750079",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png",
      action: {
        link: "https://www.swiggy.com/collections/80414?collection_id=80414&tags=layout_BAU_Contextual%2Ccutlet&type=rcv2",
        text: "Cutlet",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for cutlet",
        altTextCta: "open",
      },
      entityId: "80414",

      description: "Cutlet",
    },
    {
      id: "750585",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
      action: {
        link: "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
        text: "South Indian",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for south indian",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",

      description: "South Indian",
    },
    {
      id: "749790",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
      action: {
        link: "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
        text: "Pakoda",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for pakoda",
        altTextCta: "open",
      },
      entityId: "80469",

      description: "Pakoda",
    },
    {
      id: "745861",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      action: {
        link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
        text: "Shake",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for shakes",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",

      description: "Shake",
    },
    {
      id: "750571",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
      action: {
        link: "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
        text: "Pure Veg",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurants curated for veg",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",

      description: "Pure Veg",
    },
    {
      id: "750216",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
      action: {
        link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        text: "Pav Bhaji",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for pav bhaji",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",

      description: "Pav Bhaji",
    },
    {
      id: "749772",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
      action: {
        link: "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
        text: "Noodles",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for noodles",
        altTextCta: "open",
      },
      entityId: "80463",

      description: "Noodles",
    },
    {
      id: "750225",
      imageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
      action: {
        link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
        text: "Salad",
        type: "WEBLINK",
      },
      entityType: "BANNER",
      accessibility: {
        altText: "restaurant curated for salad",
        altTextCta: "open",
      },
      entityId:
        "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",

      description: "Salad",
    },
  ];

  return (
    <>
      <div className="dishSection mt-[120px]  relative z-10">
        <div className="container mx-auto">
          <div className="dishSliderWrap">
            <div className="textWrap mb-5">
              <h1 className="text-3xl font-medium tracking-wider">
                What's on your mind?
              </h1>
            </div>

            <div className="dishCarousel ">
              <Swiper
                spaceBetween={30}
                slidesPerView={7}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <DishSection dishImage={dish1} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish2} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish3} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish4} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish5} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish6} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish7} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish8} />
                </SwiperSlide>
                <SwiperSlide>
                  <DishSection dishImage={dish9} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <hr className="dividerLine my-9" />
        </div>
      </div>

      <div className="topRestaurantSliderSection">
        <div className="container mx-auto">
          <div className="restaurantContentWrap">
            <div className="headContentWrap mb-5">
              <h1 className="text-3xl font-medium tracking-wider">
                Top Restaurant Chains in Mumbai
              </h1>
            </div>

            <div className="restuarantSliderWrap">
              <Swiper
                slidesPerView={4}
                navigation={true}
                modules={[Navigation]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic1}
                    foodName="Chinese Wok"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic2}
                    foodName="KFC"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic3}
                    foodName="MacDonald"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic4}
                    foodName="Wow Momos"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic5}
                    foodName="Mojo Pizza"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <RestaurantCard
                    foodImg={restpic6}
                    foodName="Domino's"
                    foodRating="4.3"
                    deliveryTime="30-35 mins"
                    FoodContent="Chinese Manchurian, Soup & Noddles with Chicken Balls "
                    location="Bandra East"
                    offerText="30% Off upto ₹100"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurantListingSection"></div>
    </>
  );
}

export default BodySection;
