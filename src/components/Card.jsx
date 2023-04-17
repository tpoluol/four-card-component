function Card({ title, content, color, imgU }) {
  console.log(imgU);
  const colorVariants = {
    cyan: 'border-Cyan',
    red: 'border-Red',
    orange: 'border-Orange',
    blue: 'border-Blue',
  };
  return (
    <div
      className={`${colorVariants[color]} flex flex-col bg-white shadow-2xl  rounded-lg p-7 gap-2 border-t-4`}
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
