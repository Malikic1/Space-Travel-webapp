import Card from "./Card";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <div>
      {props.meetups.map((meetup) => {
        return (
          <section>
            <Card>
              <div className={classes.meetup}>
                <div className={classes.image}>
                  <img src={meetup.image} alt={meetup.title} />
                </div>
                <div className={classes.about}>
                  <h3>{meetup.title}</h3>
                  <address>{meetup.address}</address>
                  <p>{meetup.description}</p>
                  <div>
                    <button className={classes.btn}>
                      <b>Add To Favourites</b>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        );
      })}
    </div>
  );
}
export default MeetupList;
