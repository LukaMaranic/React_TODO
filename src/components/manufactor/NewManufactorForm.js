export default function newManufactor() {
  return (
    <>
      <form>
        <label for="manufactorName">Manufactor name:</label>
        <input type="text" id="manufactorName" name="manufactorName" />
        <label for="manufactorAbrv">Manufactor abbrivation:</label>
        <input type="text" id="manufactorAbrv" name="manufactorAbrv" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
