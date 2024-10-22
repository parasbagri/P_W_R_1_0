import { useState } from "react";
const ImageShow = () => {
  const [firstState, ChangeState] = useState("https://picsum.photos/400/400");
  const ImageCange = () => {
    const rendomIMG = `https://picsum.photos/400/400?random=${Math.floor(
      Math.random() * 1000
    )}`;
    console.log(rendomIMG);
    ChangeState(rendomIMG);
  };
  return (
    <div>
      <h1>Image Show</h1>
      <img src={firstState} alt="Random Image" />
      <button onClick={ImageCange}>Ckeck To Change </button>
    </div>
  );
};

export default ImageShow;
