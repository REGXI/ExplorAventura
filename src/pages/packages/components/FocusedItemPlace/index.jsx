export function FocusedItemPlace({ focusedPlace }) {
  return (
    <>
      <div className="image-place">
        <img src={focusedPlace?.image} alt="Place ExplorAventura" />
      </div>

      <div className="information-place">
        <div className="title-place">
          <h3>{focusedPlace?.name}</h3>
          <p>{focusedPlace?.description}</p>
        </div>
        <div className="options-package"></div>
      </div>
    </>
  )
}
