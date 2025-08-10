
const ReviewDetails = () => {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    throw new Error("An error occurred while fetching review details.");
  }

  return (
    <>
      <div>ReviewDetails</div>

    </>
  )
}

export default ReviewDetails