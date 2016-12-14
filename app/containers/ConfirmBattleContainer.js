var React = require('react');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitalState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
  },
    render: function() {
      return (
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playerInfo={this.state.playerInfo}
        />
      );
    }
});

module.exports = ConfirmBattleContainer;
