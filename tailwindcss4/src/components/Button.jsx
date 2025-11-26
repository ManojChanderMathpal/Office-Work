function Button({ label }) {
  return (
    <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: "Submit",
};

export default Button;
