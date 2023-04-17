function Card({ title, content, color, imgU, index }) {
  console.log(imgU);
  const colorVariants = {
    cyan: 'border-Cyan',
    red: 'border-Red',
    orange: 'border-Orange',
    blue: 'border-Blue',
  };
  const topVariants = {
    0: 'top-[100px]',
    2: 'top-[100px]',
  };
  return (
    <div
      className={`${colorVariants[color]} md:relative ${topVariants[index]} md:w-[26%] flex flex-col bg-white shadow-2xl  rounded-lg p-7 gap-2 border-t-4`}
    >
      <p className="text-VeryDarkBlue font-bold text-xl">{title}</p>
      <p className="text-GrayishBlue font-light text-xs">{content}</p>
      <div className="flex justify-end mt-3">
        <img src={imgU} alt="" />
      </div>
    </div>
  );
}

export default Card;
