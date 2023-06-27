function deletePost(postId) {
    let post
const posts = db.posts

    for (let i = 0; i < posts.length; i++) {
        const _post = posts[i]

        if (_post.id === postId) {
            post = _post

            break
        }
    }

    if (post === undefined)
        return false

    const index = posts.findIndex(function (postAux) {
        return post.id === postAux.id
    })

    posts.splice(index,1)
    db.posts = posts
    return true
}