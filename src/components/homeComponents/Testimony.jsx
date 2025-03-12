import person from "../../assets/blackMan.jpg";

export default function Testimony() {
  return (
    <div className="testimonyContainer">
      <div className="testimonyText">
        <div className="testimonyTitle">
          Money <u>please</u>
        </div>
        <div className="testimonyDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
          sem, pretium in ligula id, viverra imperdiet sem. In euismod neque ac
          mi congue suscipit. Donec et efficitur nisl. Integer eu odio lacus.
          Curabitur gravida nunc eu dictum vestibulum. In sodales quam nunc, sit
          amet laoreet mi pretium nec. In volutpat, sem ac vestibulum laoreet,
          tellus lectus hendrerit ligula, tincidunt eleifend tortor nisi
          vehicula est.<br></br>
          <br></br> Nunc condimentum iaculis mi. Sed quis tristique ex. Etiam
          sodales, ipsum eu tristique ornare, magna dui commodo massa, vitae
          ornare arcu orci sit amet lacus. Pellentesque quis molestie nisi. Nam
          eu tempus nibh. Phasellus quis dolor ac dolor pulvinar aliquam sit
          amet molestie massa.Donec et efficitur nisl. Integer eu odio lacus.
          Curabitur gravida nunc eu dictum vestibulum. In sodales quam nunc, sit
          amet laoreet mi pretium nec.
        </div>
      </div>
      <div className="testimonyImgContainer">
        <img className="testimonyImg" src={person} alt="" />
      </div>
    </div>
  );
}
