import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

import "./Detail.css";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="detail-container">
      <img src={gifUrl} alt={name} loading="lazy" className="gif" />

      <div className="detail-text-container">
        <h3 className="detail-name">{name}</h3>
        <p className="detail-text">
          Exercises keep you strong. <span className="span-name">{name}</span> is one of the best exercise to
          target your {target}. It will help you to improve your mood and gain
          energy.
        </p>

        {extraDetails?.map(({ icon, name }, i) => (
          <div key={i} className="extra-container">
            <button className="extra">
              <img src={icon} alt={name} className="w-12 h-12" />
            </button>
            <p className="paragraph-name">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
