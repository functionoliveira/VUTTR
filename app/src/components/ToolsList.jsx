import React from 'react';

// import components
import ToolsListHeader from './ToolsListHeader';
import ToolsCard from './ToolsCard';

export default function ToolsList() {
    return (
        <div>
            <div>
                <ToolsListHeader></ToolsListHeader>
            </div>
            <div>
                <ToolsCard></ToolsCard>
                <ToolsCard></ToolsCard>
                <ToolsCard></ToolsCard>
                <ToolsCard></ToolsCard>
            </div>
        </div>
    );
}