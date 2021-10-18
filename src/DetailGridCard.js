import DetailCard from "./DetailCard";
import DetailGridItem from "./DetailGridItem";

function DetailGridCard(props) {
  if (!!props.value) {
    return (
      <DetailGridItem>
        <DetailCard title={props.title} value={props.value} />
      </DetailGridItem>
    )
  }
  return null;
}

export default DetailGridCard;