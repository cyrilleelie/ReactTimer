var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
      <div>
        <div>
          <div>
            <Navigation/>
            <p>Main.jsx Rendered</p>
            <div className="columns medium-6 large-4 small-centered">
              {props.children}
            </div>
          </div>
        </div>
      </div>
  );
};

module.exports = Main;
