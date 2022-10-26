const Card = (props) => {
  return (
    <div className="p-4 bg-white rounded-2xl">
      <p className="text-xl lg:text-2xl">{props.title}</p>
      <div className="mt-4">{props.children}</div>
    </div>
  );
};

export default Card;
