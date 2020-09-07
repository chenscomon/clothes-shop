const INIT_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            id: 2,
            linkUrl: 'jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 3,
            linkUrl: 'sneakers'
        },
        {
            title: 'women',
            imageUrl: 'https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            id: 4,
            size: 'large',
            linkUrl: 'women'
        },
        {
            title: 'men',
            imageUrl: 'https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            id: 5,
            size: 'large',
            linkUrl: 'man'
        }
    ]
}

const directoryReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;