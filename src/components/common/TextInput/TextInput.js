const TextInput = (props) => {
  if (props.options) {
    return (
      <select value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  } else {
    return <input value={props.value} onChange={props.onChange} type="text" />;
  }
};
export default TextInput;