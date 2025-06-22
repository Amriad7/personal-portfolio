import pfp from "../../assets/pfp.png";

const MyPhoto = () => {
  return (
    <div className="text-center">
      <img
        src={pfp}
        alt="Amriad's profile picture"
        className="m-auto size-[180px] sm:size-[320px] sm:mt-[80px] lg:mt-0 rounded-xl"
      />
    </div>
  );
};
export default MyPhoto;
