import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function OrderListCard (props) {
  const { date, products, total} = props.order;
  const totalProducts = products.length;
  return (
    <div className="flex justify-between items-center mb-3 p-4 w-80 rounded-lg border border-black">
        <div className="flex justify-between w-full">
          <p className="flex flex-col">
            <span className="font-light">{ date.toLocaleString() }</span>
            <span className="font-light">{ totalProducts } artiticles</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">{ total }</span>
            <ArrowForwardIosIcon className="text-black cursor-pointer" />
          </p>
        </div>
      </div>
  );
}

export default OrderListCard;