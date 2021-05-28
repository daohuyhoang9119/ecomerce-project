function useTranslate(props) {
  function t(name) {
    return name;
  }
  return {
    t,
  };
}

export default useTranslate;
