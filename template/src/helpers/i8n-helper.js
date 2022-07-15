import i18n from "i18next";
export const translation = (parent_key) => {
  return (child_key) => {
    return parent_key && child_key
      ? child_key && i18n.t(`${parent_key}.${child_key}`)
      : i18n.t(`${parent_key}`);
  };
};
