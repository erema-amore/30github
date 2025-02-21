function CurrentDate() {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
      today.getMonth() + 1
  }/${today.getFullYear()}`;

  return <p>Today's Date: {formattedDate}</p>;
}

export default CurrentDate