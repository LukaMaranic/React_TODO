export default function UpdateVehicleForm() {
  return (
    <>
      <form>
        <label for="makeId">Make Id:</label>
        <input type="dropdown" id="makeId" name="makeId" />
        <label for="manufactorName">Manufactor name:</label>
        <input type="text" id="manufactorName" name="manufactorName" />
        <label for="manufactorAbrv">Manufactor abbrivation:</label>
        <input type="text" id="manufactorAbrv" name="manufactorAbrv" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
