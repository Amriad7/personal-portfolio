import pfp from "../../assets/pfp.png";

const MyPhoto = () => {
  return (
    <div className="text-center">
      <img
        src={pfp}
        alt="Amriad's profile picture"
        className="m-auto size-[180px] rounded-xl"
      />
    </div>
  );
};
export default MyPhoto;
