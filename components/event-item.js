import React from "react";
import Link from "next/link";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  console.log(image);
  return (
    <li>
      <img src={image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>{formattedAddress}</div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
