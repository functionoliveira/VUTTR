export const refreshToolsList = (tools) => ({
    type    : 'REFRESH_TOOLS',
    payload : tools
});

export const addToolsList = (toolsItem) => ({
    type    : 'ADD_TOOLS',
    payload : toolsItem
});

export const removeToolsList = (toolsID) => ({
    type    : 'REMOVE_TOOLS',
    payload : toolsID
});