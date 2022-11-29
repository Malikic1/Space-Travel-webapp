import classes from "./NewMeetupsForm.module.css";
import Card from "./Card";
function NewmeetupsForm() {
  return (
    <Card>
      <form>
        <div>
          <label htmlFor="title">Meetup TItle</label>
          <br />
          <input type="text" id="title" required />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <br />
          <input type="url" id="image" required />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" id="address" required />
        </div>
        <div>
          <label htmlFor="title">Description</label>
          <br />
          <textarea type="text" id="description" rows="5" required></textarea>
        </div>
        <button className={classes.but}>
          <b>Add Meetup</b>
        </button>
      </form>
    </Card>
  );
}
export default NewmeetupsForm;
