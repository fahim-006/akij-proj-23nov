const data = [
  {
    name: "Japan made ISUZU Diesel Engine 1(2.0 ~ 5.0 Ton)",
    img: "/images/Forklift/1.jpg",
    urlL: "forklift_mojdur",
  },

  {
    name: "Japan made Nissan Petrol Engine 1(2.0 ~ 3.5 Ton)",
    img: "/images/Forklift/2.jpg",
    urlL: "forklift_mojdur",
  },

  {
    name: "Electric/Battery Forklift 1(2.0 ~ 2.5 Ton)",
    img: "/images/Forklift/3.jpg",
    urlL: "forklift_mojdur",
  },

  {
    name: "Electric Stacker 1(1.5 Ton)",
    img: "/images/Forklift/4.jpg",
    urlL: "forklift_mojdur",
  },

  {
    name: "Hand Pallet 1(3.0 Ton)",
    img: "/images/Forklift/5.jpg",
    urlL: "forklift_mojdur",
  },

  {
    name: "Manual Stacker 1(1.5 Ton)",
    img: "/images/Forklift/6.jpg",
    urlL: "forklift_mojdur",
  },
];

const TopVehicles = () => {
  return (
    <>
      <div class="grid-container-topVehicles">
        {data.map((item) => (
          <div>
            <a href={item.urlL} className="anchorTag">
              <img src={item.img} style={{ width: "284px" }} />
              <p className="p-0 m-0" style={{ textAlign: "center" }}>
                {item.name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopVehicles;
