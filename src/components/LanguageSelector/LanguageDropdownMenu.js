import { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("es");

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang)
  };

  return (
    <select onChange={handleLangChange} value={language}>
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="ptr">PTR</option>
    </select>
  );
};

export default DropdownLanguage;
