import Faq from "react-faq-component";

const data = {
  title: "Pitanja i odgovori",
  rows: [
    {
      title: "Imaš li muško nepočisćeno?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Da li bi za dva tri mjeseca bio spreman za oplodnju ili i sada odmah samo je važno da je mlad?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Imaš li muško nepočišćeno do 15kg?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Gdje ste tačno u Gradiškoj?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "rgb(94, 56, 20)",
  rowTitleColor: "rgb(94, 56, 20)",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const Pitanja = () => {
  return (
    <div className="container-fluid mb-5 my-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitanja;
