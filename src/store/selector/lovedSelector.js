
export const mapLovedBlog = state => {
    return state.blogReducers.loved.map((item) => {
        return item.id;
    })
}
