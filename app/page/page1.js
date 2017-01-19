
var React = require('react');
var createModel = require('../pub/model/BaseModel')
var page1 = React.createClass({
	getInitialState: function () {
        return {
            model: createModel,
            
        };
    },
	componentWillMount: function () {
        
       
        this.state.model.regModelChangeListener(this.modelevent);
        
		this.state.model.setValue('pageData',123)
        this.state.model.dispatchEvent("PAGE")
    },
    modelevent: function (key) {
    	console.log(key);
    	if (key === 'PAGE') {
    		console.log(this.state.model.getValue('pageData'))
    	}
    },
    render: function () {
        return (
          <div className="content">
				我是首页
          </div>
        );
    }
});
module.exports = page1;