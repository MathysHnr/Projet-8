import Montagne from "../assets/montagne.png";
import Collapsible from "../components/Collapsible";
import about from "../datas/about.json";

function APropos() {
  return (
    <div className="ctn_a-propos">
      <div className="img_banner_apropos">
        <img src={Montagne} alt="Montagne et forêt" className="img_paysage" />
      </div>

      <div className="desc">
        {about.map((data) => (
          <Collapsible key={data.id} label={data.title}>
            <p className="desc_p">{data.description}</p>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}

export default APropos;
