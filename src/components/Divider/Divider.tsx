const Divider = () => {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <div className="w-[30%] h-[1px] bg-ACCENT"></div>
      <div className="w-[10px] h-[10px] bg-ACCENT rotate-45"></div>
      <div className="w-[30%] h-[1px] bg-ACCENT"></div>
    </div>
  );
};

export default Divider;
