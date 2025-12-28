import TypewriterTitle from "./kokonutui/type-writer";

const MainLogo = () => {
  return (
    <TypewriterTitle
      sequences={[
        { text: "Reelio", deleteAfter: false },
      ]}
    />
  );
};

export default MainLogo;
