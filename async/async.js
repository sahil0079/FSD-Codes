
const posts = [
    { id: 1, title: 'Post One', description: "This is first post" },
    { id: 2, title: 'Post Two', description: "This is second post" }
]

function getPosts() {
    setTimeout(() => {
        let result = ''

        posts.forEach((post, index) => {

            result = result + `<li> ${post.title} </li>`

        })
        document.body.innerHTML = result
    }, 1000)
}

async function x() {

    await createPost({ id: 3, title: "Post Three", description: "This is post three" })

    getPosts()

}
x()

function createPost(post) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post)

            const error = false

            if (!error) {
                resolve()
            } else {
                reject('Something is wrong: error')
            }

        }, 2000)

    })

}

// createPost({ id: 3, title: "Post Three", description: "This is post three" }).then(getPosts).catch(error => console.log(error)).finally(() => console.log('session ended'))



// createPost({ id: 3, title: "Post Three", description: "This is post three" }, getPosts)