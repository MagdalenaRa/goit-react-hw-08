import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{
        display: "block",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#238be0"
    />
  );
};

export default Loader;
