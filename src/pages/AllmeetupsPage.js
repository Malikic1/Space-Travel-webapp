import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4IFNaT561wxvTe6YE-KA76atWxOng6E9aA&usqp=CAU",
    title: "This is a first meetup",
    address: "Meetupstreet 5, 2343 MeetUp Town",
    description:
      "This is a first, amazing meetup which you definitely should not miss.",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4IFNaT561wxvTe6YE-KA76atWxOng6E9aA&usqp=CAU",
    address: "Meetupstreet 5, 2343 MeetUp Town",
    description:
      "This is a first, amazing meetup which you definitely should not miss.",
  },
];

function Allmeetups() {
  return (
    <div>
      <h1>ALL Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}

export default Allmeetups;
