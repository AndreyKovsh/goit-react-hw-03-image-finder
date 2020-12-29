import PT from 'prop-types';

function ErrorView({ texterror }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {texterror}</p>
    </div>
  );
}

ErrorView.propTypes = {
  texterror: PT.string.isRequired,
};

export default ErrorView;
