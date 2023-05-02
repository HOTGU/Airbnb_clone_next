import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import React from "react";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";
import getListings from "@/app/actions/getListings";

export async function generateStaticParams() {
  const listings = await getListings({});
  return listings.map((listing) => listing.id);
}

interface IParams {
  listingId: string;
}

const page = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <div>hello </div>;
  }

  return (
    <div>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </div>
  );
};

export default page;
