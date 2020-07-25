import React from 'react';

// import api
import { instanceToolsAPI } from '../api/main';
// import components
import ToolsListHeader from './ToolsListHeader';
import ToolsCard from './ToolsCard';
// import funções auxiliares
import { Json2QueryString } from '../helpers';

export default class ToolsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tools: [],
          search: '',
          checkbox: false
        };
    }

    handleCheckbox(e) {
        this.setState({...this.state, checkbox: e.target.checked});
    }

    handleInputChange(e) {
        this.setState({...this.state, search: e.target.value});
        let query;
        
        if(this.state.checkbox) {
            query = {tags_like:this.state.search};
        }else{
            query = {q:this.state.search};
        }

        window.history.replaceState(null, null, Json2QueryString(query));
        instanceToolsAPI
            .search(query)
            .then(resp => {
                this.setState({...this.state, tools: resp.data});
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });

    }

    componentDidMount() {
        instanceToolsAPI
            .list()
            .then(response => {
                this.setState({...this.state, tools : response.data});
            });
    }
    
    render() {
        return (
            <div>
                <div>
                    <ToolsListHeader 
                        checkbox={this.state.checkbox}
                        handleCheckbox={this.handleCheckbox.bind(this)}
                        search={this.state.search} 
                        handleInputChange={this.handleInputChange.bind(this)}
                    ></ToolsListHeader>
                </div>
                <div>
                {this.state.tools.map((item, index) => (
                    <ToolsCard key={index} tools={item}></ToolsCard>
                ))}
                </div>
            </div>
        );
    }
}