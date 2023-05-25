import axios from "axios";
import { useState } from "react";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //TODO: Grab the title and description from the variables, along with the image file, and store them in a FormData to send to the database. Afterwards, navigate to /
    const fData = new FormData();
    const image = event.target.image.files[0]; //event.target.HERE needs to match the name of your type="file" input.
    fData.append("imageUrl", image); //imageUrl string should match middleware uploader.single("imageUrl")
    fData.append("title", title); //to make things easier, the names of your fData properties (besides the image one) should match your schema field names.
    fData.append("description", description);
    const response = await axios.post(
      "http://localhost:5005/api/movies",
      fData
    );
    if (response.status === 201) {
      console.log(response.data);
    }
  };
  return (
    <>
      <form
        encType="multipart/form-data" //Don't forget this, otherwise data might not be passed correctly.
        className="form"
        onSubmit={handleSubmit}
      >
        <label>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Image:{" "}
          <input type="file" accept="image/jpg, image/png" name="image" />
        </label>

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddMovie;
